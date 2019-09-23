import React, {Component} from 'react'

import SearchBar from './SearchBar'

// Membuan komponen dengan menggunakan class
class App extends Component{

    
    onSearchSubmit = (term) => {
        console.log(term)

    }


    render(){
        return(
            <div className='container'>
                <h1 className='text-center mt-3 mb-5'>Image Search Engine</h1>
                <SearchBar asdf={this.onSearchSubmit} />
            </div>
        )
    }

}

// Agar bisa di gunakan di file lain, maka kita harus export
// dan file lain yang membutuhkan akan meng import
export default App