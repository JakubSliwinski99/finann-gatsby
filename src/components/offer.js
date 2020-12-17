import React from "react"
import '../styles/index.scss'
import OfferStyle from './offer.module.scss'
import IconBooks from '../icons/001-books.svg'
import IconGroup from '../icons/002-group.svg'
import IconNotebook from '../icons/003-notebook.svg'

const Offer = () => {
    return(
        <section className={OfferStyle.offer} id="offer">
            <h3>Oferta</h3>
            <div className={OfferStyle.wrapper}>
                <div className={OfferStyle.offerElement}>
                    <img src={IconBooks} />
                    <h2>Podatkowa księga przychodów i rozchodów</h2>
                    <p>
                        Biuro świadczy usługi księgowe i profesjonalną obsługę 
                        podatkową dla jednoosobowych działalności gospodarczych 
                        oraz spółek cywilnych, prowadzących rozliczenia 
                        na zasadach podatkowej księgi przychodów i rozchodów.
                    </p>
                </div>
                <div className={OfferStyle.offerElement}>
                    <img src={IconGroup} />
                    <h2>Kadry i płace</h2>
                    <p>
                        Biuro świadczy kompleksowe usługi kadrowo-płacowe, 
                        tj. sporządzanie list płac, prowadzenie akt osobowych, 
                        sporządzanie umów, rozliczenia z ZUS, itp.
                    </p>
                </div>
                <div className={OfferStyle.offerElement}>
                    <img src={IconNotebook} />
                    <h2>Ewidencja ryczałtowa</h2>
                    <p>
                        Biuro świadczy również usługi dla osób, które wybrały jako formę 
                        Rozliczeń, ryczałt ewidencjonowany lub kartę podatkową.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Offer