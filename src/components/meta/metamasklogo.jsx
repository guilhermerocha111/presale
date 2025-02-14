import React, { useEffect, useRef, useState } from "react";
import MetaMaskLogo from "@metamask/logo";
import { Box } from "@mui/material";

function MetaMaskLogoComponent({
  effectiveArea,
  isFocused,
  startInput,
  isTyping,
  setIsTyping,
  password,
}) {
  const logoContainerRef = useRef(null);
  const logoInstance = useRef(null);
  const [isMouseInside, setIsMouseInside] = useState(false);
  const inputOffset = 5*password.length;

  // console.log(password.length)
  useEffect(() => {
    if (!logoInstance.current) {
      logoInstance.current = MetaMaskLogo({
        pxNotRatio: true,
        width: 120,
        height: 120,
        followMouse: false, // Manually control tracking
      });

      if (logoContainerRef.current) {
        logoContainerRef.current.innerHTML = ""; // Clear any previous content
        logoContainerRef.current.appendChild(logoInstance.current.container);
      }
    }

    return () => {
      if (logoInstance.current) {
        logoInstance.current.stopAnimation();
        logoInstance.current = null;
      }
    };
  }, []);

  // console.log(isFocused, isTyping);
  useEffect(() => {
    const handleMouseMove = (event) => {
      setIsTyping(false);
      if (isFocused && isTyping) {
        const inputX = (startInput.x + inputOffset);
        const inputY = startInput.y;
        logoInstance.current?.lookAtAndRender({ x: inputX, y: inputY });
      }
      if (!effectiveArea) return;

      const inArea =
        event.clientX >= effectiveArea.left &&
        event.clientX <= effectiveArea.right &&
        event.clientY >= effectiveArea.top &&
        event.clientY <= effectiveArea.bottom;

      setIsMouseInside(inArea);

      if (inArea) {
        // Convert global mouse position to relative position inside effectiveArea
        const relativeX = event.clientX;
        const relativeY = event.clientY;
        // setMousePosition({ x: relativeX, y: relativeY });

        // Directly update fox position
        logoInstance.current?.lookAtAndRender({ x: relativeX, y: relativeY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [effectiveArea, isFocused, isTyping, startInput]);

  useEffect(() => {
    if (isFocused && isTyping) {
      logoInstance.current?.lookAtAndRender({ x: (startInput.x + inputOffset), y: startInput.y });
    }
  }, [isFocused, isTyping, startInput, inputOffset]);

  return (
    <Box
      ref={logoContainerRef}
      sx={{
        width: "120px",
        height: "120px",
        position: "absolute",
      }}
    />
  );
}

export default MetaMaskLogoComponent;
