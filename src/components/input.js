import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React from 'react';
import TableData from './table';

const InputData = () => {
    const [data, setData] = React.useState('')
    const [list, setList] = React.useState([])
    // const [todo, setTodo] = React.useState([])

    const submitData = () => {
        if (data) {
            setList([...list, data])
            setData('')
        }
    }
    const deleteAll = () => {
        setList([])
    }




    return (
        <>
            <div className='xyz'>
                <InputGroup className="mb-3">
                    <Form.Control
                        onChange={(e) => setData(e.target.value)}
                        placeholder="Write Something"
                        value={data}
                    />
                    <Button variant="primary" id="button-addon2" onClick={submitData}>
                        Save
                    </Button>
                    <TableData list={list} setList={setList} />
                    <Button variant="danger" id="delete-all" onClick={deleteAll}>DELETE ALL</Button>

                </InputGroup>
            </div>
        </>
    )
}










// class InputData extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             data: "",
//             list: []
//         }
//         this.getData = this.getData.bind(this)
//         this.submitData = this.submitData.bind(this)
//     }
//     getData = (e) => {
//         this.setState({
//             data: e.target.value
//         })
//     }
//     submitData = (e) => {
//         e.preventDefault()
//         this.setState({
//             data: '',
//             list: [...this.state.list, this.state.data]
//         })

//     }

//     render() {
//         return (
//             <div>
//                 <div className='xyz'>
// <InputGroup className="mb-3">
//     <Form.Control
//         onChange={this.getData}
//         placeholder="Write Something"
//     />
//     <Button variant="outline-secondary" id="button-addon2" onClick={this.submitData}>
//         Save
//     </Button>
// </InputGroup>
//                     <TableData list={this.state.list} />
//                 </div>

//             </div>
//         )
//     }
// }
export default InputData