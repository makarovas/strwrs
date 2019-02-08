import React, { Component } from 'react';

function res() {
  async getResource() {
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error(`could get fetch ${url} , received ${res.status}`)
    }
  }
}
function  f(){
  const getResource  = async (url) => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
  };
  getResource('https://swapi.co/api/people/213123121/')
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.error(err);
    });
 
}

class SwapService extends Component {
  
  render(){
    return (<></>)
  }
 
}




class App extends Component {

 
  render() {
 f();
 res();
    return (
      <div className="App">
        {

        }

      </div>
    );
  }
}

export default App;
