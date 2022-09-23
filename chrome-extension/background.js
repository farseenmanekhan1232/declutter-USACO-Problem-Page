function reddenPage() {
  if (window.sessionStorage.getItem("declutterUSACO") == "yes") {
    window.sessionStorage.setItem("declutterUSACO", "no");
    document.querySelectorAll("div")[0].style["width"] = "6.25in";
  } else {
    window.sessionStorage.setItem("declutterUSACO", "yes");
    document.querySelectorAll("div")[0].style["width"] = "80%";
  }
}

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  let url = tabs[0].url;
  console.log(url);
  window.sessionStorage("declutterUSACO", "yes");
});

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("https://train.usaco.org/")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage,
    });
  }
});
