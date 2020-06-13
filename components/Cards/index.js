// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

let cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles", {
    method: "get"
  })
  .then(res => {
    console.log("Artic", res.data.articles);
    res.data.articles.javascript.forEach(file => cardComponent(file));
    res.data.articles.bootstrap.forEach(file => cardComponent(file));
    res.data.articles.technology.forEach(file => cardComponent(file));
    res.data.articles.jquery.forEach(file => cardComponent(file));
    res.data.articles["node.js"].forEach(file => cardComponent(file));
    res.data.articles.javascript.forEach(file => cardComponent(file));
  })
  .catch(err => {
    console.log(err);
  });

function cardComponent(data) {
  console.log(data);

  let card = document.createElement("div");
  card.classList.add("card");
  cardsContainer.appendChild(card);

  let headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = data.headline;
  card.appendChild(headline);

  let author = document.createElement("div");
  author.classList.add("author");
  card.appendChild(author);

  let imgCont = document.createElement("div");
  imgCont.classList.add("img-container");
  author.appendChild(imgCont);

  let img = document.createElement("img");
  img.setAttribute("src", data.authorPhoto);
  imgCont.appendChild(img);

  let span = document.createElement("span");
  span.textContent = `By ${data.authorName}`;
  author.appendChild(span);
}