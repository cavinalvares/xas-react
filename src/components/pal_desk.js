import React from 'react'
import {  Link } from 'react-router-dom'
import AOS from 'aos'
class Pal_desk extends React.Component {

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

<div class="  my-overlay" style={{backgroundImage:"url(./images/p_desk.jpeg)",backgroundSize:"100% 100%"}} data-aos="fade">
      <div class="container">
        <div class="row align-items-center text-white justify-content-center text-center">
		<h1>Principal</h1>
          <div class="col-md-12"  >
                        
            <div class="row justify-content-center mb-4">
		<section class="site-section">
      
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <div  class="media-1" data-aos="fade-right" data-aos-delay="500">
              <img src="images/subject_liking.jpg" alt="Image" class="img-fluid" />
              <div class="media-1-content">
                <h2>Subject Liking</h2>
                <span class="category">Per Subject</span>
		<Link to="/pal_sub" ><h2 style={{color:"Green"}}>Science</h2></Link><Link to="/pal_sub_arts" ><h2 style={{color:"Red"}}>Arts</h2></Link>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div  class="media-1" data-aos="fade-right" data-aos-delay="450">
              <img src="images/teachers_liking.jpg" alt="Image" class="img-fluid" />
              <div class="media-1-content">
                <h2>Faculty Liking</h2>
                <span class="category">Per Subject</span>
		<Link to="/pal_fac" ><h2 style={{color:"Green"}}>Science</h2></Link><Link to="/pal_fac_arts" ><h2 style={{color:"Red"}}>Arts</h2></Link>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="media-1" data-aos="fade-right" data-aos-delay="400">
              <img src="images/attendance.jpg" alt="Image" class="img-fluid" />
              <div class="media-1-content">
                <h2>Predicted Blacklist</h2>
                <span class="category">Per Student</span>
		<Link to="/pal_black" ><h2 style={{color:"Green"}}>Science</h2></Link><Link to="/pal_black_arts" ><h2 style={{color:"Red"}}>Arts</h2></Link>
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
export default Pal_desk
