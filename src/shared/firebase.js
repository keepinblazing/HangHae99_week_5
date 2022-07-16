import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCN5mPx7VmZsNtMcrcK-m1SpndGyNYmzxw",
    authDomain: "hanghae-week-5.firebaseapp.com",
    projectId: "hanghae-week-5",
    storageBucket: "hanghae-week-5.appspot.com",
    messagingSenderId: "92975975496",
    appId: "1:92975975496:web:918863cae1c3c085dfdc7d",
    measurementId: "G-EZYT7ZE6ZP"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;