import React from 'react'

function Columns() {
    const items = [{
        id: 7,
        name: "Spoon",
        type: "Silverware"
    },
    {
    id: 8,
    name: "Fork",
    type: "Silverware"
    },
]
  return (
    <React.Fragment>{
        items.map(item => (
        <React.Fragment key={item.id}>
            <td>
                {item.name}
            </td>
            <td>
                {item.type}
            </td>
        </React.Fragment>))
    }
    </React.Fragment>
  )
}

export default Columns
