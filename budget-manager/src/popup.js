document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");

  chrome.storage.sync.get(["total", "limit"], (budget) => {
    document.getElementById("spenditure").innerHTML = budget.total;
    document.getElementById("limit").innerHTML = budget.limit;
  });

  submitBtn.addEventListener("click", (e) => {
    chrome.storage.sync.get(["total", "limit"], (budget) => {
      let newTotal = 0;
      if (budget.total) {
        newTotal += parseInt(budget.total);
      }

      const amount = document.getElementById("amount").value;
      if (amount) {
        newTotal += parseInt(amount);
      }

      chrome.storage.sync.set({ total: newTotal }, () => {
        console.log(newTotal, budget.limit, newTotal >= budget.limit);

        if (newTotal >= budget.limit) {
          let notifOptions = {
            type: "basic",
            iconUrl: "./assets/icon64.png",
            title: "Limit reached",
            message: "you reached your limit",
          };
          chrome.notifications.create("limitNotif", notifOptions);
        }
      });

      document.getElementById("spenditure").innerHTML = newTotal;
      amount.value = "";
    });
  });
});
