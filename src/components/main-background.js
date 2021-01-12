import React from "react"
import '../styles/index.scss'
import BGstyles from './main-background.module.scss'

const Background = () => {
    return(
        <section>
            <div className={BGstyles.bgimage}>
                <div className={BGstyles.bgcolor}></div>
                <div className={BGstyles.pageTitle}>
                   <h2>Biuro Rachukowe <br />Fin - Ann </h2>
                   <p>od 2014 roku dostarczamy profesjonale usługi księgowe oraz kadrowo-
                        płacowe dla małych i średnich firm. Do skorzystania z naszych usług
                        zapraszamy klientów z Krakowa i okolic. Zapewniamy indywidualne podejście
                        oraz elastyczną ofertę usług, którą każdorazowo dopasowujemy do potrzeb
                        każdej firmy.
                   </p>
               </div>
            </div>
        </section>
    )
}

export default Background