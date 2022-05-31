// import { useEffect, useState } from "react"
// import { Routes, Route } from "react-router-dom"
// import Services from "../pages/Services"

// export default function Main(props) {
//     const [people, setPeople] = useState(null)

//     const URL = "http://localhost:3001/people/"

//     const getPeople = async () => {
//         const data = await fetch(URL).then(res => res.json())
//         setPeople(data);
//     }

//     const createPeople = async person => {
//         await fetch(URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'Application/json'
//             },
//             body: JSON.stringify(person),
//         });
//         getPeople();
//     }

//     const updatePeople = async (person, id) => {
//         await fetch(URL + id, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(person),
//         })
//         getPeople()
//       }
    
//       const deletePeople = async id => {
//         await fetch(URL + id, {
//           method: "DELETE",
//         })
//         getPeople()
//       }

//     useEffect(() => {
//         getPeople()
//     },[]);

//     return (
//         <main>
//             <Routes>
//                 <Route path="/" element={<Index people={people} createPeople={createPeople} />} />
//                 <Route path="/people/:id" element={<Show people={people} deletePeople={deletePeople} updatePeople={updatePeople} />} />
//             </Routes>
//         </main>
//     )
// }