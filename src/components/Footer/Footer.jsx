import './Footer.css';
import { useEffect, useState } from "react";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0); // For animating the count

  // Helper function to get today's date as a string (for comparison)
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
  };

  // Function to fetch visitor count and last update date from localStorage
  const fetchVisitorCount = () => {
    const count = localStorage.getItem("visitorCount");
    const lastUpdateDate = localStorage.getItem("lastUpdateDate");

    // If count or last update date is not set or it's a new day, initialize/update count
    if (!count || getTodayDate() !== lastUpdateDate) {
      return 0; // Return 0 if it's the first time or a new day (for incrementing)
    }

    return parseInt(count, 10); // Return the stored count
  };

  // Function to update the visitor count with a random value (between 1 and 10)
  const updateVisitorCount = () => {
    const currentCount = fetchVisitorCount();
    const randomIncrement = Math.floor(Math.random() * 10) + 1; // Random value between 1 and 10
    const updatedCount = currentCount + randomIncrement;

    localStorage.setItem("visitorCount", updatedCount); // Save updated count
    localStorage.setItem("lastUpdateDate", getTodayDate()); // Save the current date as the last update date
    return updatedCount;
  };

  // Function to animate the count value
  const animateCount = (finalCount) => {
    let currentCount = 0;
    const incrementStep = Math.ceil(finalCount / 100); // Adjust this for smoother or faster counting

    const interval = setInterval(() => {
      if (currentCount < finalCount) {
        currentCount += incrementStep;
        if (currentCount > finalCount) currentCount = finalCount; // Ensure it doesn’t exceed final count
        setDisplayCount(currentCount);
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust the speed of the animation here (50ms interval)
  };

  // Fetch the visitor count and update it when the component mounts
  useEffect(() => {
    const currentCount = fetchVisitorCount();

    if (currentCount === 0) {
      // If it's the first time or a new day, update the count and animate it
      const updatedCount = updateVisitorCount();
      animateCount(updatedCount);
    } else {
      // If it's the same day, just animate the existing count
      animateCount(currentCount);
    }

    // Optional: Add a daily interval to refresh the count after 24 hours (86400000 ms)
    const interval = setInterval(() => {
      const currentCount = fetchVisitorCount();
      if (getTodayDate() !== localStorage.getItem("lastUpdateDate")) {
        const updatedCount = updateVisitorCount();
        animateCount(updatedCount);
      }
    }, 86400000);  // Refresh every 24 hours

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // The empty dependency array means this effect runs only once on mount

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h1>Thamarai</h1>
        </div>
        <p>I am a Junior Software Developer.</p>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Thamaraiselvan. All rights reserved.</p>
        <div className="footer-bottom-right">
          {/* Display the animated visitor count with "+" if it exceeds 100 */}
          {/* <p>👀 Visitor Count: <b>{displayCount !== null ? `${displayCount}${displayCount > 100 ? "+" : ""}` : "Loading..."}</b></p> */}
          {/* <p>Last Update : <span>27/08/25</span></p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
