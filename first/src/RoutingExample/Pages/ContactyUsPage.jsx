// import React from 'react'

// export default function ContactyUsPage() {
//     return (
//         <h1>This is Contact Us Page</h1>
//     )
// }


/* Parameters - Query parameter:- */

import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function ContactyUsPage() {
    let [searchParams] = useSearchParams()      //for query parameters
    return (
        <>
            <h1>This is Contact Us Page</h1>
            {searchParams.get("name")?<h2>Name : {searchParams.get("name")}</h2>:null}
            {searchParams.get("email")?<h2>Email : {searchParams.get("email")}</h2>:null}
            {searchParams.get("phone")?<h2>Phone : {searchParams.get("phone")}</h2>:null}
        </>
    )
}
