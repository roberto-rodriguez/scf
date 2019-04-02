import React from 'react';

import '../../styles/tpl/style.css';
import '../../styles/tpl/bootstrap.css';


const Home  = () => {
  return (  
    <div className="page text-center">


<header className="page-header">
  
  <div className="rd-navbar-wrap bg-gray-dark" style={{height:70}}>
    <img src={require('./images/logo-white.png')}  className="img-responsive center-block thumbnail-image"  width="166" height="55" alt=""/> 
  </div>
</header>
      
      
    <section style={{height:150, margin: 50}}>
        <h4 className="text-primary-dr">Welcome to the community of Smart Travelers</h4>
        <h5>Where we share the best deals we find to +150 cities around the world.</h5>
        <br/>
         <cite> - Updated Daily -</cite>
         <br/>
         <br/>
         <a className="button button-primary button-circle" href="#">Sign Up FREE</a>
         <br/>
         <br/>
         <h6>To filter and receive deals from your closest airports</h6>
    </section>

  
    <section className="section-80 section-lg-120">
      <div className="container container-wide isotope-wrap">
      
        <div className="isotope-filters isotope-filters-horizontal"> 
          <ul className="nav-custom">
            <li><a className="active" data-isotope-filter="*" data-isotope-group="gallery" href="#">All Deals to</a></li>
            <li><a data-isotope-filter="Type 1" data-isotope-group="gallery" href="#">Europe</a></li> 
            <li><a data-isotope-filter="Type 3" data-isotope-group="gallery" href="#">Asia</a></li>
            <li><a data-isotope-filter="Type 4" data-isotope-group="gallery" href="#">Oceania</a></li>
            <li><a data-isotope-filter="Type 2" data-isotope-group="gallery" href="#">Caribean</a></li>
            <li><a data-isotope-filter="Type 2" data-isotope-group="gallery" href="#">America </a></li>
            <li><a data-isotope-filter="Type 2" data-isotope-group="gallery" href="#">Africa </a></li> 
          </ul>
        </div> 
        <div className="isotope" data-isotope-layout="fitRows" data-isotope-group="gallery">
          <div className="row text-lg-left">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="*">
               <div className="thumbnail">
               <img src={require('./images/gallery-01.jpg')}  className="img-responsive center-block thumbnail-image"  width="420" height="280" alt=""/> 
                 <a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 3">
               <div className="thumbnail"> 
               <img src={require('./images/gallery-02.jpg')}  className="img-responsive center-block thumbnail-image"  width="420" height="280" alt=""/> 
               
               <div className="caption">
                    <h4 className="text-ubold">Venice</h4>
                    <p className="text-italic text-gray">Italy</p>
                    <p>Departure City:</p>
                    <ul className="list-marked list-marked-no-padding list-marked-flex text-base">
                      <li><a className="text-info-dr" href="tickets.html">Paris</a>
                        <div> <span>$98.00</span></div>
                      </li>
                      <li><a className="text-info-dr" href="tickets.html">Rome</a>
                        <div> <span>$134.00</span></div>
                      </li>
                      <li><a className="text-info-dr" href="tickets.html">Barcelona</a>
                        <div> <span>$119.00</span></div>
                      </li>
                      <li><a className="text-info-dr" href="tickets.html">Berlin</a>
                        <div> <span>$99.00</span></div>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
 


            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 3">
               <div className="thumbnail">
               <img src={require('./images/gallery-03.jpg')}  className="img-responsive center-block thumbnail-image"  width="420" height="280" alt=""/> 
               <a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 3">
                <div className="thumbnail">
                <img src={require('./images/gallery-04.jpg')}  className="img-responsive center-block thumbnail-image"  width="420" height="280" alt=""/> 
               <a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 2">
              <div className="thumbnail">
              <img src={require('./images/gallery-05.jpg')}  className="img-responsive center-block thumbnail-image"  width="420" height="280" alt=""/> 
               <a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 2">
              <div className="thumbnail">
              <img src={require('./images/gallery-06.jpg')}  className="img-responsive center-block thumbnail-image"  width="420" height="280" alt=""/> 
             <a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 1">
              <div className="thumbnail">
              <img src={require('./images/gallery-07.jpg')}  className="img-responsive center-block thumbnail-image"  width="420" height="280" alt=""/> 
              <a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 1">
              <div className="thumbnail">
              <img src={require('./images/gallery-08.jpg')}  className="img-responsive center-block thumbnail-image"  width="420" height="280" alt=""/> 
              <a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 1">
              <div className="thumbnail">
              <img src={require('./images/gallery-09.jpg')}  className="img-responsive center-block thumbnail-image"  width="420" height="280" alt=""/> 
              <a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 4">
              <div className="thumbnail">
              <img src={require('./images/gallery-10.jpg')}  className="img-responsive center-block thumbnail-image"  width="420" height="280" alt=""/> 
             <a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 4">
              <div className="thumbnail">
              <img src={require('./images/gallery-11.jpg')}  className="img-responsive center-block thumbnail-image"  width="420" height="280" alt=""/> 
              <a className="caption" href="tickets.html">
                    <h4>London</h4>
                    <hr className="divider divider-white divider-md-left divider-40"/>
                    <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
              </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 4">
                <div className="thumbnail">
                <img src={require('./images/gallery-12.jpg')}  className="img-responsive center-block thumbnail-image"  width="420" height="280" alt=""/> 
               <a className="caption" href="tickets.html">
                      <h4>London</h4>
                      <hr className="divider divider-white divider-md-left divider-40"/>
                      <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
                </div>
            </div>
        </div>
      </div> 
    </section>

    

  </div>  
  )
}

export default Home