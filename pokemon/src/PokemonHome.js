import React, { Component } from 'react';
import Pokemon from "./Pokemon"
import 'bootstrap/dist/css/bootstrap.css';



class PokemonHome extends Component{
    render(){
        return(
            <div>
            <h1 className={"header"}>Poke World</h1>
                <Pokemon/>
            </div>
    );
    }
}

export default PokemonHome;