import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AddUserForm } from './containers/AddUserForm'
import { Game } from './containers/Game'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AddUserForm />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
