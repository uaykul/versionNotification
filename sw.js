self.addEventListener("push", (e) => {

  const config = {
    body: "Update",
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "3",
    },
    icon:"assent/logoKsgY.png",
    vibrate: [100, 50, 100],
    actions: [
      {
        action: "explore",
        title: "Action1",
        // icon: "images/"
      },
      {
        action: "close",
        title: "Bildirimi Kapat",
        // icon:
      },
    ],
  };
  e.waitUntil(
    self.registration.showNotification("New Version Avaible", config)
  );
});
