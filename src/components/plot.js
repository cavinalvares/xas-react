import React from 'react';

import axios from 'axios';

export default class Plot extends React.Component {
  
  state = {
    persons: [],
    
  }

  componentDidMount() {
    axios.get(`https://xaviers-analytic-system.herokuapp.com/plot`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons)
      })
  }
  render()
  {
      return(
      <div>
          <h1>done</h1>
          </div>
      )
  }
}