import React from 'react';
import assign from 'lodash.assign';

export default class Omniture extends React.Component {

  componentDidMount() {
    this.startMonitoring();
  }

  startMonitoring() {
    if (window.s_gi) {
      window.s = window.s_gi((process.env.NODE_ENV === 'production') ? 'economistcomprod' : 'economistcomdev');
      window.s = assign(window.s, this.props);
      const omnitureTrackingCode = window.s.t();
      if (omnitureTrackingCode) {
        document.write(omnitureTrackingCode);
      }
    }
  }

  render() {
    return (
      <script
        type="text/javascript"
        src="https://cdn.static-economist.com/sites/default/files/external/ec_omniture/3_2/ec_omniture_s_code.js"
      ></script>
    );
  }
}
