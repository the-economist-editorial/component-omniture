import React from 'react';
import assign from 'lodash.assign';

export default class Omniture extends React.Component {

  get defaultProps() {
    return {
      visitorNamespace: 'economist',
      trackingServer: 'stats.economist.com',
      trackingServerSecure: 'sstats.economist.com',
      dc: '122',
      linkTrackVars: [
        'pageName',
        'channel',
        'events',
        'prop1',
        'prop3',
        'prop4',
        'prop5',
        'prop11',
        'prop13',
        'prop14',
        'prop31',
        'prop34',
        'prop40',
        'prop41',
        'prop42',
        'prop46',
        'contextData.subsection',
      ].join(''),
      pageName: '',
      pageType: '',
      server: '',
      channel: '',
      contextData: {
        subsection: '',
      },
      prop1: '',
      prop2: '',
      prop3: 'web',
      prop4: '',
      prop5: '',
      prop11: '',
      prop13: '',
      prop14: '',
      prop31: '',
      prop34: '',
      prop40: '',
      prop41: '',
      prop42: '',
      prop46: '',
      linkTrackEvents: '',
      events: '',
    };
  }

  constructor(props) {
    super(props);
    this.startMonitoring = this.startMonitoring.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.startMonitoring);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.startMonitoring);
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
        src="https://cdn.static-economist.com/sites/default/files/external/ec_omniture/3_2_1/ec_omniture_s_code.min.js"
      ></script>
    );
  }
}
