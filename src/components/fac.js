import React from 'react'
import axios from 'axios';
import {  Link } from 'react-router-dom'
import AOS from 'aos'

class Fac extends React.Component {
	
	constructor(props,context)
	{
		super(props, context);
		AOS.init();
		
	}

	componentWllReceiveProps(){
		AOS.refresh();
	}     

    state = {
        name:"",
        route:'/fac_desk',
	message:'',
	pass:''
	
      }
  
  
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
	    pass:this.state.pass
           
          };
	
	
            console.log(this.state)
          axios.post(`https://xaviers-analytic-system.herokuapp.com/fac_desk`, { roll })
	.then((res)=>{
		const data = res.data
		console.log(data)
		data.map((i)=>{
			console.log(i.access)
			if(i.access==="true"){
			if(i.pass==="true"){
			if(i.name==='Principal')
			window.location="https://xaviers-analytics-system.herokuapp.com/pal_desk"
			else
			window.location="https://xaviers-analytics-system.herokuapp.com/fac_desk"
			}
			else
			this.setState({message:"Incorrect Password"});
			}
			else
			this.setState({message:"The Factulty does not exist"});
			})			
		})
             }
  
  render() {
    return (
	
	
 <div class="site-wrap">
   

	
	 
	<div>

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
          <div class="d-inline-block d-xl-none col-2  " style={{position: "relative", top: "3px",width:"20%" }}><a class="site-menu-toggle js-menu-toggle text-black "><span class="icon-menu h3"></span></a></div>          
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
  

    <div class="site-blocks-cover inner-page-cover overlay" style={{backgroundImage:"url(./images/teachers.jpg)",maxWidth:"100%"}} data-aos="fade" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
		
          <div class="col-md-12" data-aos="fade-down" data-aos-delay="400">
                        
            <div class="row justify-content-center mb-4">
		  <div class="col-md-8 text-center">
                
                <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-5">
		
              
    		<form onSubmit={this.handleSubmit}  className="form-horizontal">
		<table align="center">
		<tbody>
		<tr ><th style={{backgroundColor:"transparent"}}  colSpan="2"><h1>Login</h1></th></tr>
		<tr>
		<td style={{backgroundColor:"transparent",textAlign:"right"}}><label className="text-white" style={{fontSize:"150%"}}>Enter Number:</label></td>
		<td  style={{backgroundColor:"transparent"}}><input type='text' value={this.state.name}  className="border-secondary bg-transparent text-white enter" onChange={this.handleChange}/></td>
		</tr>
		<tr>
		<td style={{backgroundColor:"transparent",textAlign:"right"}}><label className="text-white" style={{fontSize:"150%"}}>Enter Password:</label></td>
		<td  style={{backgroundColor:"transparent"}}><input type='password' className="border-secondary bg-transparent text-white enter" onChange={this.handlePassword}/></td>
		</tr>
		<tr><td style={{backgroundColor:"transparent"}} colSpan="2"><input type="submit"  style={{width:"30%",paddingRight:"30px",paddingLeft:"30px",fontSize:"18px"}}value="Go"  class="btn btn-primary btn-md text-white" /></td></tr>
		<tr><td style={{backgroundColor:"transparent"}} colSpan="2"><label style={{color:"red"}} ><h2>{this.state.message}</h2></label></td></tr>
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
        </div>
      </div>
    </div>  


    
   

    
  </div>


    
        </div>





    )
  }
}
export default Fac
