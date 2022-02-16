import React,{ useState } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from  'react-loader-spinner'

export default function Loader() {
    
    return (
        <Oval
            heigth="100"
            width="100"
            color='grey'
            ariaLabel='loading'
        />
    )
}
