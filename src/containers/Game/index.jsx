import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { FlipCard } from '../../components/FlipCard'
import { Modal } from '../../components/UI/Modal'
import styles from './Game.module.css'

const gameObjects = [
    { name: 'Angular', icon: 'angular.png', id: 0 },
    { name: 'Figma', icon: 'figma.webp', id: 1 },
    { name: 'Git', icon: 'git.png', id: 2 },
    { name: 'Sass', icon: 'sass.png', id: 3 },
    { name: 'VSCode', icon: 'vscode.png', id: 4 },
    { name: 'GitHub', icon: 'github.png', id: 5 },
    { name: 'JS', icon: 'js.png', id: 6 },
    { name: 'React', icon: 'react.png', id: 7 },
    { name: 'Vite', icon: 'vite.png', id: 8 },
]

export const Game = () => {
    const [activeCards, setActiveCards] = useState([])
    const [matches, setMatches] = useState([])

    const [gameCards, setGameCards] = useState([])

    const [isVisible, setIsVisible] = useState(false)

    const [stepsCounter, setStepsCounter] = useState(0)

    const [params] = useSearchParams()

    const { name } = useParams()

    useEffect(() => {
        shuffleCard()
    }, [])

    const shuffleCard = () => {
        const newIdCards = gameObjects.map((item) => {
            return {
                ...item,
                id: item.id + 8,
            }
        })
        const cards = [...gameObjects, ...newIdCards].sort(() => Math.random() - 0.5)
        setGameCards(cards)
    }

    useEffect(() => {
        if (matches.length === gameCards.length && matches.length > 1) {
            setIsVisible(true)
        }
    }, [matches])

    useEffect(() => {
        console.log(name)

        if (activeCards.length >= 2) {
            setStepsCounter((stepsCounter) => (stepsCounter += 1))
            if (activeCards[0].name === activeCards[1].name) {
                setMatches((matches) => [...matches, activeCards[0], activeCards[1]])
                setActiveCards([])
            } else {
                setTimeout(() => {
                    setActiveCards([])
                }, 500)
            }
        }

        console.log(activeCards)
    }, [activeCards])

    const setActiveCard = (index) => {
        if (activeCards.includes(index)) return

        console.log(index)

        setActiveCards((activeCards) => [...activeCards, gameCards[index]])
    }

    const restartGame = () => {
        setMatches([])
        setActiveCards([])
        setStepsCounter(0)
        setIsVisible(false)
        shuffleCard()
    }

    return (
        <>
            <h4 className="title">Memory Game</h4>
            <h4 className="steps">Кол-во шагов: {stepsCounter}</h4>

            <Modal title="Игра завершена" show={isVisible}>
                <ul className="stats-list">
                    <li className="stats-item">
                        Количество шагов:
                        <span>{stepsCounter}</span>
                    </li>
                </ul>

                <button onClick={restartGame}>Переиграть</button>
                <button>Закончить</button>
                <button>Поделиться результатом</button>
            </Modal>

            <div className={styles.wrap}>
                {gameCards.map((item, index) => {
                    return (
                        <FlipCard
                            key={item.id}
                            item={item}
                            click={setActiveCard}
                            index={index}
                            activeCards={activeCards}
                            matches={matches}
                        />
                    )
                })}
            </div>
        </>
    )
}
