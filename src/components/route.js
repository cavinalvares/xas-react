import React from 'react';
import {  Link } from 'react-router-dom'
import axios from 'axios';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos'


export default class Car extends React.Component {
	
	
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
    axios.get(`https://xaviers-analytic-system.herokuapp.com/form`)
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

	        
<div  className="site-blocks-cover overlay" style={{backgroundImage:"url(./images/science_add.jpg)",height:"850px"}}  data-aos="fade" data-stellar-background-ratio="0.5" >
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">

          <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
                        
            <div className="row justify-content-center mb-4">
              <div className="col-md-8 text-center">
                
                 <table align="center" border="1" >
		<tbody>
	   <tr align="center"><th width="800"><h2>Combination</h2></th><th><h2>recommended</h2></th></tr>
          {this.state.persons.map((c)=>{
            return(
            <tr key = {c.id} ><td width="800" style={{textAlign:"center"}} className="text-black"><h5>{c.name}</h5></td>
			      <td width="800" style={{textAlign:"center"}} className="text-black"><h5>{c.r}</h5></td></tr>
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
