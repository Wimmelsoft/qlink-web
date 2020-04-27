import React from 'react';
import Table from 'react-bootstrap/Table'
import TableRow from './TableRow'

export default function Soundbites(props) {
    const {data}  = props.data
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Keyword</th>
                    <th>Address</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(result =>
                        <TableRow key={data.id} rowdata={result} />)
                }

            </tbody>
        </Table>

    )
}