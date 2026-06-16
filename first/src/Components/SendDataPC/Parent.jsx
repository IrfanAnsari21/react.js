import React from 'react'
import Child from './Child'

export default function Parent() {
    let data = [
        { id: 1001, name: "Nitin Chauhan", dsg: "Trainer", salary: 200000, city: "Faridabad", state: "Haryana" },
        { id: 1002, name: "Sumit Jain", dsg: "Trainer", salary: 150000, city: "Noida", state: "UP" },
        { id: 1003, name: "Arun Singh", dsg: "Trainer", salary: 400000, city: "Noida", state: "UP" },
        { id: 1004, name: "Naman Mishra", dsg: "Trainer", salary: 50000, city: "Noida", state: "UP" },
        { id: 1005, name: "Tarun Yadav", dsg: "Accountant", salary: 100000, city: "Noida", state: "UP" },
        { id: 1006, name: "Nikhil Verma", dsg: "Manager", salary: 300000, city: "Kanpur", state: "UP" },
    ]

    return (
        <>
            <h1>Props Example i.e Sending Data From Parent to Child Component</h1>
            <h2>This is Parent Component</h2>
            <hr />
            <Child
                name="Irfan Ansari"
                arr={[10, 20, 30, 40, 50]}
                data={data}
            />
        </>
    )
}
