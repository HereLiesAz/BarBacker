import { useState, useEffect } from 'react';

/** Represents an asset attached to a GitHub Release. */
interface GitHubReleaseAsset {
  name: string;
  browser_download_url: string;
  content_type: string;
}

/** Represents the GitHub Release object structure. */
interface GitHubRelease {
  tag_name: string;
  assets: GitHubReleaseAsset[];
}

/**
 * Custom hook to fetch the latest release information from the GitHub repository.
 * Specifically looks for an Android APK file to provide a download link.
 *
 * @returns {Object} An object containing:
 *  - downloadUrl: The direct link to the .apk file (or null).
 *  - version: The tag name of the release (e.g., 'v1.0.1').
 *  - loading: Boolean indicating if the fetch is in progress.
 *  - error: Error message string if the fetch failed.
 */
export function useLatestRelease() {
  // State for the download URL
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  // State for the version tag
  const [version, setVersion] = useState<string | null>(null);
  // Loading state
  const [loading, setLoading] = useState(true);
  // Error state
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Async function to perform the fetch
    const fetchLatest = async () => {
      try {
        // Query the GitHub API for the latest release of the repo
        const response = await fetch('https://api.github.com/repos/HereLiesAz/BarBacker/releases/latest');

        if (!response.ok) {
            throw new Error(`GitHub API Error: ${response.statusText}`);
        }

        // Parse JSON response
        const data: GitHubRelease = await response.json();

        // Find the asset that ends with '.apk'
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
        // Always set loading to false when done
        setLoading(false);
      }
    };

    fetchLatest();
  }, []); // Empty dependency array ensures this runs only once on mount

  return { downloadUrl, version, loading, error };
}
