import React from "react";
import PropTypes from "prop-types"; 
 import ProviderLink from './ProviderLink'       

class SampleSearch extends React.Component {
  render() { 
    var providerNames = ['Google Flights','Sky Scanner', 'Momondo', 'Kayak'];
    var providers = [];

    for(var i = 0; i < providerNames.length; i++){
      providers.push(<ProviderLink key={i} provider={providerNames[i]}/>)
    }


    return ( 
      <li className="list-item">
      <div className="list-item-inner">
        <div className="list-item-main">
          <div className="list-item-top"> 
            <div className="list-item-content sample-search-justify-left">
              <div className="list-item-content-left">
                <div className="text-bold text-base">Mar 22</div>
                <span className="small d-block">JFK</span>
              </div>
              <div className="list-item-content-line-wrapper small">
                <div className="list-item-content-line-top">
                  12 nights
                </div>
                <div className="list-item-content-line" /> 
              </div>
              <div className="list-item-content-right">
                <div className="text-bold text-base">April 4</div>
                <span className="small d-block">LHR</span>
              </div>
            </div>
          </div>
          <hr className="divider divider-wide" />
          <div className="list-item-bottom"> 
            <div className="list-item-content sample-search-justify-left"> 
               {providers}
            </div>
          </div>
        </div>
        <div className="list-item-footer">
         
          <h5 className="text-bold list-item-price"><span className={'icon fa fa-dollar black-bold-text'}></span>{'1,323'}</h5>
          <a
            className="button button-primary button-xs button-no-shadow"
            href="#"
          >
            View Deal
          </a>
          <br/>
          <span className="small">Sky Scanner</span>
        </div>
      </div> 
    </li>
    );
  }
}

SampleSearch.propTypes = {
  imgName: PropTypes.string 
};


export default SampleSearch;
