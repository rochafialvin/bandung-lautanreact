import React, {Component} from 'react'

class ImageList extends Component{



    render(){
        return (
            <div>
                <h3>Jumlah Gambar: {this.props.gambars.length}</h3>
            </div>
        )
    }
}

export default ImageList

// Kita dapat menjalakan kode javascript di dalam syntax jsx dengan menaruhnya di dalam kurung kurawal {}