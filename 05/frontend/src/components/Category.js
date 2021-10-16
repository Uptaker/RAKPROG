import React from 'react'
import '../scss/item.scss'

function Category(props) {
    return (
        <div className="item">
            <h3>{props.name}</h3>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <b>Category Type</b>
                        </td>
                        <td>
                            {props.categoryType}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Category
