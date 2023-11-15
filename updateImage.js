// variables to store HTML elements
let placeholder = document.querySelector(".placeholder");
let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");


// click event for buttonOne
buttonOne.addEventListener('click', function() {

    // 1. Select the placeholder and update the src.
  placeholder.src = ("https://www.reneeroaming.com/wp-content/uploads/2022/03/Bixby-Bridge-Sunset-Big-Sur-1024x683.jpg")
    
    // - The image address should be a picture of a place you want to travel to.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.




});


// click event for buttonTwo
buttonTwo.addEventListener('click', function() {

    // 2. Select the placeholder and update the src.
  
    // - The image address should be a picture that represents your mood.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.

  placeholder.src = ("https://cdn.download.ams.birds.cornell.edu/api/v1/asset/65616071/1800")

    

});