document.getElementById("btn_on").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "applyDark" })
        .catch(err => console.error("❌ Error sending applyDark:", err));
    }
  });
});

document.getElementById("btn_off").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "removeDark" })
        .catch(err => console.error("❌ Error sending removeDark:", err));
    }
  });
});
