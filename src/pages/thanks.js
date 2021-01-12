import React from "react"
import '../styles/index.scss'
import ThanksStyles from '../components/thanks.module.scss'

const Thanks = () => {
    return(
        <section>
            <div className={ThanksStyles.container}>
                <h1>Dziękujemy za zgłoszenie!</h1>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <button className={ThanksStyles.buttonStyle}><a href="./index">POWRÓT</a></button>
            </div>
        </section>
    )
}

export default Thanks