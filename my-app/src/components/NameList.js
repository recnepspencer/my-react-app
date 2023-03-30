import React from 'react'
import Person from './Person'

function NameList() {
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
    const personsList = persons.map(person => <Person person = {person}></Person>)
  return (
    <div>{personsList}</div>
  )
}

export default NameList
