import React, { useEffect, useRef } from "react";
import ModelViewer from "@metamask/logo";

const MetamaskLogo = () => {
  const logoContainerRef = useRef(null); // Reference for the container
  const viewerRef = useRef(null); // Reference for the viewer instance

  useEffect(() => {
    // Check if the viewer is already initialized
    if (!viewerRef.current) {
      // Initialize ModelViewer
      const viewer = ModelViewer({
        pxNotRatio: true, // Set dimensions as pixels, not ratio
        width: 110,       // Adjusted width for better rendering
        height: 110,      // Adjusted height for better rendering
        followMouse: true, // Enable mouse-follow effect
        slowDrift: false,  // Disable slow drifting
      });

      viewerRef.current = viewer; // Store viewer instance in ref

      // Append the viewer's container to the logo container
      if (logoContainerRef.current) {
        logoContainerRef.current.appendChild(viewer.container);
      }
    }

    // Cleanup when the component unmounts
    return () => {
      if (viewerRef.current) {
        viewerRef.current.stopAnimation(); // Stop the animation
        viewerRef.current = null; // Reset the ref to prevent reuse
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div
      id="logo-container"
      ref={logoContainerRef}
      style={{
        width: "110px",    // Adjusted width for logo container
        height: "110px",   // Adjusted height for logo container
        position: "relative", // Ensure proper layout
        overflow: "hidden", // Prevent any overflow issues
        // backgroundColor: "#f0f0f0", // Optional background for visibility
      }}
    />
  );
};

export default MetamaskLogo;
