import React, { useState } from 'react'
import Inputs from './Inputs'




const List = () => {

    const [items, setItems] = useState([])

    return (
        <div className='list'>
            <ul id='list'>
           
            </ul>
        </div>
    )
}


export default List