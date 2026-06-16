// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//     return (
//         <>
//             <ul style={{ marginBottom: 50 }}>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/profile">Profile</Link></li>
//                 <li><Link to="/contactus">Contact Us</Link></li>
//             </ul>
//             <hr />
//         </>
//     )
// }


/* Parameters:- */

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <ul style={{ marginBottom: 50 }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/profile/Nitin/Trainer/189000">Profile</Link></li>
                <li><Link to="/contactus?name=Nitin&email=vishankchauhan@gmail.com&phone=9873848046">Contact Us</Link></li>
            </ul>
            <hr />
        </>
    )
}
