import React from 'react';

export default class Omniture extends React.Component {

  static defaultProps = {
    visitorNamespace: "economist",
    trackingServer: "stats.economist.com",
    trackingServerSecure: "sstats.economist.com",
    dc: "122",
    linkTrackVars: "pageName,channel,events,prop1,prop3,prop4,prop5,prop11,prop13,prop14,prop31,prop34,prop40,prop41,prop42,prop46,contextData.subsection",
    pageName:  "",
    pageType:  "",
    server:  "",
    channel:  "",
    contextData: {
      subsection:  ""
    },
    prop1:  "",
    prop2:  "",
    prop3:  "web",
    prop4:  "",
    prop5:  "",
    prop11:  "",
    prop13:  "",
    prop14:  "",
    prop31:  "",
    prop34:  "",
    prop40:  "",
    prop41:  "",
    prop42 :  "",
    prop46: "",
    linkTrackEvents: "",
    events: ""
  }

  componentDidMount(){
    window.s = s_gi((process.env.NODE_ENV === "production") ? 'economistcomprod' :  'economistcomdev');
    // Add here s variables for the page
    window.s = Object.assign(s, this.props);
    var s_code = s.t();
    s_code ? document.write(s_code) : null;
  }

  render() {
    return (
      <script type="text/javascript" src="https://cdn.static-economist.com/sites/default/files/external/ec_omniture/3_2/ec_omniture_s_code.js"></script>
    );
  }
}