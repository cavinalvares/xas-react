import React from 'react'
import axios from 'axios';
import {  Link } from 'react-router-dom'
import AOS from 'aos'

class Stud_demo extends React.Component {
	constructor(props,context)
	{
		super(props, context);
		AOS.init();
		
	}

	componentWllReceiveProps(){
		AOS.refresh();
	}  
    
  state = {name:'',message:'',pass:''}
  
  handleChange = (name) => {
      this.setState({name:name.target.value});
      }

  handlePassword = (name) => {
      this.setState({pass:name.target.value});
      }
  
  
      handleSubmit = event => {
         event.preventDefault();
      
          const roll = {
            name: this.state.name,
	    pass: this.state.pass
           
          };
	
            console.log(roll)
        
          axios.post(`https://xaviers-analytic-system.herokuapp.com/login`, { roll })
	.then((res)=>{
		const data = res.data
		console.log(data)
		data.map((i)=>{
			console.log(i.access)
			if(i.access==="true"){
			if(i.pass==="true")
			
			window.location="https://xaviers-analytic-system.herokuapp.com/stud_desk"
			else
			this.setState({message:"Incorrect Password"});
			}
			else
			this.setState({message:"The Student does not exist"});
			})			
		})
             }
  


  render() {
    return (
      <div>
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

  

    
	<div class="site-blocks-cover inner-page-cover overlay" style={{backgroundImage:"url(./images/students.jpg)"}} data-aos="fade" data-stellar-background-ratio="0.5">
<div class="container">
        <div class="row align-items-center justify-content-center text-center">

          <div class="col-md-12" data-aos="fade-up" data-aos-delay="400">
                        
            <div class="row justify-content-center mb-4">
              <div class="col-md-8 text-center">
                
                <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-5">
		
            
		
            <form onSubmit={this.handleSubmit}  align="left">
             <h2 class="h4 text-white mb-5">Login </h2>
		
		<div class="row form-group">
             <div class="col-md-6  mb-md-0" style={{backgroundColor:"transparent",textAlign:"left"}}>
                
                  <label class="text-white" for="fname1" >Roll No:</label>
                  
               
                
                  <input type='text'  style={{backgroundColor:"transparent"}} value={this.state.name} onChange={this.handleChange} class=" form-control text-white" id="fname1" />
               </div>
              
		</div>
		 <div class="row form-group">
		<div class="col-md-6  mb-md-0" style={{backgroundColor:"transparent",textAlign:"left"}}>
                
                  <label class="text-white" for="fname2">Password:</label>
                  
                
                
                  <input type='password' style={{backgroundColor:"transparent"}} class=" form-control text-white" onChange={this.handlePassword} id="fname2" />
                </div>
              </div>
		<div class=" form-group">
		<div style={{backgroundColor:"transparent"}} ><input type="submit"  style={{maxWidth:"40%",fontSize:"80%"}}value="Go"  class="  btn btn-primary  btn-md text-white" /></div></div>
		<div class=" form-group">
		<div style={{backgroundColor:"transparent"}} ><label style={{color:"red"}} ><h2>{this.state.message}</h2></label></div></div>
		
		
             

             

              


  		
            </form>
          </div>
	</div>
	</div>
	</div>
              </div>
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
export default Stud_demo

//
