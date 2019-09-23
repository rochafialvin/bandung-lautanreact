import React, {Component} from 'react'

class SearchBar extends Component {

    render(){
        return(
            <div>
                <form className='form-group'>
                    <input type="text" className='form-control'/>
                </form>
            </div>
        )
    }
}

export default SearchBar