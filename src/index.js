import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Stud_demo from './components/stud_demo'
import Home from './components/home'
import Users from './components/user'
import About from './components/about'
import Post from './components/form1'
import Cars from './components/route'
import Stud_desk from './components/stud_desk'
import Att from './components/att'
import Stud from './components/stud'
import Fac from './components/fac'
import Fac_desk from './components/fac_desk'
import Pal_desk from './components/pal_desk'
import Pal_black from './components/pal_black'
import Sub_liking from './components/sub_liking'
import Fac_liking from './components/fac_liking'
import Pal_sub from './components/pal_sub'
import Pal_fac from './components/pal_fac'
import Next_month from './components/next_month'
import Form_arts from './components/form_arts'
import Arts_pre from './components/arts_pre'
import Pal_black_arts from './components/pal_black_arts'
import Sub_liking_arts from './components/sub_liking_arts'
import Fac_liking_arts from './components/fac_liking_arts'
import Next_month_arts from './components/next_month_arts'
import Pal_sub_arts from './components/pal_sub_arts'
import Pal_fac_arts from './components/pal_fac_arts'

import { Route, BrowserRouter as Router } from 'react-router-dom'



  

const routing = (<Router>
    <div>
   
    <Route exact path="/" component={Home} />
 	  <Route path="/stud_demo" component={Stud_demo} />
          <Route path="/users" component={Users} />
          <Route path="/about" component={About} />
          <Route path="/form" component={Post} />
          <Route path="/cars" component={Cars} />
          <Route path="/stud_desk" component={Stud_desk} />
          <Route path="/att" component={Att} />
          <Route path="/stud" component={Stud} />
          <Route path="/fac" component={Fac} />
          <Route path="/pal_desk" component={Pal_desk} />
          <Route path="/pal_black" component={Pal_black} />
          <Route path="/fac_desk" component={Fac_desk} />
          <Route path="/sub_liking" component={Sub_liking} />
	  <Route path="/fac_liking" component={Fac_liking} />
          <Route path="/pal_sub" component={Pal_sub} />
 	  <Route path="/pal_fac" component={Pal_fac} />
	  <Route path="/next_month" component={Next_month} />
	  <Route path="/form_arts" component={Form_arts} />
	  <Route path="/arts_pre" component={Arts_pre} />
	  <Route path="/pal_black_arts" component={Pal_black_arts} />
	  <Route path="/sub_liking_arts" component={Sub_liking_arts} />
	  <Route path="/fac_liking_arts" component={Fac_liking_arts} />
	  <Route path="/next_month_arts" component={Next_month_arts} />
	  <Route path="/pal_sub_arts" component={Pal_sub_arts} />
 	  <Route path="/pal_fac_arts" component={Pal_fac_arts} />
    </div>
    
  </Router>)


ReactDOM.render(routing, document.getElementById('root'));
