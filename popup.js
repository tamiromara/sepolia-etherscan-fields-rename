document.getElementById('resetButton').addEventListener('click', function() {
  chrome.storage.sync.clear(() => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.reload(tabs[0].id);
    });
    window.close();
  });
});