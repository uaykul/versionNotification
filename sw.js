self.addEventListener("push", (e) => {
    
  const config = {
    body: "Update",
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "3",
    },
  };
  e.waitUntil(
    self.registration.showNotification(" New Version Avaible", config)
  );
});
