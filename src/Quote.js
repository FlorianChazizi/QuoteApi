import React, { Component } from 'react';
import axios from 'axios';
import './loader.css';
class Quote extends Component {

    constructor(props){
        super(props);
        this.state = { quote: '', isLoaded: false}
      }

      componentDidMount(){
        axios.get('https://api.github.com/zen').then( response => { // Load Data
        
        setTimeout(() => {
          this.setState({ quote: response.data, isLoaded: true });                // set state with Data
          
          console.log(this.state.isLoaded);
        }, 1500);
      })
      }

    render(){
        console.log(this.state.quote, this.state.isLoaded);
        return (
          <div>
              {this.state.isLoaded ? (
                <div className='card'>
                  <h1 className='heading'>{this.state.quote}</h1>
              </div> 
              ) : (
                <div className='card'>
                  <div className='loader'>  </div>
                </div>

              )}
            </div>
          );
    }
  
}

export default Quote;
