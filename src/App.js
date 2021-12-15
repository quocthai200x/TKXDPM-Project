import LoginHostPage from "./pages/loginHostPage";
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return(
    <BrowserRouter>
    <Routes >
      <Route path='/host/login' element = {<LoginHostPage/>}/>
    </Routes>
  </BrowserRouter>
  )

}

export default App;
