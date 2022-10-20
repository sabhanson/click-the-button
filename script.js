var buttonContainer = document.querySelector("#buttonContainer");

// all positions for the button to move to
let currentPosition = "middle";
const positionClasses = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "middle",
];

const changePosition = () => {
  let newIndex = Math.floor(Math.random() * positionClasses.length);
  let newPosition = positionClasses[newIndex];
  // if the currentPosition is the same as the newPosition, skip
  if (currentPosition == newPosition) {
    return changePosition(); // recursive
  } else {
    currentPosition = newPosition;
    changeCSS(newPosition);
  }
};

const changeCSS = (newPosition) => {
  buttonContainer.classList.remove(...buttonContainer.classList);
  buttonContainer.classList.add(`${newPosition}`, "move-to");
  console.log(buttonContainer.classList);
};

// while the newPosition is === currentPosition, keep pulling new randomIndex
buttonContainer.addEventListener("mousemove", changePosition);
