import Form from './pages/Form/Form'
import Services from './pages/Services/Services'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
