// custom.js

// Function to check if the current URL contains "latest" or "develop"
function checkURLForBranch() {
  const currentURL = window.location.href;

  // Check for "latest" in the URL
  if (currentURL.indexOf("latest") !== -1) {
    const header = document.querySelector(".md-header");
    const tabs = document.querySelector(".md-tabs");
    const ellipsisSpan = document.querySelector(".md-ellipsis");

    if (header && tabs) {
      // Change the CSS of .md-header and .md-tabs to blue
      header.style.backgroundColor = "#262dbd";
      tabs.style.backgroundColor = "#262dbd";
    }

    if (ellipsisSpan) {
      // Change the text of <span class="md-ellipsis">
      ellipsisSpan.textContent = "PMM Latest Wiki";
    }
  }
  // Check for "develop" in the URL
  else if (currentURL.indexOf("develop") !== -1) {
    const header = document.querySelector(".md-header");
    const tabs = document.querySelector(".md-tabs");
    const ellipsisSpan = document.querySelector(".md-ellipsis");

    if (header && tabs) {
      // Change the CSS of .md-header and .md-tabs to orange
      header.style.backgroundColor = "#ffa724";
      tabs.style.backgroundColor = "#ffa724";
    }

    if (ellipsisSpan) {
      // Change the text of <span class="md-ellipsis">
      ellipsisSpan.textContent = "PMM Develop Wiki";
    }
  }
}

// Call the function when the window is fully loaded
window.addEventListener("load", checkURLForBranch);
