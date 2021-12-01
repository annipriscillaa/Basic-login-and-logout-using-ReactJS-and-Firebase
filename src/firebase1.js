import React from "react";
import { initializeApp } from "@firebase/app";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB96xM-BoknlXSD4uu6ivMYmbdhmlLYEf8",
  authDomain: "model-lab-practise.firebaseapp.com",
  projectId: "model-lab-practise",
  storageBucket: "model-lab-practise.appspot.com",
  messagingSenderId: "584226131749",
  appId: "1:584226131749:web:2fb45139cf83aced05d4cc",
  measurementId: "G-1T68ZSEFXR",
};

var app = initializeApp(firebaseConfig);
var auth = getAuth(app);
var db = getFirestore(app);

const withEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
  }
};

const registerWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};

const logOut = () => {
  auth.signOut();
};

export {
  auth,
  db,
  app,
  firebaseConfig,
  withEmailAndPassword,
  registerWithEmailAndPassword,
  logOut,
};
