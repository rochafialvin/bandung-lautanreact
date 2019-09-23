import React, {Component} from 'react'

class SearchBar extends Component {

    // Tempat menyimpan data component
    state = {
        term: ''

    }

    onSubmitForm = (e) => {
        // function yang akan men-cancel halaman dari refresh
        e.preventDefault()

        this.props.sama(this.state.term)
    }

    render(){
        
        return(
            <div>
                <form onSubmit={ this.onSubmitForm } className='form-group'>
                    <input 
                        type="text"
                        className='form-control'
                        onChange={ (e) => { this.setState({term: e.target.value}) } }
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar
// e.target.value berisi string yang di input / ketik oleh user
// Event handler, bertugas men-handle ketika suatu event terjadi
    // event: onClick, onSubmit, onChange, ...
// onChange memungkinkan kita untuk memanggil function ketika ada perubahan di text input
// onSubmit memungkinkan kita untuk memanggil function ketika kita tap 'Enter'

// Setiap komponen memiliki tempat penyimpanan data namanya adalah state
    // Untuk mengubah nilai state kita harus menggunakan function this.setState()