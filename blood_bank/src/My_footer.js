import React from 'react'

export default function My_footer(){
    const year = new Date().getFullYear();
    return (
        <>
        <h5>© Praca zaliczeniowa z przedmiotu szkielety programistyczne {year}</h5>
        </>
    )
}