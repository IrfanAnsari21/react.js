// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'
// import HomePage from './Pages/HomePage'
// import AboutPage from './Pages/AboutPage'
// import ProfilePage from './Pages/ProfilePage'
// import ContactyUsPage from './Pages/ContactyUsPage'
// import ErrorPage from './Pages/ErrorPage'

// export default function App() {
//     return (
//         <BrowserRouter>
//             <Navbar/>
//                 <Routes>
//                     <Route path='' element={<HomePage/>}/>
//                     <Route path='/about' element={<AboutPage/>}/>
//                     <Route path='/profile' element={<ProfilePage/>}/>
//                     <Route path='/contactus' element={<ContactyUsPage/>}/>
//                     <Route path='/*' element={<ErrorPage/>}/>
//                 </Routes>
//             <Footer/>
//         </BrowserRouter>
//     )
// }



import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ProfilePage from './Pages/ProfilePage'
import ContactyUsPage from './Pages/ContactyUsPage'
import ErrorPage from './Pages/ErrorPage'

export default function App() {
    return (
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='' element={<HomePage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/profile/:name/:dsg/:salary' element={<ProfilePage/>}/>
                    <Route path='/contactus' element={<ContactyUsPage/>}/>
                    <Route path='/*' element={<ErrorPage/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
