import Form from './pages/Form/Form'
import Services from './pages/Services/Services'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useState } from 'react'

const App = () => {
  const [activeTab, setActiveTab] = useState(2)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/services"
            element={
              <Services activeTab={activeTab} setActiveTab={setActiveTab} />
            }
          ></Route>
          <Route
            path="/form"
            element={<Form activeTab={activeTab} setActiveTab={setActiveTab} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
