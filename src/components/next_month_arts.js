import React from 'react'
import axios from 'axios';
import {Bar} from 'react-chartjs-2';

class Next_month_arts extends React.Component {

   
  state = {
  	persons:[],june:0
  }

  componentDidMount() {
    axios.get(`https://xaviers-analytic-system.herokuapp.com/fac_next_arts`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
	console.log('hello')
        console.log(persons)
	
      })
  }

 

  

  render(){
      return(
         <div>
             {this.state.persons.map((i)=>{return(
		<div key={i.id}>
		

		<Bar
		data={{
		labels:['June','July','August','Predicted in September'],
		datasets:[{
			label:'Attendance',
			backgroundColor:'rgb(75,192,1)',
			borderColor:'rgba(0,0,0,1)',
			borderWidth:2,
			data:[i.month[0],i.month[1],i.month[2],i.month[3],0,100]
}]
}}
		
			options={{
		title:{
			display:true,
			text:'Average Attendance Per Month',
			fontSize:20
			},		
		
		legend:{
			display:true,
		position:'right'
			}
				}}/>
		</div>
		)
		})}
          </div>
      )
  }

}

export default Next_month_arts
/*
<h1>{i.month[0]}</h1>
		<h1>{i.month[1]}</h1>
		<h1>{i.month[2]}</h1>
		<h1>{i.month[3]}</h1>
*/