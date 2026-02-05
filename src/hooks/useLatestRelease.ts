// Import useState and useEffect hooks from React.
import { useState, useEffect } from 'react';

// Define the interface for a GitHub Release Asset (e.g., an APK file).
interface GitHubReleaseAsset {
  // The name of the file (e.g., "app-release.apk").
  name: string;
  // The direct download URL for the asset.
  browser_download_url: string;
  // The MIME type of the content.
  content_type: string;
}

// Define the interface for a GitHub Release object.
interface GitHubRelease {
  // The tag name of the release (e.g., "v1.0.0").
  tag_name: string;
  // The list of assets attached to this release.
  assets: GitHubReleaseAsset[];
}

// Custom hook to fetch the latest release information from GitHub.
// This is used to provide a download link for the Android APK.
export function useLatestRelease() {
  // State to store the download URL of the APK.
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  // State to store the version tag.
  const [version, setVersion] = useState<string | null>(null);
  // State to indicate if the fetch operation is in progress.
  const [loading, setLoading] = useState(true);
  // State to store any error messages.
  const [error, setError] = useState<string | null>(null);

  // Effect to perform the fetch on component mount.
  useEffect(() => {
    // Async function to handle the API request.
    const fetchLatest = async () => {
      try {
        // Fetch the latest release data from the GitHub API.
        const response = await fetch('https://api.github.com/repos/HereLiesAz/BarBacker/releases/latest');

        // Check if the response was successful.
        if (!response.ok) {
            throw new Error(`GitHub API Error: ${response.statusText}`);
        }

        // Parse the JSON response.
        const data: GitHubRelease = await response.json();

        // Find the asset that ends with '.apk'.
        const apkAsset = data.assets.find(asset => asset.name.endsWith('.apk'));

        // If an APK asset is found, update the state.
        if (apkAsset) {
            setDownloadUrl(apkAsset.browser_download_url);
            setVersion(data.tag_name);
        } else {
            // If no APK is found, set an error.
            setError('No APK found in latest release');
        }
      } catch (err: any) {
        // Log the error to the console.
        console.error('Failed to fetch latest release:', err);
        // Update the error state.
        setError(err.message || 'Unknown error');
      } finally {
        // Set loading to false regardless of success or failure.
        setLoading(false);
      }
    };

    // Invoke the fetch function.
    fetchLatest();
  }, []); // Empty dependency array ensures this runs only once.

  // Return the hook's state.
  return { downloadUrl, version, loading, error };
}
