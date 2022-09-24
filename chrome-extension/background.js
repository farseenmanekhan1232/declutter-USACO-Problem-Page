function reddenPage() {
  if (window.sessionStorage.getItem("declutterUSACO") == "yes") {
    window.sessionStorage.setItem("declutterUSACO", "no");
    document.querySelectorAll("div")[0].style["width"] = "6.25in";
    document.querySelectorAll("div")[0].style["margin"] = "0 ";
  } else {
    window.sessionStorage.setItem("declutterUSACO", "yes");
    document.querySelectorAll("div")[0].style["width"] = "80%";
    document.querySelectorAll("div")[0].style["margin"] = "0 10% 0 10%";
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
