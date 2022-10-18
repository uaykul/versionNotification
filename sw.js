self.addEventListener("push", (e) => {
console.log("e :>>", e.data.text())
  const config = {
    body: e.data.text() || "Check updates ",
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "3",
    },

    icon:"assent/logoKsgY.png",
    vibrate: [100, 10, 100],
    actions: [
      {
        action: "www.kuantumsiberguvenlik.com.tr",
        title: "Update",
        // icon: "images/"
      },
      {
        action: "close",
        title: "Close",
        // icon:
      },
    ],
  };
  e.waitUntil(
    self.registration.showNotification("New Version Avaible", config)
  );
});
