import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>
        Hello {person.name}. I know you are {person.Age} and that your skill is {person.skill}
        </h2>
    </div>
  )
}

export default Person
