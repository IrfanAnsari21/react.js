// import React, { useState } from 'react'

// export default function InputExample() {
//     let [name, setName] = useState("")
//     let [email, setEmail] = useState("")
//     let [phone, setPhone] = useState("")
//     let [designation, setDesignation] = useState("")
//     let [salary, setSalary] = useState("")
//     let [city, setCity] = useState("")
//     let [state, setState] = useState("")

//     function getInputData(e) {
//         let { name, value } = e.target
//         if (name === "name")
//             setName(value)
//         else if (name === "email")
//             setEmail(value)
//         else if (name === "phone")
//             setPhone(value)
//         else if (name === "designation")
//             setDesignation(value)
//         else if (name === "salary")
//             setSalary(value)
//         else if (name === "city")
//             setCity(value)
//         else if (name === "state")
//             setState(value)
//     }

//     function postData() {
//         alert(`
//             Name: ${name}
//             Email: ${email}
//             Phone: ${phone}
//             Designation: ${designation}
//             Salary: ${salary}
//             City: ${city}
//             State: ${state}
//             `)
//     }
//     return (
//         <div className="main">
//             <div className="center">
//                 <h1>Input Example</h1>
//                 <h2>Name: {name}</h2>
//                 <h2>Email: {email}</h2>
//                 <h2>Phone: {phone}</h2>
//                 <h2>Designation: {designation}</h2>
//                 <h2>Salary: {salary}</h2>
//                 <h2>City: {city}</h2>
//                 <h2>State: {state}</h2>
//                 <input onChange={getInputData} type="text" name='name' placeholder='Full Name' />
//                 <input onChange={getInputData} type="text" name='email' placeholder='Email Address' />
//                 <input onChange={getInputData} type="number" name='phone' placeholder='Phone Number' />
//                 <input onChange={getInputData} type="text" name='designation' placeholder='Designation' />
//                 <input onChange={getInputData} type="number" name='salary' placeholder='Salary' />
//                 <input onChange={getInputData} type="text" name='city' placeholder='City' />
//                 <input onChange={getInputData} type="text" name='state' placeholder='State' />
//                 <button onClick={postData}>Submit</button>
//             </div>
//         </div>
//     )
// }


/* Same work with less code:- */

// import React, { useState } from 'react'

// export default function InputExample() {
//     let [data, setData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         designation: "",
//         salary: "",
//         city: "",
//         state: "",
//     })

//     function getInputData(e) {
//         let { name, value } = e.target
//         setData({ ...data, [name]: value })
//     }

//     function postData() {
//         alert(`
//             Name: ${data.name}
//             Email: ${data.email}
//             Phone: ${data.phone}
//             Designation: ${data.designation}
//             Salary: ${data.salary}
//             City: ${data.city}
//             State: ${data.state}
//             `)
//     }
//     return (
//         <div className="main">
//             <div className="center">
//                 <h1>Input Example</h1>
//                 <h2>Name: {data.name}</h2>
//                 <h2>Email: {data.email}</h2>
//                 <h2>Phone: {data.phone}</h2>
//                 <h2>Designation: {data.designation}</h2>
//                 <h2>Salary: {data.salary}</h2>
//                 <h2>City: {data.city}</h2>
//                 <h2>State: {data.state}</h2>
//                 <input onChange={getInputData} type="text" name='name' placeholder='Full Name' />
//                 <input onChange={getInputData} type="text" name='email' placeholder='Email Address' />
//                 <input onChange={getInputData} type="number" name='phone' placeholder='Phone Number' />
//                 <input onChange={getInputData} type="text" name='designation' placeholder='Designation' />
//                 <input onChange={getInputData} type="number" name='salary' placeholder='Salary' />
//                 <input onChange={getInputData} type="text" name='city' placeholder='City' />
//                 <input onChange={getInputData} type="text" name='state' placeholder='State' />
//                 <button onClick={postData}>Submit</button>
//             </div>
//         </div>
//     )
// }


/* Same work with form:- */

import React, { useState } from 'react'

export default function InputExample() {
    let [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        designation: "",
        salary: "",
        city: "",
        state: "",
    })

    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    function postData(e) {
        e.preventDefault();
        alert(`
            Name: ${data.name}
            Email: ${data.email}
            Phone: ${data.phone}
            Designation: ${data.designation}
            Salary: ${data.salary}
            City: ${data.city}
            State: ${data.state}
            `)
    }
    return (
        <div className="main">
            <div className="center">
                <h1>Input Example</h1>
                <h2>Name : {data.name}</h2>
                <h2>Email : {data.email}</h2>
                <h2>Phone : {data.phone}</h2>
                <h2>Designation : {data.designation}</h2>
                <h2>Salary : {data.salary}</h2>
                <h2>City : {data.city}</h2>
                <h2>State : {data.state}</h2>
                <form onSubmit={postData}>
                    <input onChange={getInputData} type="text" name='name' placeholder='Full Name' required />
                    <input onChange={getInputData} type="text" name='email' placeholder='Email Address' required />
                    <input onChange={getInputData} type="number" name='phone' placeholder='Phone Number' required />
                    <input onChange={getInputData} type="text" name='designation' placeholder='Designation' required />
                    <input onChange={getInputData} type="number" name='salary' placeholder='Salary' required />
                    <input onChange={getInputData} type="text" name='city' placeholder='City' required />
                    <input onChange={getInputData} type="text" name='state' placeholder='State' required />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
