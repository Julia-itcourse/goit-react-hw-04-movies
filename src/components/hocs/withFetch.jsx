import React, {Component} from 'react'
import {fetchTrending} from '../../services/moviesApi'

const withFetch = (url) => (WrappedComponent) =>{

    return(

        class WithFetch extends Component {

state={
movies: [],
loading: false,
error: null
}

componentDidMount(){

    fetchTrending(url)
    .then(res => {console.log("results from fetch", res);
        this.setState({movies: res})}

    )
}

            render(){
                console.log("this state from fetch", this.state);
                return <WrappedComponent {...this.props} {...this.state}/>
            }
        }
    )
}

export default withFetch