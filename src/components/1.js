import React from 'react';
import ReactDOM from 'react-dom'

class Test extends React.Component{
    state = {
        data : {
            labels:["a","b"],
            datasets:[
                {
                    data1:[30,40],
                    color:['a','b']
                }
            ]
        }
    }
    render(){
        this.state.data.datasets[0].data1[0]=10
        console.log(this.state.data.datasets[0].data1[0])
        return(
            <div>
                {this.state.data.datasets.map((i)=>{
                    return(
                       <div>
                           {this.i.data1.map((j)=>{
                               return(
                               <p>{j}</p>
                               )
                           })}
                          </div>
                    )
                })}
            </div>
        )
    }
}
export default Test