//ask if promises are supported in browser
if (!window.Promise) {
  window.Promise = Promise;
} else {
  console.log(`Promise is supported in your browser, ${window.Promise}`);
}

const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "../../serviceWorker.js"
      );
      if (registration.installing) {
        console.log("Server Worker is installing");
      } else if (registration.waiting) {
        console.log("Server Worker Installed");
      } else if (registration.active) {
        console.log("Server Worker Active");
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  } else {
    console.log("No Service Worker supported!!");
  }
};

registerServiceWorker();
