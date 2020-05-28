import React from 'react';
import axios from 'axios';
import AOS from 'aos'
import {  Link } from 'react-router-dom'
//onChange={(values) => this.setValues(values)} 
  


const subject = [{id:10,label:'Computer Application'},{id:1,label:'Accommodation Operation'}, {id:2,label:'Accountancy'}, {id:3,label:'Bakery'},
       {id:4,label:'Banking'}, {id:5,label:'Biology'}, {id:6,label:'Botany'}, {id:7,label:'Business Studies'}, {id:8,label:'Chemistry'},
       {id:9,label:'Civics'}, {id:11,label: 'Co-operation'},{id:12,label: 'Economics'},
       {id:13,label:'English'},{id:14,label:'French'}, {id:15,label:'General Foundation Course'}, {id:16,label:'Hindi'},{id:27,label:'History'},
       {id:17,label:'Konkani'}, {id:18,label:'Logic'}, {id:19,label:'Marathi'}, {id:20,label:'Mathematics'}, {id:21,label:'Physics'},
       {id:22,label:'Political Science'}, {id:23,label:'Portuguese'}, {id:24,label:'Psychology'}, {id:25,label:'Secretarial Practice'},
       {id:26,label:'Sociology'}]

export default class Form_arts extends React.Component {

	constructor(props,context)
	{
		super(props, context);
		AOS.init();
		
	}

	componentWllReceiveProps(){
		AOS.refresh();
	}  
  
  state = {
    name1: 'Accommodation Operation',
    name2: 'Accommodation Operation',
    name3: 'Accommodation Operation',
    name4: 'Accommodation Operation',
    name5: 'Accommodation Operation',
    name6: 'Accommodation Operation',
    value1:0,
    value2:0,
    value3:0,
    value4:0,
    value5:0,
    value6:0,
 
  }

  handleChange1 = (name) => {
    this.setState({name1:name.target.value});
    }
  
  handleChange2 =  (name) => {
    this.setState({name2:name.target.value});
       }
  handleChange3 = (name) => {
      this.setState({name3:name.target.value});
       
 
       
   }
  handleChange4 = (name) => {
  
 
       this.setState({name4:name.target.value});
       
 
       
   }
  handleChange5 =  (name) => {
 
 
       this.setState({name5:name.target.value});
       
 
       
   }
  handleChange6 = (name) => {

 
       this.setState({name6:name.target.value});
       
     
       
   }
  valueChange1 =  (value1) => {
   
 
       this.setState({value1:value1.target.value});
       
     
       
   }
  valueChange2 =  (name) => {
    
 
       this.setState({value2:name.target.value});
       
   
       
   }
  valueChange3 =  (name) => {
   
 
       this.setState({value3:name.target.value});
       
  
       
   }
  valueChange4 =  (name) => {
    
 
       this.setState({value4:name.target.value});
       
    
       
   }
  valueChange5 = (name) => {
    
 
       this.setState({value5:name.target.value});
      
 
       
   }
  valueChange6 =  (name) => {
   
       this.setState({value6:name.target.value});
     
   }




  handleSubmit = event => {
    //event.preventDefault();

    const user = {
      name1: this.state.name1,
      name2: this.state.name2,
      name3: this.state.name3,
      name4: this.state.name4,
      name5: this.state.name5,
      name6: this.state.name6,
      value1:this.state.value1,
      value2:this.state.value2,
      value3:this.state.value3,
      value4:this.state.value4,
      value5:this.state.value5,
      value6:this.state.value6,
    };
      console.log(user)
    axios.post(`https://xaviers-analytic-system.herokuapp.com/form_arts`, { user })
       }

 

  render() {
    let list = subject.map((i)=>{
      return(
    <option key={i.id} value={i.label}>{i.label}</option>
        )
      })
    return (
      <div class="site-wrap">
<div class="site-mobile-menu ">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

  <header className="site-navbar py-4 bg-white" role="banner">
	
	

      <div className="container">
        <div className="row align-items-center">
          <div class="d-inline-block d-xl-none col-2  " style={{position: "relative", top: "3px",width:"20%" }}><a  class="site-menu-toggle js-menu-toggle text-black "><span class="icon-menu h3"></span></a></div>          
          <div className="col-md-6">
            <h1 className="mb-0 site-logo"><a href="index.html" className="text-black h2 mb-0">Xaviers Analytic System</a></h1>
          </div>
          <div className="col-md-6 d-none d-xl-block">
            <nav className="site-navigation position-relative text-right" role="navigation">

              <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                <li className="active"><Link to="/">Home</Link></li>
                
                <li className="has-children">
                  <a href="/">Addmission</a>
                  <ul className="dropdown">
                    <li><Link to="/form">Science</Link></li>
		    <li><Link to="/form_arts">Arts</Link></li>
                  </ul></li>
				 <li class="has-children">
                  <a href="/">Users</a>
                  <ul className="dropdown">
                    <li><Link to="/stud">Student</Link></li>
                    <li><Link to="/fac">Faculty</Link></li>
                  </ul></li>
				 
				  
                
              </ul>
            </nav>
          </div>


          

          </div>

        </div>
      
    </header>
	
	   <div class="  my-overlay" style={{backgroundImage:"url(./images/arts_add.jpg)",backgroundSize:"100% 100%"}} data-aos="fade">
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">

          <div class="col-md-12" data-aos="fade-up" data-aos-delay="400">
                        
            <div class="row  mb-4">
              <div class=" col-md-12 text-center">
                 
 <form onSubmit={this.handleSubmit} action='./arts_pre' className=" container">

		<h1 class=" text-white mb-5" >Addmission Form</h1> 
		<table >
		<tbody>
		<tr >
		<th style={{backgroundColor:"transparent",align:"center"}}><label className="text-white  mb-3 mb-md-0"><h5>Enter Subject</h5></label></th>            
		<th style={{backgroundColor:"transparent"}}><label className="text-white  mb-3 mb-md-0"><h5>Enter Marks</h5></label></th>
                </tr>
		<tr>
		<td style={{backgroundColor:"transparent"}}><select  class="form-control " onChange={this.handleChange1} style={{borderRadius:'10px'}}>{list}</select></td>
		<td style={{backgroundColor:"transparent"}}><input type='number' className="group-form" onChange={this.valueChange1} style={{borderRadius:'10px',width:'90%',textAlign:'center'}} /></td>
		</tr>
		<tr>
		<td style={{backgroundColor:"transparent"}}><select  class="form-control " onChange={this.handleChange2} style={{borderRadius:'10px'}}>{list}</select></td>
		<td style={{backgroundColor:"transparent"}}><input type='number' className="group-form" onChange={this.valueChange2} style={{borderRadius:'10px',width:'90%',textAlign:'center'}} /></td>
		</tr>
		<tr>
		<td style={{backgroundColor:"transparent"}}><select  class="form-control " onChange={this.handleChange3} style={{borderRadius:'10px'}}>{list}</select></td>
		<td style={{backgroundColor:"transparent"}}><input type='number' className="group-form" onChange={this.valueChange3} style={{borderRadius:'10px',width:'90%',textAlign:'center'}} /></td>
		</tr>
		<tr>
		<td style={{backgroundColor:"transparent"}}><select  class="form-control " onChange={this.handleChange4} style={{borderRadius:'10px'}}>{list}</select></td>
		<td style={{backgroundColor:"transparent"}}><input type='number' className="group-form" onChange={this.valueChange4} style={{borderRadius:'10px',width:'90%',textAlign:'center'}} /></td>
		</tr>
		<tr>
		<td style={{backgroundColor:"transparent"}}><select  class="form-control" onChange={this.handleChange5} style={{borderRadius:'10px'}}>{list}</select></td>
		<td style={{backgroundColor:"transparent"}}><input type='number' className="group-form" onChange={this.valueChange5} style={{borderRadius:'10px',width:'90%',textAlign:'center'}} /></td>
		</tr>
		<tr>
		<td style={{backgroundColor:"transparent"}}><select  class="form-control" onChange={this.handleChange6} style={{borderRadius:'10px'}}>{list}</select></td>
		<td style={{backgroundColor:"transparent"}}><input type='number' className="group-form" onChange={this.valueChange6} style={{borderRadius:'10px',width:'90%',textAlign:'center'}} /></td>
		</tr>
		<tr><td colSpan="2" style={{backgroundColor:"transparent",textAlign:"left"}}> <input type="submit"  value="Next" class="btn btn-primary btn-md text-white" /></td></tr>

	</tbody>
	</table>

        </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>  



       
      </div>
    )
  }
}
