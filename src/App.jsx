import { Provider } from 'react-redux'
import './App.css'
import { store } from './redux/store'
import { Route, Routes } from 'react-router'
import Auth from './Components/Auth/Auth'
import Register from './Components/Auth/Register'
import AllExpenses from './Pages/AllExpenses'
import OldExpenses from './Pages/OldExpenses'

function App() {

  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route path="/allexpenses" element={<AllExpenses />} />
        <Route path="/oldexpenses" element={<OldExpenses />} />
        <Route exact path="/" element={<Auth />} />
        <Route path="/register" element={<Register />} />
      </Routes>  
    </Provider>
    </>
  )
}

export default App
