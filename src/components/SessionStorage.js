import React from 'react';

//import custom hook
import { useSessionStorage } from '../hooks/useSessionStorage';

export default function SessionStorage() {
  //initialize slice of state  
  const [termsAccepted, setTermsAccepted] = useSessionStorage('terms', false)

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