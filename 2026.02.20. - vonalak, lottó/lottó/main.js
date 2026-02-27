"use strict"

const config = {
    needed: 0,
    max: 0,
    tippek: [],
    nyerok: [],
    vege: false
}

function random(max) {
    return Math.floor(Math.random() * max) + 1
}

function initGame(needed, max) {
    config.needed = needed
    config.max = max
    config.tippek = []
    config.nyerok = []
    config.vege = false

    document.querySelector('#menu-view').classList.add('hidden')
    document.querySelector('#game-view').classList.remove('hidden')

    document.querySelector('#game-title').textContent = `${needed}-ös lottó`
    document.querySelector('#game-result').textContent = ""

    const drawBtn = document.querySelector('#run-sorsolas')
    drawBtn.classList.remove('hidden')

    renderGrid()
    updateUI()
}

function renderGrid() {
    const gridEl = document.querySelector('#lotto-grid')

    gridEl.replaceChildren();
    for (let i = 1; i <= config.max; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.textContent = i
        
        cell.addEventListener('click', function() {
            handleCellClick(i)
        })

        gridEl.append(cell)
    }
}

function handleCellClick(szam) {

    if (config.vege) {
        return
    }

    const index = config.tippek.indexOf(szam)

    if (index > -1) {
        config.tippek.splice(index, 1)
    } 

    else if (config.tippek.length < config.needed) {
        config.tippek.push(szam)
    }

    updateUI()
}

function updateUI() {
    const gridEl = document.querySelector('#lotto-grid')
    const cells = gridEl.children
    const statusEl = document.querySelector('#game-status')
    const drawBtn = document.querySelector('#run-sorsolas')

    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i]
        const szam = i + 1

        cell.className = 'cell'

        if (config.vege) {
            const isPicked = config.tippek.includes(szam)
            const isDrawn = config.nyerok.includes(szam)

            if (isPicked && isDrawn) {
                cell.classList.add('hit')
            } else if (isPicked && !isDrawn) {
                cell.classList.add('miss')
            } else if (!isPicked && isDrawn) {
                cell.classList.add('drawn')
            }
        } 

        else {
            if (config.tippek.includes(szam)) {
                cell.classList.add('picked')
            }
        }
    }

    statusEl.textContent = `Kiválasztva: ${config.tippek.length} / ${config.needed}`
    drawBtn.disabled = (config.tippek.length !== config.needed)
}


function sumTalalatok() {
    config.vege = true
    config.nyerok = []

    while (config.nyerok.length < config.needed) {
        const randomSzam = random(config.max)
        if (!config.nyerok.includes(randomSzam)) {
            config.nyerok.push(randomSzam)
        }
    }

    const talalatokCount = config.tippek.filter(sz => config.nyerok.includes(sz)).length

    updateUI()

    document.querySelector('#run-sorsolas').classList.add('hidden')
    document.querySelector('#game-result').textContent = `Találatok száma: ${talalatokCount}`
}

function clearAll() {
    document.querySelector('#game-view').classList.add('hidden')
    document.querySelector('#menu-view').classList.remove('hidden')
}


document.querySelector('#add-lotto-5').addEventListener('click', function() {
    initGame(5, 90)
})

document.querySelector('#add-lotto-6').addEventListener('click', function() {
    initGame(6, 45)
})

document.querySelector('#run-sorsolas').addEventListener('click', sumTalalatok)

document.querySelector('#reset-all').addEventListener('click', clearAll)