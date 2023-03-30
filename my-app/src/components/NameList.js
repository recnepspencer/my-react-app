import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Apple', 'Banana', 'Carrot', 'Dragon Fruit']
    const persons = [

    {
        id: 1,
        name: "Spencer",
        Age: 23,
        skill: "Creativity"
    },
    {
        id: 2,
        name: "Bob",
        Age: 25,
        skill: "Anger"
    },
    {
        id: 3,
        name: "Jon",
        Age: 2,
        skill: "Niceness"
    }
]
    const personsList = persons.map(person => <Person key={person.id} person = {person}></Person>)
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
  return (
    <div>{nameList}</div>
  )
}

export default NameList
