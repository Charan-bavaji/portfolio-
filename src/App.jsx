import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SocialMedia from './Components/SocialMedia'
import Projects from './Components/Projects'
function App() {

  // using id method 
  // give id for skills section and provide aTag to nave consisting of href"#id name"
  // then use scrollIntoView method to component id

  // 
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "/projects",
  //     element: <Projects />
  //   },
  // ])
  return (
    <main>
      <div className='fixed top-0 left-0 right-0 z-50'>
        <NavBar />
      </div>
      <div className='fixed top-[60%] left-5 right-0 bottom-0 w-[5rem] '>
        {/* <SocialMedia /> */}
      </div>
      <Home />
      {/* <RouterProvider router={router}></RouterProvider> */}
    </main>
  )
}

export default App
