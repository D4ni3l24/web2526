"use strict"

const subjects = [
  { name: "Matematika", color: "bg-red-500", teacher: "Kovács Ildikó" },  
  { name: "Irodalom", color: "bg-yellow-500", teacher: "Nagy Ferenc" },  
  { name: "Történelem", color: "bg-orange-500", teacher: "Varga Éva" },  
  { name: "Angol", color: "bg-blue-600", teacher: "Smith John" },  
  { name: "Digitális Kultúra", color: "bg-indigo-600", teacher: "Tóth Péter" },  
  { name: "Testnevelés", color: "bg-green-600", teacher: "Erős Antal" },  
  { name: "Fizika", color: "bg-purple-600", teacher: "Newton Albert" },  
  { name: "Ebédszünet", color: "bg-gray-400", teacher: "-" },  
  { name: "Backend programozás és tesztelés", color: "bg-slate-700", teacher: "Horváth Géza" },  
  { name: "Webprogramozás", color: "bg-teal-600", teacher: "Szabó Anna" },  
  { name: "Asztali- és mobilalkalmazások", color: "bg-cyan-600", teacher: "Kiss Balázs" },  
  { name: "Adatbáziskezelés", color: "bg-emerald-600", teacher: "Adat Áron" },  
  { name: "IKT Projektmunka", color: "bg-rose-600", teacher: "Projekt Panna" }
]

const workDays = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"]
const dayShortcuts = ["H", "K", "Sz", "Cs", "P"]

const controlsContainer = document.querySelector('#controls-container')
const weekGrid = document.querySelector('#week-grid')

const daySlots = []

function addSubjectToDay(subject, targetDay) {
  if (targetDay.children.length >= 8) {
    alert('Egy napra maximum 8 óra vehető fel!')
    return
  }

  const classItem = document.createElement('div')
  classItem.className = subject.color + ' text-white p-2 rounded text-sm shadow-sm flex justify-between items-center animate-fade-in'

  const textContainer = document.createElement('div')
  textContainer.className = 'flex flex-col'

  const nameSpan = document.createElement('span')
  nameSpan.className = 'font-bold'
  nameSpan.textContent = subject.name

  const teacherSpan = document.createElement('span')
  teacherSpan.className = 'text-xs opacity-90'
  teacherSpan.textContent = subject.teacher

  textContainer.append(nameSpan)
  textContainer.append(teacherSpan)

  const deleteButton = document.createElement('button')
  deleteButton.textContent = '🗑️'
  deleteButton.className = 'text-white font-bold hover:text-gray-200 ml-2 px-1'
  
  deleteButton.addEventListener('click', function() {
    classItem.remove()
  })

  classItem.append(textContainer)
  classItem.append(deleteButton)
  targetDay.append(classItem)
}

for (let i = 0; i < workDays.length; i++) {
  const dayCard = document.createElement('div')
  dayCard.className = 'bg-white border border-gray-300 rounded-lg flex flex-col shadow-sm'

  const dayHeader = document.createElement('div')
  dayHeader.className = 'bg-sky-700 text-white p-3 text-center font-bold rounded-t-lg'
  dayHeader.textContent = workDays[i]
  
  dayCard.append(dayHeader)

  const dayContent = document.createElement('div')
  dayContent.className = 'p-3 flex-grow flex flex-col gap-2 min-h-[150px]'
  
  daySlots.push(dayContent)
  dayCard.append(dayContent)
  weekGrid.append(dayCard)
}

for (let j = 0; j < subjects.length; j++) {
  const currentSubject = subjects[j]

  const subjectCard = document.createElement('div')
  subjectCard.className = 'border border-gray-200 rounded-lg p-3 flex flex-col gap-2 hover:shadow-md transition-shadow'

  const subjectName = document.createElement('div')
  subjectName.className = 'text-white font-bold text-center py-1 flex items-center justify-start ' + currentSubject.color + ' rounded px-2 flex-grow md:justify-center'
  subjectName.textContent = currentSubject.name
  subjectCard.append(subjectName)

  const buttonRow = document.createElement('div')
  buttonRow.className = 'flex justify-between gap-1'
  subjectCard.append(buttonRow)

  for (let k = 0; k < dayShortcuts.length; k++) {
    const dayButton = document.createElement('button')
    dayButton.textContent = dayShortcuts[k]
    dayButton.className = 'bg-gray-100 hover:bg-gray-300 text-gray-700 text-xs font-bold py-1 px-2 rounded flex-grow transition-colors'
    
    dayButton.addEventListener('click', function() {
      addSubjectToDay(currentSubject, daySlots[k])
    })

    buttonRow.append(dayButton)
  }

  controlsContainer.append(subjectCard)
}