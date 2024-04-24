// Wait for the YouTube page to load
document.addEventListener('yt-navigate-finish', function() {
  // Check for the "Skip Ad" button every second
  const intervalId = setInterval(function() {
    const skipAdButton = document.querySelector('.ytp-ad-skip-button');
    if (skipAdButton && skipAdButton.style.display !== 'none') {
      // Click the "Skip Ad" button
      skipAdButton.click();
      // Stop checking for the button
      clearInterval(intervalId);
    }
  }, 1000);
});