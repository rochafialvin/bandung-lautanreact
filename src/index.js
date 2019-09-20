// React di perlukan untuk dapat membuat / membaca / mengetahui cara kerja dari komponen
import React from 'react'
// ReactDOM akan me render komponen App di file index.html di tag div id root
import ReactDOM  from 'react-dom'
// App adalah komponen induk dari semua komponen yang ada
// komponen yang dibutuhkan akan berkumpul di App.js
// Di import dari alamat file App berada, ini hanya memungkinkan jika file App sudah melakukan proses export
import App from './components/App.jsx'

// Proses rendering
// Me-render komponen App di div dengan id root
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)