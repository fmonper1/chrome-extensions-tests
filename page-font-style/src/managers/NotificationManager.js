const emitNotification = (id, title, message) => {
  console.log("emitNotification");

  let notifOptions = {
    type: "basic",
    iconUrl: "../assets/icon64.png",
    title,
    message,
    requireInteraction: true,
  };
  const notification = chrome.notifications.create(id, notifOptions);
};

const NotificationManager = {
  emitNotification,
};

export default NotificationManager;
