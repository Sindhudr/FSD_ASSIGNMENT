import React from 'react'
import Image from '../pages/Image'



import '../../App.css'

export default function BreedDetails() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Breed Details</h1>
            <div class="container">
                            <Image data= {window.breedName}></Image>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "50vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}