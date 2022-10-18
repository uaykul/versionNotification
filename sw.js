self.addEventListener("push", (e) => {
  const config = {
    body: "Update",
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "3",
    },
  };
  e.waitUntil(
    self.registiration.showNotification(" New Version Avaible", config)
  );
});
