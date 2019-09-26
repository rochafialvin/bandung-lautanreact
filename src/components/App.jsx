import React, {Component} from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'
import ImageList from './ImageList'

// Membuan komponen dengan menggunakan class
class App extends Component{

    state = {
        pictures: [] // [{urls}, {urls}, ...]
    }

    // term adalah inputan dari user di komponen Search Bar
    onSearchSubmit = (term) => {
        // Request gambar ke unsplash dengan term yang di dapatkan dari komponen SearchBar
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
            // then akan di jalankan ketika proses request berhasil
            // res.data.results = [{urls}, {urls}, ...]
            // hasil request akan di simpan di state component App.jsx
            this.setState( {pictures: res.data.results} )
            
        
        })

    }


    render(){

        return(
            <div className='container'>
                <h1 className='text-center mt-3 mb-5'>Image Search Engine</h1>
                <SearchBar sama={this.onSearchSubmit} />
                <ImageList gambars={this.state.pictures}/>
            </div>
        )
    }

}


export default App

// Agar bisa di gunakan di file lain, maka kita harus export
// dan file lain yang membutuhkan akan meng import

// this.setState adalah function yang berguna untuk meng-update state component
    // setiap kita menjalankan this.setState akan men- T R I G G E R component RENDER ULANG