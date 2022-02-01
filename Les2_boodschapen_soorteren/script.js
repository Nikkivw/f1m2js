console.log("script is geladen!");

const groentevak = document.getElementById('groente')
const fruitvak = document.getElementById('fruit')

function zetInFruitLa(fruit){
    console.log(fruit);

    const nieuwElement = Document('h3');
    nieuwElement.innerHTML = 'fruit';
    nieuwElement.className = 'rood';
    fruitvak.appendChild(nieuwElement);
}

function zetInGroenteLa(groente){
    console.log(groente);

    const nieuwElement = Document('h3');
    nieuwElement.innerHTML = 'groente';
    nieuwElement.className = 'groen';
    fruitvak.appendChild(nieuwElement);
}
