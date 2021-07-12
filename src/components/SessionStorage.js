import React, { useState, useEffect } from 'react';

//initialize session storage
function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }else{
    return JSON.parse(stored);
  }
}

export default function SessionStorage() {
  //initialize slice of state  
  const [termsAccepted, setTermsAccepted] = useState(
    //set initial state  
    getSessionStorageOrDefault('terms', false)
  );

  //set session storage
  useEffect(() => {
    sessionStorage.setItem('terms', JSON.stringify(termsAccepted));
  }, [termsAccepted]);

  //conditionally render the component
  if (!termsAccepted) {
    return (
      <div className="terms">
        <h1>Terms of Service</h1>
        <p>These are the terms for using the application.</p>
        <button onClick={() => {setTermsAccepted(true)}} >
          I accept
        </button>
      </div>
    );
  } else {
    return (
        <div className="thanks">
            Thanks for agreeing to the terms!
        </div>
    );
  }
}