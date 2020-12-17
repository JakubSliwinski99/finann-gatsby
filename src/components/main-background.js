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
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                   </p>
               </div>
            </div>
        </section>
    )
}

export default Background