import React from 'react'
import {  Link } from 'react-router-dom'
import axios from 'axios';
import AOS from 'aos'

class Fac_desk extends React.Component {

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
    setTimeout(()=>{axios.get(`https://xaviers-analytic-system.herokuapp.com/fac_desk`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons)
      })},5000);
  }

  render() {
    return (
      <div>

<div class="site-wrap">
   
   
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


          <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" ><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

          </div>

        </div>
      
    </header>

<div class="site-blocks-cover  overlay" style={{backgroundImage:"url(./images/teachers_desk.jpg)"}} data-aos="fade" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
		{this.state.persons.map((i)=>{
            return(
            <h1>{i.name}</h1>
            )
          })}
          <div class="col-md-12"  >
                        
            <div class="row justify-content-center mb-4">
		<section class="site-section">
      
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <div  class="media-1" data-aos="fade-right" data-aos-delay="400">
              <img src="images/subject_liking.jpg" alt="Image" class="img-fluid" />
              <div class="media-1-content">
                <h2>Subject Liking</h2>
                <span class="category">Per Subject</span>
		{this.state.persons.map((i)=>{

			if(i.science===1 && i.arts===1)
				return(
				<a>
				<Link to="/sub_liking" ><h2 style={{color:"Green"}}>Science</h2></Link>
				<Link to="/sub_liking_arts" ><h2 style={{color:"Red"}}>Arts</h2></Link>
				</a>
				)
			if(i.science===1)
				return(
				<Link to="/sub_liking" ><h2 style={{color:"Green"}}>Science</h2></Link>
				)
			
			if(i.arts===1)
				return(
				<Link to="/sub_liking_arts" ><h2 style={{color:"Red"}}>Arts</h2></Link>	
				)
			
			

			})}

		
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="media-1" data-aos="fade-up" data-aos-delay="400">
              <img src="images/teachers_liking.jpg" alt="Image" class="img-fluid" />
              <div class="media-1-content">
                <h2>Faculty Liking</h2>
                <span class="category">Per Subject</span>
		{this.state.persons.map((i)=>{

			if(i.science===1 && i.arts===1)
				return(
				<a>
				<Link to="/fac_liking" ><h2 style={{color:"Green"}}>Science</h2></Link>
				<Link to="/fac_liking_arts" ><h2 style={{color:"Red"}}>Arts</h2></Link>
				</a>
				)
			if(i.science===1)
				return(
				<Link to="/fac_liking" ><h2 style={{color:"Green"}}>Science</h2></Link>
				)
			
			if(i.arts===1)
				return(
				<Link to="/fac_liking_arts" ><h2 style={{color:"Red"}}>Arts</h2></Link>	
				)
			
			

			})}
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div to='/next_month' class="media-1" data-aos="fade-left" data-aos-delay="400">
              <img src="images/attendance.jpg" alt="Image" class="img-fluid" />
              <div class="media-1-content">
                <h2>Attendance prediction</h2>
                <span class="category">Per faculty</span>
		{this.state.persons.map((i)=>{
		if(i.science===1 && i.arts===1)
				return(
				<a>
				<Link to="/next_month" ><h2 style={{color:"Green"}}>Science</h2></Link>
				<Link to="/next_month_arts" ><h2 style={{color:"Red"}}>Arts</h2></Link>
				</a>
				)
			if(i.science===1)
				return(
				<Link to="/next_month" ><h2 style={{color:"Green"}}>Science</h2></Link>
				)
			
			if(i.arts===1)
				return(
				<Link to="/next_month_arts" ><h2 style={{color:"Red"}}>Arts</h2></Link>	
				)
			
			

			})}
		
		
              </div>
            </div>
          </div>
</div></div>
</section>
</div></div></div></div></div>



</div>







         

         
    
        
        </div>
    )
  }
}
export default Fac_desk

/*

*/
