
import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'



class GifListContainer extends Component {
    state = {
        gifs: []
    }





    render(){
        return(
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    fetchGIFs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=YAkvRsSSbx8NLZeQcX2Mww1uoz4EFBLB=&rating=g`)
        .then(res => res.json())
        .then(({data}) => {
            console.log(data);
           // this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })

    }


    componentDidMount(){
        this.fetchGIFs()
    }


}


export default GifListContainer 


//https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YAkvRsSSbx8NLZeQcX2Mww1uoz4EFBLB&rating=g

//"https://media3.giphy.com/media/l3fQbSe8heZeznfAk/giphy.gif?cid=d057e149nkedmktkfqnq5whnddx5oqpci30x5zjywci31966&rid=giphy.gif&ct=g"