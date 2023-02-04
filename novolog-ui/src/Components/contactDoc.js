import React, { useEffect, useState } from 'react'
import '../Styles/contactDoc.css'
import { Button } from "@mui/material"
import { ContactDialog } from './contactDialog'
import { text } from '../const'
import { DoctorsController } from '../Controllers/doctorsController'

export const ContactDoc = ({ id = '', phone = '' }) => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [showContactForm, setShowContactForm] = useState(false)

    const doctorController = new DoctorsController()

    useEffect(() => {
        setPhoneNumber(phoneWithDash())
    }, [])

    const handleOpenContact = () => {
        setShowContactForm(true)
    }
    const handleCloseContact = ({ name, contactPhone, email }) => {
        if (name && contactPhone && email) {
            doctorController.contactDoctor({ id, name, phone: contactPhone, email })
        }
        setShowContactForm(false)
    }

    const phoneWithDash = () => {
        return phone.includes('-') ? phone : addDashToPrefix()
    }
    const addDashToPrefix = () => {
        if (phone.trim().length === 10) {
            const prefix = phone.substring(0, 3)
            const suffix = phone.substring(3)
            return `${prefix}-${suffix}`
        }
        else {
            const prefix = phone.substring(0, 2)
            const suffix = phone.substring(2)
            return `${prefix}-${suffix}`
        }
    }

    return (
        <div className='contactContainer'>
            <Button href={`tel:${phoneNumber}`} onClick={() => { }}>{phoneNumber}</Button>
            <Button onClick={handleOpenContact}>
                {text.contact_doc}
            </Button>
            <ContactDialog isShow={showContactForm} onClose={handleCloseContact} />
        </div>
    )
}