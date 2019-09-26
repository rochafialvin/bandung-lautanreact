import React, {Component} from 'react'

class ImageList extends Component{


    // Function untuk map dari object menjadi image
    renderImages = () => {
        // gambars = [ {}, {}, {} ]
        // gambar = {id, description, urls, ...}
        let hasil = this.props.gambars.map( (gambar) => {
            return (
                <img src={gambar.urls.regular} />
            )
        } )

        // [<img>, <img>, <img]
        return hasil
    }


    render(){
        return (
            <div>
                { this.renderImages() }
            </div>
        )
    }
}

export default ImageList

// Kita dapat menjalakan kode javascript di dalam syntax jsx dengan menaruhnya di dalam kurung kurawal {}