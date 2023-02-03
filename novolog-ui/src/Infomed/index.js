import React, { useEffect, useState } from 'react'
import '../Styles/index.css'
import { Title } from '../Components/title'
import { ArticlesController } from '../Controllers/articlesController'
import { DoctorsController } from '../Controllers/doctorsController'
import { LanguagesController } from '../Controllers/languageController'
import { DoctorsComponent } from '../Components/doctorsComponent'
import { Loading } from '../Components/Loading'

export const InfoMed = () => {
    const [doctors, setDoctors] = useState()
    const [languages, setLanguages] = useState()
    const [articles, setArticles] = useState()

    const doctorController = new DoctorsController()
    const languageController = new LanguagesController()
    const articlesController = new ArticlesController()

    useEffect(() => {
        setDoctors(doctorController.getDoctors())
        setLanguages(languageController.getLanguages())
        setArticles(articlesController.getArticles())
    }, [])

    useEffect(() => {
        console.log(doctors)
    }, [doctors])

    return (
        <div className='main'>
            <Title titleName='InfoMed' />
            {doctors ? <DoctorsComponent doctors={doctors} languages={languages} /> : <Loading />}
        </div >
    )
}