document.addEventListener("DOMContentLoaded", function () {
  const colorInput = document.getElementById("fontColor");
  const submitBtn = document.getElementById("submitBtn");
  const fontColor = colorInput.value;

  colorInput.addEventListener("change paste keyup", () => {
    fontColor = colorInput.value;
  });

  submitBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        todo: "changeColor",
        newColor: fontColor,
      });
    });
  });
});
