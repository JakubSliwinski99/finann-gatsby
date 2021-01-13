import React from "react"
import '../styles/index.scss'
import ThanksStyles from '../components/thanks.module.scss'
import {Link} from 'gatsby'


class Thanks extends React.Component {

    render () {
        return(
            <section>
                <div className={ThanksStyles.container}>
                    <h1>Dziękujemy za zgłoszenie!</h1>
                    <p>W celu przedstawienia wstępnej oferty, skontaktujemy się z Państwem w przeciągu 48 godzin.
                    </p>
                    <div>
                        <Link to="/"><button className={ThanksStyles.buttonStyle}>POWRÓT</button></Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default Thanks