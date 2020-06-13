// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let header = document.createElement('div');
    header.classList.add('header');
    let headerContainer = document.querySelector(".header-container");
    headerContainer.appendChild(header);

    let date = document.createElement('span');
    date.classList.add("date");
    date.textContent = `March 28, 2019`;
    header.appendChild(date);

    let title = document.createElement("h1");
    title.textContent = "Lambda Times";
    header.appendChild(title);

    let temp = document.createElement("span");
    temp.classList.add("temp");
    temp.textContent = "98°";
    header.appendChild(temp);
}
Header();
