import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
// import logo from './logo.svg';
// import './App.css';
// import  { sanityClient } from './sanity';
// import { useState,useEffect} from 'react';

// function App() {
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const query = `*[_type == "category"]{
//           _id,
//           title,
//           description,
//           slug,
//           "imageUrl": image.asset->url
//         }`;

//         const results = await sanityClient.fetch(query);
//         setCategories(results);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,          // Main layout
    children: [
      {
        index: true,
        element: <Home />,         // Home page (default child route)
      },
      
    ],
  },
]);
const App =()=>{
  return(
     <RouterProvider router={router} />
  )
}

export default App