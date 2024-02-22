import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCx0fKcwoBsU-haiTNauYGTT3oalNBK5nk",
  authDomain: "phonedekho-9349d.firebaseapp.com",
  projectId: "phonedekho-9349d",
  storageBucket: "phonedekho-9349d.appspot.com",
  messagingSenderId: "785024322800",
  appId: "1:785024322800:web:ed5a89874ceb6f7a6ac635"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
