"use strict"

const container = document.querySelector('#container')

for (const student of students) {
  
    const card = document.createElement('div')
    card.classList.add('p-2')

    const studentName = document.createElement('h5')
    studentName.classList.add('font-semibold', 'text-2xl')
    studentName.textContent = student.name

    const groupsContainer = document.createElement('div')
    groupsContainer.classList.add('flex', 'flex-wrap', 'gap-2')

    for (const group of student.groups) {
        const groupSpan = document.createElement('span')
        groupSpan.classList.add('p-1', 'bg-sky-700', 'text-white', 'rounded-md')
        groupSpan.textContent = group
        groupsContainer.append(groupSpan)
    }

    const table = document.createElement('table')
    table.classList.add('w-full', 'mt-1')

    const thead = document.createElement('thead')
    thead.classList.add('bg-sky-700', 'text-white', 'cursor-pointer')

    const headerRow = document.createElement('tr')

    const thSubject = document.createElement('th')
    thSubject.textContent = 'Tantárgy'
    thSubject.classList.add('p-1')

    const thAverage = document.createElement('th')
    thAverage.textContent = 'Átlag'
    thAverage.classList.add('p-1')

    headerRow.append(thSubject)
    headerRow.append(thAverage)
    thead.append(headerRow)

    const tbody = document.createElement('tbody')
    tbody.style.visibility = 'collapse'

    thead.addEventListener('click', function() {
        tbody.style.visibility = tbody.style.visibility === 'collapse' ? 
        'visible' : 'collapse';
    });

    let sumGrades = 0
    let countSubjects = student.subjects.length

    for (const subject of student.subjects) {
        const row = document.createElement('tr')
        row.classList.add('odd:bg-sky-200')

        const tdSubjectName = document.createElement('td')
        tdSubjectName.textContent = subject.name
        tdSubjectName.classList.add('p-1')

        const tdAverage = document.createElement('td')
        tdAverage.textContent = subject.average
        tdAverage.classList.add('p-1', 'text-center')

        row.append(tdSubjectName)
        row.append(tdAverage)
        tbody.append(row)

        sumGrades += subject.average
    }

    table.append(thead)
    table.append(tbody)

    const studentAverage = sumGrades / countSubjects

    const averageDiv = document.createElement('div')
    averageDiv.classList.add('bg-sky-700', 'p-1', 'text-center', 'text-white')
    averageDiv.textContent = 'Átlag: '

    const averageSpan = document.createElement('span')
    averageSpan.classList.add('font-bold')
    averageSpan.textContent = studentAverage.toFixed(2)
    averageDiv.append(averageSpan)

    card.append(studentName)
    card.append(groupsContainer)
    card.append(table)
    card.append(averageDiv)

    container.append(card)
}