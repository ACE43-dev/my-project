// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import Gallery from './Gallery.jsx'
// import Profile from './Profile.jsx'
// import './App.css' 
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";
const chemist = people.filter((n) => n.profession === 'chemist')



function App() {

    const listItem = chemist.map((n) =>
        <div className="flex">
            <div>
                <img
                    src={getImageUrl(n)}
                    alt={n.name}
                />
            </div>
            <div>
                <li>
                    <p>
                        <b>{n.name}:</b>
                        {' ' + n.profession + ' '}
                        known for {" " + n.accomplishment + " "}
                    </p>
                </li>
            </div>
        </div>
    )
    return (
        <ul>{listItem}</ul>
    )

}



export default App;

function GradeCard({ marks }) {
  let grade;

  if (marks >= 90) grade = "A";
  else if (marks >= 75) grade = "B";
  else if (marks >= 50) grade = "C";
  else if (marks >= 35) grade = "D";
  else grade = "F";

  if (marks >= 90) css = "top";
  else if (marks >= 75) css = "mid";
  else if (marks >= 50) css = "mid";
  else if (marks >= 35) css = "mid";
  else css = "low";

  const status = marks >= 35 ? "Pass" : "Fail";

  return (
    <ul>
      <li >Marks: {marks}/100</li>
      <li className={css}>Grade: {grade}</li>
      <li>Status: {status}</li>
    </ul>
  );
}
