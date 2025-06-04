   const viewer = document.getElementById("viewer");

    // Ask the user for milliseconds
    let userInput = prompt("Enter interval in milliseconds (default: 3000):");
    let INTERVAL = parseInt(userInput);

    // Fallback if invalid input
    if (isNaN(INTERVAL) || INTERVAL <= 0) {
      INTERVAL = 3000;
    }

    function setRandomOrbit() {
      const azimuth = Math.random() * 360;
      const elevation = Math.random() * 40 + 5; // From 5° to 45°
      const radius = 2.5 + Math.random() * 1;

      viewer.cameraOrbit = `${azimuth}deg ${elevation}deg ${radius}m`;
    }

    setRandomOrbit();
    setInterval(setRandomOrbit, INTERVAL);
