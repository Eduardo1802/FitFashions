importScripts(
  "https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js"
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCophaZ6DTWRizq383S-PbodSnog_h4p2M",
  authDomain: "fitfashion-store.firebaseapp.com",
  projectId: "fitfashion-store",
  storageBucket: "fitfashion-store.appspot.com",
  messagingSenderId: "76990165874",
  appId: "1:76990165874:web:d27b06e8e5d60d0c65a3eb",
  measurementId: "G-H1SB4RH71V",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage( payload => {
  console.log("Recibiste mensaje mientras estabas ausente");
  // Previo a mostrar notificación
  const notificationTitle = payload.notification.title;
  const notificactionOptios = {
    body: payload.notification.body,
    icon: "./logo192.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificactionOptios
  );
});
