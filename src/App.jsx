// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import Gallery from './Gallery.jsx'
// import Profile from './Profile.jsx'
// import './App.css' 
const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
    ];
function App() {
    
    const list=people.map(n=><li>{n}</li>)
    return(
        <>
            <ul>{list}</ul>
        </>
    )
}



export default App;