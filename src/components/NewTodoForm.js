import React, { useState } from 'react'

function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
            <div className='form-row'>
                <label htmlFor='item'>New Item</label>
                <input type='text' id='item' onChange={e => setNewItem(e.target.value)} value={newItem} />
            </div>
            <button className='btn'>Add</button>
        </form>
    )
}

export default NewTodoForm
