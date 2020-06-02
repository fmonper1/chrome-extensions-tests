import Utils from "./Utils.js";
import NotificationManager from "./managers/NotificationManager.js";

const contextMenuItem = {
  id: "spendMoney",
  title: "SpendMoney",
  contexts: ["selection"],
};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((clickData) => {
  if (clickData.menuItemId == "spendMoney" && clickData.selectionText) {
    if (Utils.isInt(clickData.selectionText)) {
      console.log("it is an INT");

      chrome.storage.sync.get(["total", "limit"], (budget) => {
        let newTotal = 0;
        if (budget.total) {
          newTotal += parseInt(budget.total);
        }
        newTotal += parseInt(clickData.selectionText);
        chrome.storage.sync.set({ total: newTotal }, () => {
          if (newTotal >= budget.limit) {
            NotificationManager.emitNotification(
              "ContextNotification",
              "Spending over limit",
              "Youve surpassed your spending limt"
            );
          }
        });
      });
    }
  }
});

chrome.storage.onChanged.addListener((changes, storageName) => {
  chrome.browserAction.setBadgeText({
    text: changes.total.newValue.toString(),
  });
});
