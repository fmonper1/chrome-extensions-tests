chrome.runtime.sendMessage({ todo: "showPageAction" });
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.todo === "changeColor") {
    const addColor = `#${request.clickedColor}`;
    document.querySelectorAll(".article-content p").forEach((el) => {
      el.classList.add("customHeading");
    });
    console.log(
      "querySelector",
      document.querySelectorAll(".article-content p")
    );
  }
});
