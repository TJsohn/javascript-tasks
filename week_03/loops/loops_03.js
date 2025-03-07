/* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/

const calculateAverageSpeed = () => {
  let distance;
  let time;
  let speed;
  while (distance !== 0) {
    distance = Number(prompt("Enter a distance in kilometers (0 to stop): "));
    if (distance === 0) {
      break;
    }

    time = Number(prompt("Enter a time in hours: "));

    speed = distance / time;
    console.log("The average speed is: ", speed);
  }
};

calculateAverageSpeed();
