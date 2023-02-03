import React, { useEffect, useState } from "react"
import { Button, MenuItem, Select } from '@mui/material';

import '../Styles/doctorsContainer.css'

import { text } from "../const"
import { DoctorDetails } from "./doctorDetails"

export const DoctorsComponent = ({ doctors = [], languages = {} }) => {

    const [presentedDoctors, setPresentedDoctors] = useState([])

    useEffect(() => {
        setPresentedDoctors(doctors)
    }, [])

    useEffect(() => {
        console.log(presentedDoctors)
    }, [presentedDoctors])

    const setAllDoctors = () => {
        setPresentedDoctors(doctors)
    }
    const setActiveDoctors = () => {
        const activeDocs = doctors.filter(doc => doc?.isActive)
        setPresentedDoctors(activeDocs)
    }
    const setPromotedDoctors = () => {
        const promotedDocs = doctors.filter(doc => doc?.promotionLevel <= 5)
        setPresentedDoctors(promotedDocs)
    }

    return (
        <div className="container">
            <div className="optionsContainer">
                <div className="buttonsContainer">
                    <Button onClick={setAllDoctors}>{text.all_doctors}</Button>
                    <Button onClick={setActiveDoctors}>{text.active_doctors}</Button>
                    <Button onClick={setPromotedDoctors}>{text.promoted_doctors}</Button>
                </div>
            </div>
            {presentedDoctors.map((doc, index) => <DoctorDetails key={index} doctor={doc} languages={languages} />)}
        </div>
    )
}