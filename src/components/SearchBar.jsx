import React, {Component} from 'react'

class SearchBar extends Component {


    render(){
        return(
            <div>
                <form onSubmit={ (e) => {e.preventDefault()} } className='form-group'>
                    <input 
                        type="text"
                        className='form-control'
                        onChange={ (e) => {console.log(e.target.value)} }
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar

// Event handler, bertugas men-handle ketika suatu event terjadi
    // event: onClick, onSubmit, onChange, ...
// onChange memungkinkan kita untuk memanggil function ketika ada perubahan di text input
// onSubmit memungkinkan kita untuk memanggil function ketika kita tap 'Enter'