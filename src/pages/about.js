import React from "react"
import Header from "../components/header"

export default function About() {
    return (
        <div style={{ color: 'teal' }}>
            <Header headerText = "About Gatsby"/>
            <Header headerText = "It's nice."/>
            <p>This is website that I made. hee hee It uses react and Gatsby!</p>
        </div>
    )
}