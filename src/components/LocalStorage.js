import React, {useState, useEffect} from 'react';

export default function LocalStorage() {

  let [welcomeMessage, setWelcomeMessage] = useState("Welcome -- is it your first time? (It is, we know 😉)")

  useEffect(() => {
    // checking if localStorage has a "hasVisited" key
    if (localStorage.getItem("hasVisited")){
        // setting the state of welcomeMessage to "Welcome back!" if it does
      setWelcomeMessage("Welcome back!")  
    } else {
        // creating the "hasVisited" key value pair in localStorage if it doesnt exist
      localStorage.setItem("hasVisited", "true")
    }
    // we are only running this useEffect on the first render of app because we passed an empty array
  },[])

  return (
    <div>
        {welcomeMessage}
    </div>
  );
}