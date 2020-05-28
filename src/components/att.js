import React from 'react';
import {  Link } from 'react-router-dom'
import axios from 'axios';

export default class Att extends React.Component {
  
  state = {
    persons: [],
    lp1:0,
    lt1:0
  }

  componentDidMount() {
    axios.get(`https://xaviers-analytic-system.herokuapp.com/black`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons)
      })
  }


  render() {
  
     let a =0,b=0;
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
          <div class="d-inline-block d-xl-none col-2  " style={{position: "relative", top: "3px",width:"20%" }}><a href="#" class="site-menu-toggle js-menu-toggle text-black "><span class="icon-menu h3"></span></a></div>          
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

	<div class="  my-overlay" style={{backgroundImage:"url(./images/teachers.jpg)",backgroundSize:"100% 100%"}} data-aos="fade">
        <div class="container">   
	 <table border="1">
              <tbody>
              <tr>
                <th>Subject</th><th>Lectures Present</th><th>Lectures Taken</th><th>Lectures absent</th>
                <th>Faculty</th>
              </tr>
                {this.state.persons.map((i)=>{
                  if(i.id !== 'a'){
                   
                    a += i.lp;
                    b += i.lt;
                   return(
                      <tr key={i.id}>
                          <td align='center'>{i.subname}</td><td align='center'>{i.lp}</td>
                          <td align='center'>{i.lt}</td><td align='center'>{i.la}</td>
                          <td align='center'>{i.f}</td>
                         </tr>
                      
                      )
                   }
                  
                   
                })}
                <tr>
                 
              <th>Total</th><th>{a}</th><th>{b}</th><th></th><th></th>
                  {console.log(this.state.lp1)}
                  </tr>
                </tbody>
                </table>

              <h4 className="text-black">Lectures present:{((a/b)*100).toFixed(2)}%</h4>                

                <h3 className="text-black">Attendance predicted in range:
                  {this.state.persons.map((i)=>{
                  if(i.id === 'a'){
			if(i.ack === 'excellent')
                   return(
                   <a key={i.id}>95% to 100%</a>      
                      )
			if(i.ack === 'great')
                   return(
                   <a key={i.id}>85% to 95%</a>      
                      )
			if(i.ack === 'good')
                   return(
                   <a key={i.id}>75% to 85%</a>      
                      )
			if(i.ack === 'blacklisted')
                   return(
                   <a key={i.id}>0% to 75%</a>      
                      )
			}                
                })}
                </h3>



               </div>
        </div>
          
            
            </div>
            
         
        
    
     
        )
  }
}







/*

19-8005	blacklisted
19-8015	blacklisted
19-8033	blacklisted
19-8036	blacklisted
*/
