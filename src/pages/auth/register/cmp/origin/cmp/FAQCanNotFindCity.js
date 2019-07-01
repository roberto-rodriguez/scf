import React from "react";
import { connect } from "react-redux";
import "../../../../authStyles.scss";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";
import * as addCityActions from "../../../../actions/AddCityActions";


class FAQCanNotFindCity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    cityName:"",
    isEmpty:false,
    message:"",
    resutCode:0
    };
  }
  addNewCity = () => {
    var { cityName } = this.state;
    var {addCity} = this.props;
      addCity(cityName,  (resutCode, resultMessage) => {
      if(resutCode==500){
         this.setState({ isEmpty: true,
                          resutCode:resutCode,
                          message:resultMessage });
       }else{
       if(resutCode==0){
         this.setState({ isEmpty: true,
                          resutCode:resutCode,
                          message:"The city was added successfully.",
                          cityName:"" });
       }
     }
      });
  };

  render() {
    var { showCanNotFindCity, onToggleCanNotFindCity} = this.props;
    var {cityName, isEmpty, message,resutCode,} = this.state;
    return (
      <div
        className="responsive-tabs responsive responsive-tabs-classic resp-easy-accordion float-right"
        data-type="accordion"
        style={{ display: "block" }}
      >
        <div className="resp-tabs-container text-md-left tabs-group-default">
          <div
            className="resp-accordion resp-tab-active"
            role="tab"
            aria-controls="tab_item-0"
            onClick={onToggleCanNotFindCity}
          >
            <span className="resp-arrow" />
            Can not find your city?
          </div>
          <div
            className="resp-tab-content resp-tab-content-active"
            aria-labelledby="tab_item-0"
            style={{ display: showCanNotFindCity ? "block" : "none" }}
          >
            <p>We add a new city every 2 weeks.</p>
            <p>
              To be fair to our community, we pick from the waiting list the
              city that has most votes. Add your city to the waiting list and we
              will notify you when is added.
            </p>
            <p>
              <b className="pink-text">TIP</b> You can increase the odds of your
              city being selected inviting your home town friends, is very
              likely they will also vote to add your city.
              <i className="fa fa-smile-o pink-text" />
            </p>

            <div className="form-wrap has-error">
              <label className="form-label-outside" htmlFor="subscribe-email">
                Enter city name here
              </label>

              <input
                onChange={evt => this.updateInputValue("cityName", evt)}
                className="form-input form-control-has-validation form-control-last-child float-left width80"
                id="cityName"
                value={cityName}
                type="text"
                name="cityName"
              />
              <button
                onClick={() => this.addNewCity()}
                className="button button-primary button-block button-sm  width20">
              Save
              </button>

            </div>
            {isEmpty && <Alert color={resutCode==0 ? "success": "danger"}>{message}</Alert>}

          </div>
        </div>
        <br />
      </div>
    );
  }


  updateInputValue = (field, evt) =>
    this.setState({ [field]: evt.target.value,
                    isEmpty:false});
}


FAQCanNotFindCity.propTypes = {
  cityName: PropTypes.object,
  addCity:PropTypes.func
};


export default connect(
  null,
  addCityActions
)(FAQCanNotFindCity);
