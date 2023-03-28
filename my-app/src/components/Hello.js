import React from 'react'

const Hello = () => {
    return(
        <div className='dummyClass'>
            <h1>
                Hello Spencer
            </h1>
        </div>
    )
    // return React.createElement('div', 
    // {id: 'hello',
    // class: 'dummyClass'}, 
    // React.createElement('h1', null, 'Hello Spencer'))
}
export default Hello
