
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  <>
   <Header />
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>

    <footer className="py-6 bg-gray-800 text-white text-center my-4">
      <div className="flex justify-center flex-wrap  mb-4 ">

        <a
          href="https://github.com/SNH078/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white hover:text-cyan-300 transition text-base mx-1"

        >
          <FaGithub className="text-xl" />
         
        </a>
        <a
          href="https://www.linkedin.com/in/sneha-yadav-sy/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white hover:text-cyan-300 transition mx-1 text-base"
        >
          <FaLinkedin className="text-xl" />
          
        </a>
        <a
          href="mailto:you@example.com"
          className="flex items-center gap-3 text-white hover:text-cyan-300 mx-1 transition text-base"
        >
          <FaEnvelope className="text-xl" />
         
        </a>
        <a
          href="#top"
          className="flex items-center gap-3 text-white hover:text-cyan-300  mx-1 transition text-base"
        >
          <FaArrowUp className="text-xl" />
          Back to top
        </a>
      </div>
      <p className="text-gray-400 text-sm">© 2025 SNH078. All rights reserved.</p>
    </footer>

  </>
  );
}

export default App;
