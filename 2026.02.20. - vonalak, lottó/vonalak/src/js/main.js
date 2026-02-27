"use strict"

const deleteCard = (node) => {
    node.remove();
};

const header = document.querySelector('header')
const h1 = document.createElement('h1')
h1.textContent = ("Autóbusz Vonalak")
h1.classList.add('text-3xl', 'font-bold')
header.append(h1)

const footer = document.querySelector('footer')
const pFooter = document.createElement('p')
pFooter.textContent = "Az oldal készítette: Sajtos Dániel"
footer.append(pFooter)

const cardsContainer = document.getElementById('cards')

for(let i = 0; i < buses.length; i++){
    const bus = buses[i];

    const card = document.createElement('div')
    card.classList.add('bg-sky-900', 'rounded-md', 'p-2', 'h-fit')

    const img = document.createElement('img')
    img.classList.add( 'w-full', 'mb-2', 'rounded-md')
    img.src = `src/images/${bus.image}`
    img.alt = bus.name
    img.title = bus.name

    const title = document.createElement('h5')
    title.classList.add('text-xl', 'font-semibold')
    title.textContent = bus.name

    const type = document.createElement('p')
    type.classList.add('italic')
    type.textContent = bus.type

    const departures = document.createElement('p')
    departures.textContent = `napi indulások: ${bus.departures} db`


    const bar = document.createElement('div')
    bar.classList.add('bg-sky-100', 'rounded-md', 'p-1', 'text-black','font-bold', 'mb-3', 'wrap-normal', 'text-xs')
    bar.textContent = `${bus.length} km`
    bar.style.width = `${(bus.length / 27) * 100}%`

    const btn = document.createElement('button')
    btn.classList.add('bg-red-800', 'rounded-md', 'p-1', 'cursor-pointer')
    btn.textContent = "törlés"

    card.append(img, title, type, departures, bar, btn);
    cardsContainer.append(card)
}

const tbody = document.querySelector('tbody');

let totalLen = 0;
for (const bus of buses) {
    totalLen += bus.length
}
const avgLen = totalLen / buses.length
tbody.children[0].lastElementChild.textContent = `${avgLen.toFixed(0)} km`;

let totalDep = 0;
for (const bus of buses) {
    totalDep += bus.departures;
}
const avgDep = totalDep / buses.length;
tbody.children[1].lastElementChild.textContent = `${avgDep.toFixed(0)} db`

const baseBuses = buses.filter(bus => bus.type === "alapjárat")
let baseLen = 0;
for(const bus of baseBuses){
    baseLen += bus.length
}
tbody.children[2].lastElementChild.textContent = `${baseLen.toFixed(0)} km`

const zoneBuses = buses.filter(bus => bus.type === "zónázó járat")
let zoneLen = 0;
for(const bus of zoneBuses){
    zoneLen += bus.length
}
tbody.children[3].lastElementChild.textContent = `${zoneLen.toFixed(0)} km`

// Az itt található kódot NE módosítsa, saját kódját fölé írja!
document.querySelectorAll('button').forEach(button => button.addEventListener('click', () => deleteCard(button.parentElement)))
