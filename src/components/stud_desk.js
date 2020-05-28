import React from 'react'
import {  Link } from 'react-router-dom'
import AOS from 'aos'

class Stud_desk extends React.Component {

	constructor(props,context)
	{
		super(props, context);
		AOS.init();
		
	}

	componentWllReceiveProps(){
		AOS.refresh();
	}   

  render() {
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

<div class="  my-overlay" style={{backgroundImage:"url(./images/students_desk.jpg)",backgroundSize:"100% 100%"}} data-aos="fade">
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
		
          <div class="col-md-12" data-aos="fade-down" data-aos-delay="400">
                        
            <div class="row justify-content-center mb-4">
		<section class="site-section">
      
      <div class="container">
        <div class="row">
          
          <div class="col-md-6 col-lg-4 mb-4">
            <Link to='/att' class="media-1">
              <img src="images/attendance.jpg" alt="Image" class="img-fluid" />
              <div class="media-1-content">
                <h2>Attendance</h2>
                <span class="category">Black list prediction</span>
              </div>
            </Link>
          </div>
</div></div>
</section>
</div></div></div></div></div>



</div>








        
        
    )
  }
}
export default Stud_desk
