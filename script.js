// Clone the cards to create a seamless loop
const cardsInner = document.querySelector('.release-cards-inner');
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    const clone = card.cloneNode(true);
    cardsInner.appendChild(clone);
	
// Select all 'a' elements
const links = document.getElementsByTagName('a');

// Loop through the links and add target="_blank" and rel="noopener noreferrer"
for (let i = 0; i < links.length; i++) {
  links[i].target = "_blank";
  links[i].rel = "noopener noreferrer";
}
});