import { useEffect } from "react";
import "./App.css";
import { db } from "./firebase";

import { collection, getDocs } from "firebase/firestore";

function App() {
  const fetchCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));

    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return <div className="App"></div>;
}

export default App;
