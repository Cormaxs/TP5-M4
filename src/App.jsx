import {Ubicaciones} from "./routes/routes"
import { Menuu } from "./components/menu"
import { Footer } from "./components/footer"
import { ToastContainer } from 'react-toastify';
function App() {


  return (
   <>
   <Menuu/>
   <Ubicaciones/>
   <Footer/>
   <ToastContainer />
   </> 
  )
}

export default App
