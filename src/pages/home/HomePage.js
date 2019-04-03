import React from 'react';

import '../../styles/tpl/style.css';
import '../../styles/tpl/bootstrap.css';
import './homeStyles.scss';
//<div className="page text-center">
const HomePage  = () => {
  return (  
    <div className="page text-center">

<header className="page-header" >
<div className="rd-navbar-wrap">
          <nav className="rd-navbar rd-navbar-minimal" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="1px" data-xl-stick-up-offset="60px" data-xxl-stick-up-offset="60px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
            <div className="rd-navbar-inner">
      
              <div className="rd-navbar-panel"   >
             
                <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
            
                <div className="rd-navbar-brand"><a className="d-inline-block brand-name" href="index.html">
              
                </a></div>
              </div>
              <div className="rd-navbar-nav-wrap">
              <img
                  src={require("./images/logo-white.png")}
                  className="img-responsive center-block thumbnail-image"
                  style={{ float: "left" }}
                  width="166"
                  height="55"
                  alt=""
                />
           
                <ul className="rd-navbar-nav">
                  <li><a href="./">Home</a></li>
                  <li><a href="#">About</a>
              
                    <ul className="rd-navbar-dropdown">
                      <li><a href="overview.html">Overview</a></li>
                      <li><a href="testimonials.html">Testimonials</a></li>
                      <li><a href="faq.html">FAQ</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Blog</a>
              
                    <ul className="rd-navbar-dropdown">
                      <li><a href="blog-classic.html">Classic blog</a></li>
                      <li><a href="blog-grid.html">Grid blog</a></li>
                      <li><a href="blog-masonry.html">Masonry blog</a></li>
                      <li><a href="blog-modern.html">Modern blog</a></li>
                      <li><a href="blog-modern-2.html">Modern blog v.2</a></li>
                      <li><a href="blog-single-post.html">Blog single post</a></li>
                    </ul>
                  </li>
                  <li className="active"><a href="#">Pages</a>
                  
                    <ul className="rd-navbar-megamenu">
                      <li>
                        <h5>Home</h5>
                        <ul>
                          <li><a href="index.html">Home variant 1</a></li>
                          <li><a href="index-2.html">Home variant 2</a></li>
                          <li><a href="index-3.html">Home variant 3</a></li>
                        </ul>
                        <h5>Gallery</h5>
                        <ul>
                          <li><a href="gallery-cobbles.html">Cobbles gallery</a></li>
                          <li><a href="gallery-grid.html">Grid gallery</a></li>
                          <li><a href="gallery-gallery-full.html">Grid gallery fullwidth</a></li>
                          <li><a href="gallery-masonry.html">Masonry gallery</a></li>
                        </ul>
                      </li>
                      <li>
                        <h5>Extras</h5>
                        <ul>
                          <li><a href="404.html">404</a></li>
                          <li><a href="503.html">503</a></li>
                          <li><a href="maintenance.html">Maintenance</a></li>
                          <li><a href="soon.html">Coming Soon</a></li>
                          <li><a href="login.html">Login/Register</a></li>
                          <li><a href="sitemap.html">Site Map</a></li>
                          <li><a href="tickets.html">Tickets list</a></li>
                        </ul>
                      </li>
                      <li>
                        <h5>Elements</h5>
                        <ul>
                          <li><a href="grid.html">Grid</a></li>
                          <li><a href="tables.html">Tables</a></li>
                          <li><a href="bars.html">Progress bars</a></li>
                          <li><a href="tabs.html">Tabs & Accordions</a></li>
                          <li><a href="forms.html">Forms</a></li>
                          <li><a href="buttons.html">Buttons</a></li>
                          <li><a href="typography.html">Typography</a></li>
                        </ul>
                      </li>
                      <li>
                        <h5>Layouts</h5>
                        <ul>
                          <li><a href="header-default.html">Header default</a></li>
                          <li><a href="header-minimal.html">Header minimal</a></li>
                          <li><a href="header-wide.html">Header wide</a></li>
                          <li><a href="footer-default.html">Footer default</a></li>
                          <li><a href="footer-corp.html">Footer corporate</a></li>
                          <li><a href="footer-widget.html">Footer widget</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="contacts.html">Contacts</a></li>
                </ul>
    
                <div className="rd-navbar-search"><a className="rd-navbar-search-toggle" data-rd-navbar-toggle=".rd-navbar-search" href="#"><span className="fa-search"></span></a>
                  <form className="rd-search" action="search-results.html" data-search-live="rd-search-results-live" method="GET">
                    <div className="form-wrap">
                      <label className="form-label" htmlFor="rd-navbar-search-form-input">Search</label>
                      <input className="form-input rd-navbar-search-form-input" id="rd-navbar-search-form-input" type="text" name="s" autoComplete="off"/>
                    </div>
                    <button className="button fa-search"></button>
                    <div className="rd-search-results-live" id="rd-search-results-live"></div>
                  </form>
                </div>
              </div>
              <div className="rd-navbar-contact-info-wrapper">
                <div className="rd-navbar-collapse-toggle" data-rd-navbar-toggle=".rd-navbar-contact-info"><span></span></div>
                <div className="rd-navbar-contact-info">
                  <div><span className="text-middle icon mdi mdi-headset text-info"></span><span className="text-middle text small text-italic text-gray-light">Free 24/7 Support</span></div>
                  <h5 className="text-ubold"><a className="text-middle" href="tel:#">1-800-1234-567</a></h5>
                </div>
              </div>
            </div>
          </nav>
        </div>
       
      </header>
      
    <section style={{height:150, margin: 50}}>
        <h4 className="text-primary-dr">Welcome to the community of Smart Travelers</h4>
        <h5>Where we share the best deals from your home city to +150 cities around the world.</h5>
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

export default HomePage