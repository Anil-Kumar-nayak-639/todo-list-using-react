import React from 'react'
import InputData from './input'

class TodoData extends React.Component {

    render() {
        return (
            <div className='container'>
                <h1 id='heading1'>TODO APP</h1>
                <InputData />
            </div>
        )
    }
}
export default TodoData