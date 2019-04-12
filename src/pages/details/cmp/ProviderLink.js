import React from "react";
import PropTypes from "prop-types";

class ProviderLink extends React.Component {
  render() {
    var {provider, isOpenAll} = this.props;

    var styles= {};

    if(isOpenAll){
      styles = { color: '#42d4ec', fontWeight: 'bold'}
    }

    return (
       <a className="provider-link" href="http://google.com" target="_blank" rel="noopener noreferrer">
         <div className="list-item-content-left provider-link" style={styles}> 
         <span className="small">  
            {`${provider} `} 
            <span className={'icon fa fa-dollar blue-text'} style={{fontWeight:'bold', marginRight:4, color:'green'}}>{'435 '}</span>   
            <span className="icon fa fa-external-link"></span>
         </span>
      </div>
      </a>
    );
  }
}

ProviderLink.propTypes = {
  provider: PropTypes.string,
  isOpenAll: PropTypes.bool
};

export default ProviderLink;
