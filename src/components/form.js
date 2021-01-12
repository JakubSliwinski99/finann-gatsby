import React from "react"
import '../styles/index.scss'
import FormStyle from './form.module.scss'
import { navigate } from 'gatsby-link'

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

const FormPage = () => {
    const [state, setState] = React.useState({})

    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }

    return(
        <section className={FormStyle.style} id="contact">
            <div  className={FormStyle.backgroundStyle}>
            <div className={FormStyle.bgColor}></div>
            <div className={FormStyle.container}>
                <h2>KONTAKT</h2>
                <form 
                name="contact" method="post" action="../thanks/" //WAŻNE -- dopisać stronę thx
                data-netlify="true" data-netlify-honeypot="bot-field" 
                onSubmit={handleSubmit} className={FormStyle.form}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                        <label>
                            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                        </label>
                    </p>
                    <div className={FormStyle.part}>
                        <div className={FormStyle.item}>
                            <input type="text" placeholder="Nazwa firmy" name="name" className={FormStyle.inputStyle} onChange={handleChange}></input>
                            <input type="email" placeholder="Adres e-mail" name="email" className={FormStyle.inputStyle} onChange={handleChange}></input>
                            <input type="text" placeholder="Telefon" name="phone" className={FormStyle.inputStyle} onChange={handleChange}></input>
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
                        <textarea placeholder="Pytanie" name="message" className={FormStyle.inputStyleBig} onChange={handleChange}></textarea>
                    </div>
                    <div className={FormStyle.buttonDiv}>
                        <button type="submit" className={FormStyle.buttonStyle}>ZGŁOŚ SIĘ</button>
                    </div>
                </form>
            </div>
            </div>
        </section>
    )
}

export default FormPage