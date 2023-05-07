import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React from 'react';
import TableData from './table';
class InputData extends React.Component {
    constructor() {
        super()
        this.state = {
            data: "",
            list: []
        }
        this.getData = this.getData.bind(this)
        this.submitData = this.submitData.bind(this)
    }
    getData = (e) => {
        this.setState({
            data: e.target.value
        })
    }
    submitData = (e) => {
        e.preventDefault()
        this.setState({
            data: '',
            list: [...this.state.list, this.state.data]
        })

    }

    render() {
        return (
            <div>
                <div className='xyz'>
                    <InputGroup className="mb-3">
                        <Form.Control
                            onChange={this.getData}
                            placeholder="Write Something"
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={this.submitData}>
                            Save
                        </Button>
                    </InputGroup>
                    <TableData list={this.state.list} />
                </div>

            </div>
        )
    }
}
export default InputData