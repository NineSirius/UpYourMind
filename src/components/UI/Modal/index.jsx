import clsx from 'clsx'
import { Children } from 'react'

export const Modal = ({ children, title, content, show }) => {
    if (!show) return

    return (
        <>
            <div className="modal">
                <div className="modal-title-wrap">
                    <h4 className="modal-title">{title}</h4>
                    <span className="close">&times;</span>
                </div>
                <div className="modal-content">{children}</div>
            </div>

            <div className={clsx('overlay', show && 'active')}></div>
        </>
    )
}
