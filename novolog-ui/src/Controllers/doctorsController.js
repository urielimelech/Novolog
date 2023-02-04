import doctors from '../localDB/doctors.json'

export class DoctorsController {
    constructor() { }
    getDoctors() {
        return doctors.sort((a, b) => {
            return (a.reviews.averageRating === b.reviews.averageRating || b.reviews.totalRatings - a.reviews.totalRatings || b.promotionLevel - a.promotionLevel)
        })
    }
    contactDoctor({id, name, phone, email}){
        /* request to server to send contact details with id, name, phone, email */
    }
}