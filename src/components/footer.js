import React from "react"
import '../styles/index.scss'
import FooterStyle from './footer.module.scss'

const Footer = () => {
    return (
        <section className={FooterStyle.footer}>
            <div className={FooterStyle.container}>
                FINN - ANN 
                tel: 514 - 995 - 620
                e-mail: an.sliwinska@gmail.com
            </div>
        </section>
    )
}

export default Footer