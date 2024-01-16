import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SocialMedia from './Components/SocialMedia'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import About from './Components/About';
import ProjectView from './Components/ProjectView';
function App() {
  return (
    <main className=''>
      <div className=" hidden md:flex fixed bottom-32 lg:bottom-36 md:-right-10 lg:-right-24 xl:-right-16 z-30 rotate-90 items-center space-x-3 ">
        <p className="text-[10px] md:text-xs lg:text-sm cursor-pointer "><a href="mailto:charanbavaji.official@gmail.com" className=' text-[#ffd89e]'>charanbavaji.official@gmail.com</a></p>
        <div className="w-10 lg:w-16 h-[2px] bg-slate-500 rounded-sm "></div>
      </div>
      <Router>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <NavBar />
        </div>
        <div className='hidden md:block fixed top-[60%] left-5 right-0 bottom-0 w-[5rem] z-50'>
          <SocialMedia flex={'flex-col'} />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/projectView' element={<ProjectView />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
