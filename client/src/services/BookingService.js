const baseURL = 'http://localhost:9000/'

    export const getBookings = () => {
        return fetch(baseURL)
            .then(res => res.json())
    }
    
    export const postBooking = (payload) => {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    }
    
    export const deleteBooking = (id) => {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }


    // export const updateBooking = (id) => {
    //     return fetch(baseURL + id, {
    //         method: 'PUT'
    //     })
    // }
    
    export const checkInBooking = (payload) => {

        return fetch(baseURL+ payload._id, {
            method: 'PATCH',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())

    }

    // export const checkInBooking = (data, id) => {
    //     delete data._id
    //     return fetch(baseURL + id, {
    //         method: 'PATCH',
    //         body: JSON.stringify(data),
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //     .then(res => res.json())
    // }
    