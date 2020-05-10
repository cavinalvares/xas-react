import React from 'react'
import axios from 'axios';

class Pal_fac extends React.Component {

   
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://xaviers-analytic-system.herokuapp.com/pal_fac`)
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
                  <table  border="1" align="center">
		<tbody>
                <tr>    
		<th><h2>{i.name}</h2></th>
		</tr>
		{i.data.map((j)=>{return(<tbody><tr align="center"><th width="800">{j.name}</th></tr>
		{j.data.map((k)=>{return(<tr align="center"><td>{k}</td></tr>)})}</tbody>)
		
		})}
	

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

export default Pal_fac

//return(<tr align="center"><th>{j.name}</th></tr><tr><td>{j.data}</td></tr>)
//{j.data.map((k)=>{return(<tr align="center"><td>{k}</td></tr>)})}