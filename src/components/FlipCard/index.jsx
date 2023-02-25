import clsx from 'clsx'

export const FlipCard = ({ item, click, index, activeCards, matches }) => {
    return (
        // <div className={styles.card} onClick={() => click(index)}>
        //     <div className={styles.content}>
        //         <div className={clsx(styles.front, activeCards.includes(item) && styles.active)}>
        //             Front
        //         </div>
        //         <div className={clsx(styles.back, !activeCards.includes(item) && styles.active)}>
        //             <img src={item.icon} alt={item.name} />
        //         </div>
        //     </div>
        // </div>
        <div
            className={clsx(
                'card',
                activeCards.includes(item) && 'active',
                matches.includes(item) && 'active',
            )}
            onClick={() => click(index)}
        >
            <div className="content">
                <div className="front">
                    <img src="question-icon.png" alt="Guess" />
                </div>
                <div className="back">
                    <img src={item.icon} alt={item.name} />
                </div>
            </div>
        </div>
    )
}
