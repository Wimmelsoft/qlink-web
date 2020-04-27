import React from 'react';

export default function TableRow(props) {
    return (
        <tr>
            <td>
                {props.rowdata.keyword}
            </td>
            <td>
                {props.rowdata.url}
            </td>
            <td>
                {props.rowdata.description}
            </td>
        </tr>
    )
}