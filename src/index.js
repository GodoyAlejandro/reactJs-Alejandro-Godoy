import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtEbCglv18YLnOwoV_hTTJElrj6vvnkY8",
  authDomain: "reactproject-4708e.firebaseapp.com",
  projectId: "reactproject-4708e",
  storageBucket: "reactproject-4708e.appspot.com",
  messagingSenderId: "1031253922244",
  appId: "1:1031253922244:web:1dea2497f39c0e4a4e1491",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </>
);
