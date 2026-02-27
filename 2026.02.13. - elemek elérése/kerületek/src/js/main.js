"use strict"

function addDistrict() {
    const district = getSelectedDistrict()

    if(district === null){
        console.error("No district selected")
        return
    }

    const card = document.createElement('div')
    card.classList.add('card')

    const h2 = document.createElement('h2')
    h2.textContent = district.name

    const description = document.createElement('p')
    description.textContent = district.description

    const populationP = document.createElement('p')
    const populationSpan = document.createElement('span')
    populationSpan.classList.add('tag')
    populationSpan.textContent = district.population
    populationP.append(populationSpan)

    const img = document.createElement('img')
    img.src = `src/images/${district.image}`
    img.alt = district.name

    card.append(h2)
    card.append(description)
    card.append(populationP)
    card.append(img)

    document.querySelector('#districts').append(card)
}

function clearAll() {
    const districtsEl = document.querySelector('#districts')

    if(districtsEl.children.length === 0){
        console.error('No items to be removed')
        return
    }

    districtsEl.replaceChildren()
}

function random(max){
    return Math.floor(Math.random() * max)
}

function clearRandom(){
    const districtEl = document.querySelector('#districts')

    if(districtEl.children.length === 0){
        console.error("No items to be removed")
        return
    }

    const randomIndex = random(districtEl.children.length)
    districtEl.children[randomIndex].remove()
}

function sumPopulation() {
    // Kódját ide írja:
    const districtEl = document.querySelector('#districts')
    let sum = 0

    for(const card of districtEl.children){
        const tag = card.querySelector('.tag')
        if(tag){
            sum += Number(tag.textContent)
        }
    }
    document.querySelector('#population').textContent = sum

    // Ezt a kódot ne módosítsa, alá ne írjon!
    document.querySelector('#population-dialog').showModal();
}

document.querySelector('#add-district').addEventListener('click', addDistrict)
document.querySelector('#clear-all').addEventListener('click', clearAll)
document.querySelector('#clear-random').addEventListener('click', clearRandom)
document.querySelector('#sum-population').addEventListener('click', sumPopulation)