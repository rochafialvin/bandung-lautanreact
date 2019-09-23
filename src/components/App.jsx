import React, {Component} from 'react'

import SearchBar from './SearchBar'

// Membuan komponen dengan menggunakan class
class App extends Component{

    // Class H A R U S memiliki satu function yaitu render
    // function render hanya boleh me return satu element, biasanya div, tapi tidak harus
    render(){
        return(
            <div className='container'>
                <h1 className='text-center mt-3 mb-5'>Image Search Engine</h1>
                <SearchBar/>
            </div>
        )
    }

}

// Agar bisa di gunakan di file lain, maka kita harus export
// dan file lain yang membutuhkan akan meng import
export default App