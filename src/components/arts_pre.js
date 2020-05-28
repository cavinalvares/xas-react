import React from 'react';
import '../../node_modules/aos/dist/aos.css';
import {  Link } from 'react-router-dom'
import AOS from 'aos'
import axios from 'axios';

export default class Arts_pre extends React.Component {

	constructor(props,context)
	{
		super(props, context);
		AOS.init();
	}

	componentWllReceiveProps(){
		AOS.refresh();
	}  

  state = {
    persons: []
  }

  componentDidMount() {
	
    axios.get(`https://xaviers-analytic-system.herokuapp.com/form_arts`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons)
      })
  }

  render() {
    return (
<div>
	<header className="site-navbar py-4 bg-white" role="banner">

      <div className="container">
        <div className="row align-items-center">
          
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

<div  class="  my-overlay" style={{backgroundImage:"url(./images/arts_add.jpg)",backgroundSize:"100% 100%"}} data-aos="fade">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">

          <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
                        
            <div className="row justify-content-center mb-4">
              <div className="col-md-8 text-center">
                
                 <table align="center" border="1" className="text-black">
		<tbody>
		<tr align="center"><th width="800"><h2>Combination</h2></th><th><h2>recommended</h2></th></tr>
		<tr><th colSpan="2"><h2>Group-1</h2></th></tr>
	
          
            
	{this.state.persons.map((c)=>{
		if(c.id===5 ||c.id===6 ||c.id===8 || c.id===10)
            return(
	    <tr key = {c.id} >
            <td  style={{textAlign:"center"}}> <h5> {c.name}</h5></td> 
	    <td  style={{textAlign:"center"}}><h5>{c.r}</h5></td>
	    </tr>
	)
          })}

	<tr><th colSpan="2"><h2>Group-2</h2></th></tr>

	 {this.state.persons.map((c)=>{
		if(c.id===2 ||c.id===7 ||c.id===11)
            return(
	    <tr key = {c.id} >
            <td style={{textAlign:"center"}}> <h5> {c.name}</h5></td> 
	    <td style={{textAlign:"center"}}><h5>{c.r}</h5></td>
	    </tr>
	 )
          })}
	
	<tr><th colSpan="2"><h2>Group-3</h2></th></tr>

	 {this.state.persons.map((c)=>{
		if(c.id===9 ||c.id===3 ||c.id===1 ||c.id===4)
            return(
		<tr key = {c.id} >
            <td style={{textAlign:"center"}}> <h5> {c.name}</h5></td> 
	    <td style={{textAlign:"center"}}><h5>{c.r}</h5></td>
	    </tr>
		 )
          })}

        </tbody>
	</table>
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

