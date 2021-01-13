import React from "react"
import '../styles/index.scss'
import AboutStyle from './about.module.scss'

const About = () => {
    return(
        <section className={AboutStyle.about} id="about">
            <section>
                <h3>
                    O firmie
                </h3>
                <h2>Nasza firma działa na lokalnym rynku od 2014 roku.</h2>
                <p>
                    Podstawowym obszarem działalności biura jest kompleksowa obsługa małych i
                    średnich firm w zakresie usług podatkowych, księgowych, rozliczeń z ZUS oraz
                    prowadzenie spraw pracowniczych (kadrowo-płacowych). Udzielamy wsparcia na
                    wszystkich etapach prowadzenia działalności gospodarczej.
                </p>
                <p>
                    Naszą wizytówką jest rzetelność i profesjonalizm. Wieloletnie doświadczenie
                    zawodowe oraz indywidualne podejście do każdego Klienta gwarantuje świadczenie
                    przez nas usług na najwyższym poziomie. Posiadamy obowiązkowe
                    ubezpieczenie OC, które stanowi gwarancję bezpieczeństwa naszych
                    Klientów.
                </p>
                <p>
                    Do obsługi finansowej wykorzystujemy najnowocześniejsze oprogramowanie, dzięki czemu
                    zapewniamy poufność przechowywanych danych i poprawność wykonywanych obliczeń,
                    dokonywanych w zgodzie <br/> z obowiązującymi przepisami.
                </p>
            </section> 
            <div className={AboutStyle.bookBackground}>
                <div className={AboutStyle.shapeDividerTop}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={AboutStyle.shapeFill}></path>
                    </svg>
                </div>
                <div className={AboutStyle.shapeDividerBottom}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={AboutStyle.shapeFill}></path>
                    </svg>
                </div>
            </div>
        </section>
        
    )
}

export default About