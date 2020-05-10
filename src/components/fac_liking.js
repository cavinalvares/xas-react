import React from 'react'
import {  Link } from 'react-router-dom'
import axios from 'axios';
import {Doughnut} from 'react-chartjs-2'
import {MDBContainer} from 'mdbreact'

class Fac_liking extends React.Component {

   
  state = {
    persons: [],
    data1:{
      labels:['excellent','great','good','bad'],
      datasets:[{
        data:[0,0,0,0],
        backgroundColor:['#46BFBD','#FDB45C','#949FB1','#F7464A'],
        hoverBackgroundColor:['#5AD3D1','#FFC870','A8B3C5','#FF5A5E']
      }]
    }
  }

  componentDidMount() {
    axios.get(`https://xaviers-analytic-system.herokuapp.com/fac_fac`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons)
	
      })
  }

  graph = (b,a,g,e) =>{
    {this.state.data1.datasets[0].data[0]=b}
    {this.state.data1.datasets[0].data[1]=a}
    {this.state.data1.datasets[0].data[2]=g}
    {this.state.data1.datasets[0].data[3]=e}
    {console.log(this.state.data1)}
  }
 

  

  render(){
      return(
          <div>
              {this.state.persons.map((i)=>{
                return(
                  <div key={i.id}>
                    <h2 align="center">{i.name}</h2>
                   
                    <MDBContainer>
                    <Doughnut data={{
      labels:['excellent','great','good','bad'],
      datasets:[{
        data:[i.data[0],i.data[1],i.data[2],i.data[3]],
        backgroundColor:['#46BFBD','#FDB45C','#949FB1','#F7464A'],
        hoverBackgroundColor:['#5AD3D1','#FFC870','A8B3C5','#FF5A5E']
      }]
    }} options = {{responsive:true}}/>
                    </MDBContainer>
  		<br/>
		<br/>
                  </div>

                )
              })}
          </div>
      )
  }

}
//5,9,16 options = {{responsive:true}}
export default Fac_liking