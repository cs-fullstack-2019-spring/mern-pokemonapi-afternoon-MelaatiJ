import React, {Component} from 'react';
import './App.css';


class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            // imageData:[],
        }
    }

    componentDidMount() {
        this.loadData();
        // this.loadImage()
    }

    loadData() {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=900")
            .then(data => data.json())
            .then(returnedData => this.setState({data: returnedData}))

    }
    // loadImage() {
    //     fetch("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png")
    //         .then(data=>data.json())
    //         .then(returnedImageData => this.setState({imageData:returnedImageData}))
    // }

    render() {

        // console.log(this.state.data);
        let tempArray = [];

        if(this.state.data.results)
            tempArray = this.state.data.results;
        let dataMap = tempArray.map(
            (eachPokemon, index) => {
                return (
                    <div>
                        <img src={index+1 +".png"}/>
                        {/*<img src="/1.png"/>*/}
                        <h3>{eachPokemon.name}</h3>

                    </div>
                )

            }
        );
        return (
            <div className={"grid"}>
                {dataMap}
            </div>
        );
    }
}

export default Pokemon;