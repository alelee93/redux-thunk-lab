// write your CatList component her
import React, { Component } from 'react'

const renderImages = (props) => {
    //debugger
    return (
         
        <div>
           {props.catPics.map(pic => <img src={pic.url} />)}
          


        </div>
    )
}

export default renderImages