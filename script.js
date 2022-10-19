var buttonContainer = document.querySelector("#buttonContainer");

buttonContainer.addEventListener("mouseenter", function () {
  if (buttonContainer.classList.contains("move-to")) {
    buttonContainer.classList.remove("move-to");
    buttonContainer.classList.add("absolute");
  } else if (buttonContainer.classList.contains("absolute")) {
    buttonContainer.classList.remove("absolute");
    buttonContainer.classList.add("move-to");
  }
});

// all positions for the button to move to
const positionClasses = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "middle",
];

const currentPosition = "middle";

const getNewPosition = () => {
  let newIndex = Math.floor(Math.random() * positionClasses.length);
  var newPosition = positionClasses[newIndex];
  console.log("current position", currentPosition);
  console.log("new position", newPosition);
  return newPosition;
};

const changePosition = () => {
  // pull a random index from the positions array
  let newIndex = Math.floor(Math.random() * positionClasses.length);
  // sets a newPosition value
  var newPosition = positionClasses[newIndex];
  // if the currentPosition is the same as the newPosition, skip
  if (currentPosition == newPosition) {
    // if the newPosition is no different than the current position, then call changePosition again
    return changePosition(); //& recursive
  } else {
    console.log("diff! :)");
    // base condition stops the recursive call
    changeCSS(newPosition);
  }
};

console.log(buttonContainer.style);
const changeCSS = (newPosition) => {
  console.log("change CSS", newPosition);
  // buttonContainer.classList.remove(...buttonContainer.classList);
  // buttonContainer.classList.add(`${newPosition}`);
};

changePosition();
changePosition();
changePosition();
changePosition();
changePosition();
changePosition();
changePosition();
changePosition();

// eventlistener mouseover
// calls changePosition

// while the newPosition is === currentPosition, keep pulling new randomIndex
