// write your code here

// 1 select #ramen-menu div
//fetch ramens data form /ramens endpoint
//iterate over ramens data, and for each ramen create an image 
    //create image tag
    // update source attribute
    // append #ramen-menu div

const ramenMenu = document.querySelector("#ramen-menu"); // div chosen
const baseUrl = "http://localhost:3000" 

fetch(baseUrl + "/ramens") //fetches ramen data
    .then(res => res.json())
    .then(ramensData => renderRamens(ramensData));

function renderRamens(ramens) {                   // iterate ramens data //first deliverable helps render image
    ramens.forEach(ramen =>{                     // creates image and appends it to the DOM
        const img = document.createElement("img");
        img.src = ramen.image;                  //this is a callback function for our forEach
        img.details = ramen;                     // and its been defined anonymously in place
        img.addEventListener('click', updateRamenDetails); // add event listener here because already iterating
        ramenMenu.append(img);
    });
}

function appendRamenImage(ramen) {     // creates image and appends it to the DOM
    const img = document.createElement("img");
    img.src = ramen.image;   
    img.details = ramen;            
    img.addEventListener('click', updateRamenDetails); 
    ramenMenu.append(img);

}

// Click on an image from the `#ramen-menu` div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says
//   `insert comment here` and `insert rating here`.

// add event listener to each image in `#ramen-menu` div
// have callback function that will update `#ramen-detail` div
    // select name, restaurant, image, rating, and comment tags in #ramen-detail div
    //where does the ramen data come from?
    //update all tags with correct info

    
function updateRamenDetails(e){
    let ramen = e.target.details; // console.log(e.target.details.name);
    const name = document.querySelector(".name");
    name.innerText = ramen.name;
    const image = document.querySelector(".detail-image");
    image.src = ramen.image;
    const restaurant = document.querySelector(".restaurant"); 
    restaurant.innerText = ramen.restaurant;                   
    const rating = document.querySelector("#rating-display");
    rating.innerText = ramen.rating;
    const comment = document.querySelector("#comment-display");
    comment.innerText = ramen.comment;
}

// Create a new ramen after submitting the `new-ramen` form. The new ramen should
//   be added to the`#ramen-menu` div. The new ramen does not need to persist; in
//   other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page.


// 3 add submit event listener to the new ramen form 
    //select #ramen-menu
    //select the new ramen form
// callback function that will add the rament to the ramen-menu div
    //select all input fields from form
    //create image and add to rament-menu div



    const ramenForm = document.querySelector("#new-ramen"); 
    ramenForm.addEventListener("submit", createRamen); // why 2nd variable? are you attaching to other
    
    function createRamen(event){
        event.preventDefault();
        const name = document.querySelector("#new-name").value;
        const restaurant = document.querySelector("#new-restaurant").value;
        const image = document.querySelector("#new-image").value;
        const rating = document.querySelector("#new-rating").value;
        const comment = document.querySelector("#new-comment").value;
        // console.log(name, image, restaurant, rating, comment);
        const ramen = { name, restaurant, image, rating, comment}; //sees variable and gives it the key name
        appendRamenImage(ramen);                                  //and the value will be the variables value

    }

