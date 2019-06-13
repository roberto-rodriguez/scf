import React from "react";
import PropTypes from "prop-types";
import SampleSearch from "./SampleSearch";

class SampleSearchSection extends React.Component {
  providers = {
    google: { name: "Google Flights", image: "google.png" },
    sky: { name: "Sky Scanner", image: "skyscanner.jpg" },
    momondo: { name: "Momondo", image: "momondo.png" },
    kayak: { name: "Kayak" },
    kiwi: { name: "Kiwi.com", image: "kiwi.png" }
  };

  render() {
    var { originCode, cityCode, sampleSearchList, sortBy } = this.props;

    var sortedList = [...sampleSearchList].sort((a, b) => {
      if (a[sortBy] == b[sortBy]) {
        if (a.provider) {
          return -1;
        } else {
          return 1;
        }
      } else {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      }
    });

    var assignedProvider = false;

    return (
      <ul className="list-tickets">
        {sortedList &&
          sortedList.map((sampleSearch, i) => {
            var { provider } = sampleSearch;

            if (!provider && !assignedProvider) {
              provider = "google";
              assignedProvider = true;
            }

            return (
              <SampleSearch
                sampleSearch={Object.assign(
                  {
                    originCode,
                    cityCode,
                    provider
                  },
                  sampleSearch
                )}
                id={i}
                key={i}
              />
            );
          })}
      </ul>
    );
  }
}

SampleSearchSection.propTypes = {
  sampleSearchCityId: PropTypes.string,
  sortBy: PropTypes.string,
  originCode: PropTypes.string,
  cityCode: PropTypes.string,
  postId: PropTypes.any,
  sampleSearchList: PropTypes.any
};

export default SampleSearchSection;
