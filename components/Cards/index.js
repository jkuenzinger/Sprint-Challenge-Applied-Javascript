// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
let container = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles').then((response) => {
	for (var article in response.data.articles) {
		for (var item in response.data.articles[article]) {
			container.appendChild(CardComponent(response.data.articles[article][item]));
		}
	}
});


function cardMaker(data) {
    let card = document.createElement('div');
    let headLine = document.createElement('div');
    let author = document.createElement('div');
    let imgCont = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('span');

    card.append(headLine);
    card.append(author);
    card.append(imgCont);
    imgCont.append(img);
    author.append(name);

    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');
    img.classList.add('img');

    headLine.textContent = data.headline;
    name.textContent = `by ${data.authorName}`;


    return card;
}

