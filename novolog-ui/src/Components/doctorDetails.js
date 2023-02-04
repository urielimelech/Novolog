import React from 'react'
import { images, text } from '../const'
import '../Styles/doctorDetails.css'
import { ContactDoc } from './contactDoc'

export const DoctorDetails = ({ doctor = {}, languages = {} }) => {

    const { fullName, reviews, languageIds, phones } = doctor
    const avgReviews = reviews?.averageRating
    const langs = languageIds.map(lang => {
        const l = languages[lang]
        if (l) {
            return l
        }
    })
    const contactDoc = phones.map((phone, i) => {
        return <ContactDoc id={doctor.id} phone={phone?.number} key={i} />
    })

    return <div className='doctorDetailsContainer'>
        <div className='box'>
            {fullName}
            <div className='rating'>
                {avgReviews}
                <img src={require(`../${avgReviews === 5 ? images.rating_full : images.rating_stroke}`)} />
            </div>

        </div>
        <div className='box midBox'>
            <span>{text.support_language} {langs.join(', ')}</span>
            <span>{text.has_article}</span>
        </div>
        <div className='box'>
            {contactDoc}
        </div>
    </div>
}