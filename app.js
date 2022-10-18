window.addEventListener("load", async () => {
  const subscribeButton = document.querySelector("#subscribeButton");

  const sW = await navigator.serviceWorker.register("./sw.js");
  console.log("Service Worker =>", sW);

  subscribeButton.addEventListener("click", async () => {
    const serviceWorker = await navigator.serviceWorker.ready;
    const clientID = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BKsFHmiig5VoU2WFTx6h321rhuUjxEJcoiilO06ipy1-LbFXPTV-EmhgPG9-aBeBo-J7O3pphnjaf5BISuwfGjY",
    });
    console.log(serviceWorker);
    console.log(clientID);
    console.log(JSON.stringify(clientID));
  });
});
