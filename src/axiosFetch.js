'use strict'
import axios from 'axios'

export class FetchForMyHW {
    BASE_URL = 'https://pixabay.com/api/'
    API_KEY = 'key=35073598-f2a52a45f6e7203dfdfac4edb'

    querry = null
    page = 1
    per_page = 40

    async axiosReturn () {
       return axios.get(`${this.BASE_URL}?${this.API_KEY}&q=${this.querry}&image_type=photo&safesearch=true&orientation=horizontal&page=${this.page}&per_page=${this.per_page}`).then(data => {return data})
    }
    
}