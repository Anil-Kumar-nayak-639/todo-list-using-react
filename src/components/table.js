import React from 'react'
import Table from 'react-bootstrap/Table';
class TableData extends React.Component {
    render() {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ width: "15%" }}>Sl.No</th>
                            <th>TASK</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.list.map((list, index) => {
                            return (
                                <tr>
                                    <td key={list.index}>{index}</td>
                                    <td>{list}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table >
            </>
        )
    }
}
export default TableData