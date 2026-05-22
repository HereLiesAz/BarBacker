import { useState, useEffect } from 'react';

interface GitHubReleaseAsset {
  name: string;
  browser_download_url: string;
  content_type: string;
}

interface GitHubRelease {
  tag_name: string;
  assets: GitHubReleaseAsset[];
}

// GitHub API rate-limit aware fetch. Unauthenticated requests get 60
// req/hour per IP; busy sessions hit 403 with X-RateLimit-Remaining:
// 0, or 429 when the secondary abuse limit fires. The hook used to
// fall over loudly on either. Now: retry with exponential backoff
// for transient 429s, give up quietly on 403 (no point retrying
// inside the hour-long window), surface other errors as before.
async function fetchLatestRelease(): Promise<GitHubRelease> {
  const url = 'https://api.github.com/repos/HereLiesAz/BarBacker/releases/latest';
  const MAX_ATTEMPTS = 3;

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const response = await fetch(url);
    if (response.ok) return response.json();

    if (response.status === 403) {
      // Primary rate limit. Retrying within the same hour won't help.
      const remaining = response.headers.get('X-RateLimit-Remaining');
      throw new Error(`GitHub API rate limited (remaining=${remaining ?? '?'}); skipping release lookup`);
    }
    if (response.status === 429 && attempt < MAX_ATTEMPTS - 1) {
      // Secondary/abuse limit. Honor Retry-After if present; otherwise
      // exponential backoff (1s, 2s, 4s).
      const retryAfter = Number(response.headers.get('Retry-After')) || 2 ** attempt;
      await new Promise(r => setTimeout(r, retryAfter * 1000));
      continue;
    }
    throw new Error(`GitHub API Error: ${response.status} ${response.statusText}`);
  }
  // Unreachable — the loop either returns, throws, or continues; this
  // satisfies TypeScript.
  throw new Error('GitHub API: max retries exhausted');
}

// Fetches the latest GitHub release for the project and surfaces the
// APK asset URL + version tag. Errors are stored in `error` and
// logged; the dashboard treats a null downloadUrl as "no install
// link to show" without flagging the page as broken.
export function useLatestRelease() {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [version, setVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchLatestRelease()
      .then(data => {
        if (cancelled) return;
        const apkAsset = data.assets.find(asset => asset.name.endsWith('.apk'));
        if (apkAsset) {
          setDownloadUrl(apkAsset.browser_download_url);
          setVersion(data.tag_name);
        } else {
          setError('No APK found in latest release');
        }
      })
      .catch(err => {
        if (cancelled) return;
        console.warn('Failed to fetch latest release:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  return { downloadUrl, version, loading, error };
}
