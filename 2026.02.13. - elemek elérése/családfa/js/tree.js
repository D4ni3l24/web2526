"use strict"

const answers = document.getElementById("answers")

function addAnswer(question, answer) {
    const p = document.createElement("p")
    p.textContent = question
    const span = document.createElement("span")
    span.textContent = answer
    p.append(span)
    answers.append(p)
}

// 9.
const alex = document.getElementById("alex")
const alexCouple = alex.parentElement

let alexPartner = alexCouple.lastElementChild
while (alexPartner === alex) {
    alexPartner = alexPartner.previousElementSibling
}

if (alexPartner.classList.contains("spouse-line")) {
    alexPartner = alexPartner.previousElementSibling
}

const alexPartnerName = alexPartner.getElementsByClassName("name")[0].textContent

addAnswer("Hogy hívják Alex párját?", alexPartnerName)

// 10.
const sam = document.getElementById("sam")
const samCouple = sam.parentElement

let samPartner = samCouple.lastElementChild
while (samPartner === sam) {
    samPartner = samPartner.previousElementSibling
}

if (samPartner.classList.contains("spouse-line")) {
    samPartner = samPartner.previousElementSibling
}

const samPartnerBirthYear = parseInt(samPartner.getElementsByClassName("meta")[0].textContent)
const yearsMarried = 2026 - samPartnerBirthYear - 20

addAnswer("Sam párja 20. életévét töltötte be, amikor összeházasodtak. Hány éve házasok az aktuális évben?", yearsMarried)

// 11.
const samLi = samCouple.parentElement
const samChildrenUl = samLi.getElementsByTagName("ul")[0]

const samChildrenNames = []
if (samChildrenUl) {
    const childLis = samChildrenUl.getElementsByTagName("li")
    for (let li of childLis) {
        const nameDiv = li.getElementsByClassName("name")[0]
        if (nameDiv) {
            const fullName = nameDiv.textContent
            const firstName = fullName.split(' ')[0]
            samChildrenNames.push(firstName)
        }
    }
}

addAnswer("Hogy hívják Sam és párja gyerekeit?", samChildrenNames.join(', '))

// 12.
const alexLi = alexCouple.parentElement
const alexChildrenUl = alexLi.getElementsByTagName("ul")[0]

let alexChildCount = 0
if (alexChildrenUl) {
    for (let child of alexChildrenUl.children) {
        if (child.tagName === 'LI') {
            alexChildCount++
        }
    }
}

addAnswer("Hány gyereke van Alexnek és párjának?", alexChildCount)

// 13.
const alexGrandchildrenNames = []

if (alexChildrenUl) {
    const childLis = alexChildrenUl.children
    
    for (let childLi of childLis) {
        if (childLi.tagName === 'LI') {
            const grandchildrenUl = childLi.getElementsByTagName('ul')[0]
            
            if (grandchildrenUl) {
                const grandchildLis = grandchildrenUl.getElementsByTagName('li')
                
                for (let grandchildLi of grandchildLis) {
                    const nameDiv = grandchildLi.getElementsByClassName('name')[0]
                    if (nameDiv) {
                        const fullName = nameDiv.textContent
                        alexGrandchildrenNames.push(fullName)
                    }
                }
            }
        }
    }
}

addAnswer("Hogy hívják Alexnek és párja unokáit?", alexGrandchildrenNames.join(', '))

// 14.
const milo = document.getElementById("milo")
const miloNode = milo.parentElement
const miloLi = miloNode.parentElement
const miloSiblingsUl = miloLi.parentElement
const miloParentsLi = miloSiblingsUl.parentElement
const miloParentsCoupleNode = miloParentsLi.getElementsByClassName("couple")[0]

const miloParentNames = []
if (miloParentsCoupleNode) {
    const persons = miloParentsCoupleNode.getElementsByClassName("person")
    for (let person of persons) {
        const nameDiv = person.getElementsByClassName("name")[0]
        if (nameDiv) {
            miloParentNames.push(nameDiv.textContent)
        }
    }
}

addAnswer("Hogy hívják Milo szüleit?", `${miloParentNames[0]} és ${miloParentNames[1]}`)