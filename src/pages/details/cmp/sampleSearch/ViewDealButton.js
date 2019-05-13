import React from "react";
import PropTypes from "prop-types";
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

    return sampleSearch.provider ? (
      <a
        className="button button-primary button-xs button-no-shadow white-text"
        href={urlBuilder.buildUrl(sampleSearch.provider, sampleSearch)}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Deal
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
            className="button button-default button-no-shadow"
            href="#"
            onClick={this.toggle}
            id={"Popover-1"}
          >
            View Deal
          </span>
        </Button>
        <UncontrolledPopover
          trigger="focus"
          placement="top"
          target={`PopoverFocus-${sampleSearch.id}`}
        >
          <PopoverHeader>
            <Button
              color="link"
              style={{ color: "#ad146a", fontWeight: "bold" }}
            >
              Providers
            </Button>
          </PopoverHeader>
          <PopoverBody>
            <table width="300" cellSpacing="20" cellPadding="10">
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
              style={{ color: "#ad146a" }}
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
