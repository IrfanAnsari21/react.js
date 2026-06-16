// import React from 'react'

// export default function ProfilePage() {
//     return (
//         <h1>This is Profile Page</h1>
//     )
// }


/* Parameters - Request parameter:- */

import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProfilePage() {
    let { name, dsg, salary } = useParams()     //for request parameters
    return (
        <>
            <h1>This is Profile Page</h1>
            <h2>Name : {name}</h2>
            <h2>Designation : {dsg}</h2>
            <h2>Salary : {salary}</h2>
        </>
    )
}