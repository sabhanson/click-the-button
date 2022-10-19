var buttonContainer = document.querySelector("#buttonContainer");

buttonContainer.addEventListener("mouseenter", function () {
  if (buttonContainer.classList.contains("move-away")) {
    buttonContainer.classList.remove("move-away");
    buttonContainer.classList.add("absolute");
  } else if (buttonContainer.classList.contains("absolute")) {
    buttonContainer.classList.remove("absolute");
    buttonContainer.classList.add("move-away");
  }
});
