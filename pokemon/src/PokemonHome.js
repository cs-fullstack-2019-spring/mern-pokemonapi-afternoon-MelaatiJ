import React, { Component } from 'react';
import Pokemon from "./Pokemon"

class PokemonHome extends Component{
    render(){
        return(
            <div>
            <h1 class={"header"}>Poke World</h1>
                <Pokemon/>
            </div>
    );
    }
}

export default PokemonHome;