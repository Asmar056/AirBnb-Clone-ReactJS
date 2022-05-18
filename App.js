import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    const cardElements = data.map(item => {
        return(
            <Card 
                key = {item.id}
                {...item} /*item = {item}*/
            />
        )
    })
    return (
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {cardElements}
            </section>
            
        </div>
    )
}