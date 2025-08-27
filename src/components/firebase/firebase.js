import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJWtijBtGXZf7dkTJf6ph3oaVnI9Tfqh0",
  authDomain: "portfolio-694.firebaseapp.com",
  projectId: "portfolio-694",
  storageBucket: "portfolio-694.appspot.com",
  messagingSenderId: "300994679856",
  appId: "1:300994679856:web:44f8dfaafeea2309b189f5",
  measurementId: "G-6XLMBSXZE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Reference to the Firestore document where the visitor count is stored
const visitorDocRef = doc(db, "visitorCounts", "counter");

// Function to update visitor count (increases by 1 each time)
export const updateVisitorCount = async () => {
  const docSnap = await getDoc(visitorDocRef);

  if (docSnap.exists()) {
    // Using increment to safely update the count
    await updateDoc(visitorDocRef, {
      count: increment(1)
    });
  } else {
    // Set the document with initial count if it doesn't exist
    await setDoc(visitorDocRef, { count: 1 });
  }
};

// Function to fetch visitor count from Firestore
export const fetchVisitorCount = async () => {
  const docSnap = await getDoc(visitorDocRef);
  if (docSnap.exists()) {
    return docSnap.data().count;
  } else {
    return 0; // If the document doesn't exist, return 0
  }
};
