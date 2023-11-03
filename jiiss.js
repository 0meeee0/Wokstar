console.log("connected")
let carts = document.querySelectorAll('.addbutton')
for (let i=0; i<carts.length; i++){
    carts[i].addEventListener('click', function(){
        console.log('tzadt')

    })
}
     //customize
     function handlePersonalizeButtonClick(event, id) {
        // Get the specific plat-div element using the provided ID
        const parentDiv = document.getElementById(id);
    
        // Extract necessary information from the parent div
        const title = parentDiv.querySelector("h2").textContent;
        const description = parentDiv.querySelector("p").textContent;
        const price = parentDiv.querySelector(".price").textContent;
        const imageSrc = parentDiv.querySelector("img").getAttribute("src");
    
        // Create an object with the extracted data
        const personalizedPlate = {
          title: title,
          description: description,
          price: price,
          imageSrc: imageSrc,
        };
    
        // Store the personalized plate data in localStorage
        localStorage.setItem(
          "personalizedPlate",
          JSON.stringify(personalizedPlate)
        );
    
        // Redirect to the personalized.html page
        window.location.href = "customize.html";
      }