import { useState } from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import { getUser } from '../../components/api/request'

export const AddUserForm = () => {
    const [user, setUser] = useState({})

    const navigate = useNavigate()
    const enterInGame = (event) => {
        const newUser = {
            name: event.target.name.value,
        }

        event.preventDefault()

        const userInfo = {}

        navigate({
            pathname: '/game',
            search: '?' + createSearchParams(newUser),
        })
    }

    return (
        <form onSubmit={enterInGame}>
            <div className="form">
                <label>
                    <h4>Имя</h4>
                    <input type="text" name="name" placeholder="Введите ваше имя.." required />
                </label>
                {/* <label>
                    <h4>Выберите аватарку (Необязятельно)</h4>
                    <input
                        type="file"
                        accept="image/*"
                        name="name"
                        placeholder="Введите ваше имя.."
                        required
                    />
                </label> */}
                <button>Войти в игру</button>
            </div>
        </form>
    )
}
