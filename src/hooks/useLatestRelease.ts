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

export function useLatestRelease() {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [version, setVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/HereLiesAz/BarBacker/releases/latest');
        if (!response.ok) {
            throw new Error(`GitHub API Error: ${response.statusText}`);
        }
        const data: GitHubRelease = await response.json();
        const apkAsset = data.assets.find(asset => asset.name.endsWith('.apk'));

        if (apkAsset) {
            setDownloadUrl(apkAsset.browser_download_url);
            setVersion(data.tag_name);
        } else {
            setError('No APK found in latest release');
        }
      } catch (err: any) {
        console.error('Failed to fetch latest release:', err);
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchLatest();
  }, []);

  return { downloadUrl, version, loading, error };
}
