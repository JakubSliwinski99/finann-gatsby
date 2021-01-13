import React from "react"
import '../styles/index.scss'
import FooterStyle from './footer.module.scss'

const Footer = () => {
    return (
        <section className={FooterStyle.footer}>
            <div className={FooterStyle.container}>
                Biuro Rachunkowe Fin-Ann<br/>
                tel. 514 - 995 - 620<br/>
                an.sliwinska@gmail.com
                <div className={FooterStyle.iconsCredit}>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip </a> <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </section>
    )
}

export default Footer