const dialog = document.getElementById("cc-discount-dialog");
const showButton = document.getElementById("cc-discount");
const closeButton = dialog.querySelector("button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", (e) => {
  dialog.showModal();
  e.preventDefault();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
