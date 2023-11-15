// 1. Create a variable called changeTextButton.
let changeTextButton = document.querySelector("#change-text");
// - Store the button with the id of "change-text" using document.querySelector.

// DO NOT CHANGE THIS
changeTextButton.addEventListener('click', function() {

  // 2. Create a variable called introTextParagraph.
  let introTextParagraph = document.querySelector(".intro-text");
  // - Store the paragraph with the class of "intro-text" using document.querySelector.



  // DO NOT CHANGE THIS
  introTextParagraph.innerHTML = "The text has been changed!";
});
