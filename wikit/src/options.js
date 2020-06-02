document.addEventListener("DOMContentLoaded", function () {
  const saveBtn = document.getElementById("saveLimit");
  const resetBtn = document.getElementById("resetLimit");
  const limitInput = document.getElementById("limit");
  chrome.storage.sync.get(["total", "limit"], (budget) => {
    limitInput.value = budget.limit;
  });

  saveBtn.addEventListener("click", (e) => {
    const limitAmout = limitInput.value;
    if (limitAmout) {
      chrome.storage.sync.set({ limit: parseInt(limitAmout) }, () => {
        // close(); // close tab
      });
    }
  });

  resetBtn.addEventListener("click", (e) => {
    chrome.storage.sync.set({ total: 0 }, () => {
      let notifOptions = {
        type: "basic",
        iconUrl: "./assets/icon64.png",
        title: "Total reset",
        message: "you reset the total to 0",
      };
      chrome.notifications.create("limitNotif", notifOptions);
    });
  });
});
