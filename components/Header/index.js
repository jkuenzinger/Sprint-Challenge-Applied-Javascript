// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
let Header = document.createElement('div');
let daate = document.createElement('span')
let title = document.createElement('h1')
let temp = document.createElement('span')

Header.appendChild('date');
Header.appendChild('temp');
Header.appendChild('title');

Header.classList.add('header');
daate.classList.add('date');
temp.classList.add('temp');

daate.textContent = 'SMARCH 28th, 2019';
title.textContent = 'Lambda Times';
temp.textContent = '98°';

return Header;
}
document.querySelector('.header-container').appendChild(Header());