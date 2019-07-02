import React from "react";
import PropTypes from "prop-types";
import * as Constants from "../../../../constants/Constants";
import {
  GoogleLink,
  SkyLink,
  MomondoLink,
  KayakLink,
  KiwiLink
} from "./providers/";
import * as urlBuilder from "./providers/urlBuilder";
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";

class ViewDealButton extends React.Component {
  render() {
    var { sampleSearch } = this.props;
    var width = 300;
    var cellSpacing = 20;
    var cellPadding = 10;
    var ratio = Constants.MOBILE ? 2 : 1;

    return sampleSearch.provider ? (
      <a
        className="button button-primary button-xs button-no-shadow white-text font-12"
        href={urlBuilder.buildUrl(sampleSearch.provider, sampleSearch)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {Constants.MOBILE ? "VIEW" : "VIEW DEAL"}
      </a>
    ) : (
      <div>
        <Button
          id={`PopoverFocus-${sampleSearch.id}`}
          type="button"
          color="link"
          style={{ padding: 0 }}
        >
          <span
            className="button button-default button-no-shadow font-12"
            href="#"
            onClick={this.toggle}
            id={"Popover-1"}
          >
            {Constants.MOBILE ? "VIEW" : "VIEW DEAL"}
          </span>
        </Button>
        <UncontrolledPopover
          trigger="focus"
          placement="top"
          target={`PopoverFocus-${sampleSearch.id}`}
        >
          <PopoverHeader>
            <Button color="link" className={"pink-text bold-text font-18"}>
              Providers
            </Button>
          </PopoverHeader>
          <PopoverBody>
            <table
              width={width * ratio}
              cellSpacing={cellSpacing * ratio}
              cellPadding={cellPadding * ratio}
            >
              <tbody>
                <tr>
                  <td width="50%">
                    <GoogleLink sampleSearch={sampleSearch} />
                  </td>
                  <td width="50%">
                    {sampleSearch.kiwiPrice ? (
                      <KiwiLink sampleSearch={sampleSearch} />
                    ) : (
                      <KayakLink sampleSearch={sampleSearch} />
                    )}
                  </td>
                </tr>
                <tr>
                  <td width="50%">
                    <SkyLink sampleSearch={sampleSearch} />
                  </td>
                  <td width="50%">
                    <MomondoLink sampleSearch={sampleSearch} />
                  </td>
                </tr>
              </tbody>
            </table>
          </PopoverBody>
          <PopoverHeader>
            <Button
              color="link"
              className={"pink-text bold-text font-18"}
              onClick={this.openAll}
            >
              {"Open All  "}
              <span className="icon fa fa-external-link" />
            </Button>
          </PopoverHeader>
        </UncontrolledPopover>
      </div>
    );
  }

  openAll = () => {
    var urls = urlBuilder.buildUrl("all", this.props.sampleSearch);
    urls.forEach(url => window.open(url));
  };
}

ViewDealButton.propTypes = {
  provider: PropTypes.string,
  sampleSearch: PropTypes.object
};

export default ViewDealButton;
