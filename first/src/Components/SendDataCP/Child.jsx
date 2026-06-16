import React from 'react'

export default function Child(props) {
    let data = [
        { id: 1001, name: "Nitin Chauhan", dsg: "Trainer", salary: 200000, city: "Faridabad", state: "Haryana" },
        { id: 1002, name: "Sumit Jain", dsg: "Trainer", salary: 150000, city: "Noida", state: "UP" },
        { id: 1003, name: "Arun Singh", dsg: "Trainer", salary: 400000, city: "Noida", state: "UP" },
        { id: 1004, name: "Naman Mishra", dsg: "Trainer", salary: 50000, city: "Noida", state: "UP" },
        { id: 1005, name: "Tarun Yadav", dsg: "Accountant", salary: 100000, city: "Noida", state: "UP" },
        { id: 1006, name: "Nikhil Verma", dsg: "Manager", salary: 300000, city: "Kanpur", state: "UP" },
    ]

    function sendDataInParent(){
        props.getData(data);
    }
    return (
        <>
            <h2>This is Child Component</h2>
            <button onClick={sendDataInParent}>Click here to Send Data to Parent</button>
        </>
    )
}
