import React from 'react';
import axios from 'axios';
import {Doughnut} from 'react-chartjs-2'
import {MDBContainer} from 'mdbreact'

export default class Pal_black extends React.Component {
  state = {
    persons: [],
    data1:{
      labels:['Blacklist','excellent','great','good'],
      datasets:[{
        data:[0,0,0,0],
        backgroundColor:['#F7464A','#46BFBD','#FDB45C','#949FB1'],
        hoverBackgroundColor:['#FF5A5E','#5AD3D1','#FFC870','A8B3C5']
      }]
    }
  }

  componentDidMount() {
    axios.get(`https://xaviers-analytic-system.herokuapp.com/pal_black`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons)
      })
  }

 graph = (b,a,g,e) =>{
  {this.state.data1.datasets[0].data[0]=b}
  {this.state.data1.datasets[0].data[1]=e}
  {this.state.data1.datasets[0].data[2]=g}
  {this.state.data1.datasets[0].data[3]=a}

 }

  render() {
    let b=0,g=0,a=0,e=0;
    return (
        
        <div class="  overlay" style={{backgroundColor:"blue",padding: "20px 60px 108px 60px"}}>
        <div class="container"> 
	<MDBContainer>
  <Doughnut data={this.state.data1} options = {{responsive:true}}/>
</MDBContainer><br/><br/>
            <table border="1" align="center">
              <tbody>
              <tr>
                <th>Roll no</th><th>Status</th>
              </tr>
                {this.state.persons.map((i)=>{
                  {console.log(i.id)}
                  {console.log(b,a,g,e)}
                  if(i.ack === 'blacklisted'){
                    {b+=1}
                   return(
                      <tr key={i.id}>
                          <td align='center'width="400">{i.studrollno}</td><td align='center' width="400">{i.ack}</td>
                         </tr>
                    ) }
                    if(i.ack === 'good'){
                      {g= g+1}
                    }
                    if(i.ack === 'excellent'){
                      {e+=1}
                    }
                    if(i.ack === 'great'){
                      {a+=1}
                    }
                  })}
                </tbody>
                </table>

{this.graph(b,a,g,e)}


  
</div>       
</div>
            
            
            
         
        
    
     
        )
  }
}