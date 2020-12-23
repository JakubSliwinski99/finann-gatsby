import React from "react"
import '../styles/index.scss'
import FormStyle from './form.module.scss'

const FormPage = () => {
    return(
        <section className={FormStyle.style} id="contact">
            <div  className={FormStyle.backgroundStyle}>
            <div className={FormStyle.bgColor}></div>
            <div className={FormStyle.container}>
                <h2>KONTAKT</h2>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" className={FormStyle.form}>
                    <div className={FormStyle.part}>
                        <div className={FormStyle.item}>
                            <input type="text" name="fname" placeholder="Nazwa firmy" className={FormStyle.inputStyle}></input>
                            <input type="text" name="fname" placeholder="Adres e-mail" className={FormStyle.inputStyle}></input>
                            <input type="text" name="fname" placeholder="Telefon" className={FormStyle.inputStyle}></input>
                        </div>
                        <div className={FormStyle.item, FormStyle.itemText}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <p>
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries
                            </p>
                        </div>
                    </div>
                    <div className={FormStyle.item}>
                        <input type="text" name="fname" placeholder="Pytanie" className={FormStyle.inputStyleBig}></input>
                    </div>
                </form>
                <div className={FormStyle.buttonDiv}>
                <button type="submit" className={FormStyle.buttonStyle}>ZGŁOŚ SIĘ</button>
                </div>
            </div>
            </div>
        </section>
    )
}

export default FormPage