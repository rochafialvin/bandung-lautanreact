import React, {Component} from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'

// Membuan komponen dengan menggunakan class
class App extends Component{

    
    onSearchSubmit = (term) => {
        // Request gambar ke unsplash
        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: 'Client-ID 9b72bbe94e1fef52e4486fe765f5ea334c0fe78ac2d1ea0474d5abc43d329065'
                },

                params: {
                    query: term
                }
            }
        ).then( (res) => {
            // OBJECT YANG PUNYA BANYAK PROPERTY
            console.log(res.data.results)
        
        })

    }


    render(){
        return(
            <div className='container'>
                <h1 className='text-center mt-3 mb-5'>Image Search Engine</h1>
                <SearchBar sama={this.onSearchSubmit} />
            </div>
        )
    }

}

// Agar bisa di gunakan di file lain, maka kita harus export
// dan file lain yang membutuhkan akan meng import
export default App