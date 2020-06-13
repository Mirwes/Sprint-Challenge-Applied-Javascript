// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

let topics = document.querySelector(".topics");
let arrayTopics = [];

axios
.get("https://lambda-times-backend.herokuapp.com/topics",{
   method: "get" 
})

.then(res => {
arrayTopics.push(res.date.topics);
console.log("Res", res.date.topics);
res.date.topics.forEach(topic => {
    let tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = topic;
    topics.appendChild(tab);
  });
})
.catch(err => {
    console.log(err);
});