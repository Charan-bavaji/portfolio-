import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {},
  ])
  return (
    <main>
      <div className='fixed top-0 left-0 right-0'>
        <NavBar />
      </div>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
