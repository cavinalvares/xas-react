import React from 'react'
import {  Link } from 'react-router-dom'
import axios from 'axios';
import {Doughnut} from 'react-chartjs-2'
import {MDBContainer} from 'mdbreact'

class Pal_sub_arts extends React.Component {

   
  state = {
    persons: []
   
  }

  componentDidMount() {
    axios.get(`https://xaviers-analytic-system.herokuapp.com/pal_sub_arts`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons)
	
      })
  }

  

  

  render(){
	
      return(
           <div class="  overlay" style={{backgroundColor:"blue",padding: "20px 60px 108px 60px"}}>
        <div class="container">  
              

	{this.state.persons.map((i)=>{
		
                return(
		<div key={i.id}>
                  <table  border="1" align="center" >
		<tbody>
                <tr>    
		<th><h2>{i.name}</h2></th>
		</tr>
		{i.data.map((j)=>{return(<tr align="center"><td width="800">{j}</td></tr>)})}
	

		</tbody>	
		</table>
		<br/>
		</div>
			
		)
		})}

          </div>
</div>
      )
  }

}

export default Pal_sub_arts

