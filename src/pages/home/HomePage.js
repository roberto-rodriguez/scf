import React from 'react';
import '../../styles/tpl/style.css';
import '../../styles/tpl/bootstrap.css';

const HomePage = () => {
  return (
    <div > 
    <div className="page text-center">

    <header className="page-header">
  
      <div className="rd-navbar-wrap bg-gray-dark">
        <nav className="rd-navbar" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="1px" data-xl-stick-up-offset="1px" data-xxl-stick-up-offset="1px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
          <div className="rd-navbar-inner">
       
            <div className="rd-navbar-panel">
          
              <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
            
               <div className="rd-navbar-brand">
                  <a className="d-inline-block brand-name" href="index.html">
                    <img  className="img-responsive center-block" src={require('./images/logo-white.png')}  width="166" height="55" alt=""/> 
                  </a>
                </div>
            </div>
            <div className="rd-navbar-nav-wrap">
      
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
                    <li><a href="blog-classNameic.html">classNameic blog</a></li>
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
          </div>
        </nav>
      </div>
    </header>
          <section className="bg-image-06">
            <div className="breadcrumb-wrapper">
              <div className="container context-dark section-30 section-xl-top-120">
                <h5>Enjoy The Best Photos From  Our Destinations</h5>
                <h1 className="text-ubold">grid gallery</h1>
                <ol className="breadcrumb">
                  <li><a href="./">Home</a></li>
                  <li><a href="#">Pages</a></li>
                  <li>Grid Gallery
                  </li>
                </ol>
              </div>
            </div>
          </section>
    <section className="section-80 section-lg-120">
      <div className="container container-wide isotope-wrap">
      
        <div className="isotope-filters isotope-filters-horizontal">
          <ul className="nav-custom">
            <li><a className="active" data-isotope-filter="*" data-isotope-group="gallery" href="#">All Offers</a></li>
            <li><a data-isotope-filter="Type 1" data-isotope-group="gallery" href="#">Europe</a></li>
            <li><a data-isotope-filter="Type 2" data-isotope-group="gallery" href="#">North America</a></li>
            <li><a data-isotope-filter="Type 3" data-isotope-group="gallery" href="#">Asia</a></li>
            <li><a data-isotope-filter="Type 4" data-isotope-group="gallery" href="#">Australia</a></li>
          </ul>
        </div> 
        <div className="isotope" data-isotope-layout="fitRows" data-isotope-group="gallery">
          <div className="row text-lg-left">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="*">
               <div className="thumbnail"><img className="img-responsive center-block thumbnail-image" src="images/gallery-01.jpg" width="420" height="280" alt=""/><a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 3">
               <div className="thumbnail"><img className="img-responsive center-block thumbnail-image" src="images/gallery-02.jpg" width="420" height="280" alt=""/><a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 3">
               <div className="thumbnail"><img className="img-responsive center-block thumbnail-image" src="images/gallery-03.jpg" width="420" height="280" alt=""/><a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 3">
                <div className="thumbnail"><img className="img-responsive center-block thumbnail-image" src="images/gallery-04.jpg" width="420" height="280" alt=""/><a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 2">
              <div className="thumbnail"><img className="img-responsive center-block thumbnail-image" src="images/gallery-05.jpg" width="420" height="280" alt=""/><a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 2">
              <div className="thumbnail"><img className="img-responsive center-block thumbnail-image" src="images/gallery-06.jpg" width="420" height="280" alt=""/><a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 1">
              <div className="thumbnail"><img className="img-responsive center-block thumbnail-image" src="images/gallery-07.jpg" width="420" height="280" alt=""/><a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 1">
              <div className="thumbnail"><img className="img-responsive center-block thumbnail-image" src="images/gallery-08.jpg" width="420" height="280" alt=""/><a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 1">
              <div className="thumbnail"><img className="img-responsive center-block thumbnail-image" src="images/gallery-09.jpg" width="420" height="280" alt=""/><a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 4">
              <div className="thumbnail"><img className="img-responsive center-block thumbnail-image" src="images/gallery-10.jpg" width="420" height="280" alt=""/><a className="caption" href="tickets.html">
                  <h4>London</h4>
                  <hr className="divider divider-white divider-md-left divider-40"/>
                  <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 4">
              <div className="thumbnail"><img className="img-responsive center-block thumbnail-image" src="images/gallery-11.jpg" width="420" height="280" alt=""/><a className="caption" href="tickets.html">
                    <h4>London</h4>
                    <hr className="divider divider-white divider-md-left divider-40"/>
                    <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
              </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 4">
                <div className="thumbnail"><img className="img-responsive center-block thumbnail-image" src="images/gallery-12.jpg" width="420" height="280" alt=""/><a className="caption" href="tickets.html">
                      <h4>London</h4>
                      <hr className="divider divider-white divider-md-left divider-40"/>
                      <p>When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!</p></a></div>
                </div>
            </div>
        </div>
      </div> 
    </section>
   
    <footer className="page-footer">
      <div className="container container-wide text-md-left">
        <div className="row row-50 section-60 section-lg-90">
          <div className="col-md-6 col-xl-3"><a className="d-inline-block" href="./"><img className="img-responsive center-block" src="images/logo-white.png" width="166" height="55" alt=""/></a>
            <p>SkyBooking is a travel search engine which instantly searches all available flight, bus and train prices on an exhaustive number of travel sites such as online travel agencies, major and low-cost airlines and tour-operators. We also compare hotel rooms and car rental deals. You can easily narrow down your search as much (or as little!) as you want. That means that if the trip you wouldd like is anywhere out there, you will find it right away.</p>
          </div>
          <div className="col-md-6 col-xl-3">
            <h5 className="text-bold">Latest Blog Posts</h5>
            <hr className="divider divider-50 divider-info divider-sm-left"/>
            <div className="unit flex-column flex-md-row">
              <div className="unit-left"><img className="img-responsive center-block" src="images/footer-01.jpg" width="100" height="10" alt=""/></div>
              <div className="unit-body"><span className="extra-small">Sep 8, 2019</span>
                <p className="text-bold"><a href="blog-single-post.html">How These 5 People Found The Path to Their Dream Trip</a></p>
              </div>
            </div>
            <div className="unit flex-column flex-md-row">
              <div className="unit-left"><img className="img-responsive center-block" src="images/footer-02.jpg" width="100" height="10" alt=""/></div>
              <div className="unit-body"><span className="extra-small">Sep 8, 2019</span>
                <p className="text-bold"><a href="blog-single-post.html">The Ultimate Packing List for Female Travelers: 10 Useful Tips</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="inset-xxl-left-50">
              <h5 className="text-bold">What People Say</h5>
              <hr className="divider divider-50 divider-info divider-sm-left"/>
            
              <div className="owl-carousel owl-dots-left owl-dots-white" data-dots="true" data-items="1" data-margin="30" data-mouse-drag="false">
                <blockquote className="quote quote-sm">
                  <p>
                    <q>“I must tell you how impressed I am by your customer service. I have contacted you twice now and each time I received a prompt reply plus the additional attention of a manager. I have never received this kind of response from any other airline tickets booking site.”</q>
                  </p>
                  <p>
                    <cite>Phillip Holland</cite>
                  </p>
                </blockquote>
                <blockquote className="quote quote-sm">
                  <p>
                    <q>“I found your web site very easy to use. The entire process was very quick, and the price of my ticket was very affordable.”</q>
                  </p>
                  <p>
                    <cite>Amber Barnett</cite>
                  </p>
                </blockquote>
                <blockquote className="quote quote-sm">
                  <p>
                    <q>“Thank you for making it so easy. I really love the way I can view the itinerary and put payment info on the same page!”</q>
                  </p>
                  <p>
                    <cite>Ralph Green</cite>
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="inset-xxl-left-50">
              <h5 className="text-bold">Contact Us</h5>
              <hr className="divider divider-50 divider-info divider-sm-left"/>
             
              <form className="rd-mailform rd-form text-md-left" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                <div className="form-wrap form-wrap-sm">
                  <label className="text-gray-light form-label" htmlFor="footer-name">Your name</label>
                  <input className="form-input form-input-dark" id="footer-name" type="text" name="name" data-constraints="@Required"/>
                </div>
                <div className="form-wrap form-wrap-sm">
                  <label className="text-gray-light form-label" htmlFor="footer-email">Your e-mail</label>
                  <input className="form-input form-input-dark" id="footer-email" type="email" name="email" data-constraints="@Email @Required"/>
                </div>
                <div className="form-wrap form-wrap-sm">
                  <label className="text-gray-light form-label" htmlFor="footer-message">Message</label>
                  <textarea className="form-input form-input-dark" id="footer-message" style="height: 90px;" name="message" data-constraints="@Required"></textarea>
                </div>
                <button className="button button-primary button-xs button-naira button-naira-up" type="submit"><span className="icon fa-envelope-o"></span><span>Send</span></button>
              </form>
            </div>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container container-wide page-footer-min small">
        <div className="row row-20 justify-content-end-xs-middle">
          <div className="col-md-6 text-md-left">
            <ul className="list-inline">
              <li><a className="icon fa-facebook" href="#"></a></li>
              <li><a className="icon fa-twitter" href="#"></a></li>
              <li><a className="icon fa-pinterest-p" href="#"></a></li>
              <li><a className="icon fa-vimeo" href="#"></a></li>
              <li><a className="icon fa-google-plus" href="#"></a></li>
              <li><a className="icon fa-rss" href="#"></a></li>
            </ul>
          </div>
          <div className="col-md-6 text-md-right">
            <p className="rights"><span>&copy;&nbsp;</span><span className="copyright-year"></span><span>&nbsp;</span><span>All Rights Reserved</span><span>.&nbsp;</span><a href="privacy-policy.html">Privacy Policy</a>. Design&nbsp;by&nbsp;<a href="https://zemez.io/">Zemez</a></p>
          </div>
        </div>
      </div>
    </footer>
  </div> 
  </div> 
  );
};

export default HomePage;
