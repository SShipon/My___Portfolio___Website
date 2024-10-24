import React, { useState, useEffect } from 'react';
import './spinner.css'
const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a 3-second delay for loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-transparent rounded-full text-blue-500"></div>
      </div>
    );
  }

  // Once loading is done (after 3 seconds), return `null` or nothing
  return null;
};

export default LoadingSpinner;
