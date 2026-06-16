import React, { useState } from 'react'
import Child from './Child';

export default function Parent() {
    let [data, setData] = useState([]);

    function getData(value) {
        setData(value);
    }
    return (
        <>
            <h1>Props Lifting State Up i.e Sending Data From Child to Parent Component</h1>
            <h2>This is Parent Component</h2>
            {
                data.length ?
                    <table border={2} cellPadding={10} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>NameId</th>
                                <th>Designation</th>
                                <th>Salary</th>
                                <th>City</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item) => {
                                    return <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.dsg}</td>
                                        <td>{item.salary}</td>
                                        <td>{item.city}</td>
                                        <td>{item.state}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table> : null
            }
            <hr />
            <Child getData={getData} />
        </>
    )
}
