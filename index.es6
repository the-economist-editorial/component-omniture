import React from 'react';
import assign from 'lodash.assign';

let windowHasLoaded = false;
export default class Omniture extends React.Component {
  /* eslint-disable id-match, id-short, id-length */
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
    if (windowHasLoaded) {
      this.startMonitoring();
    } else {
      window.addEventListener('load', this.startMonitoring);
      windowHasLoaded = true;
    }
  }

  componentDidUpdate() {
    this.startMonitoring();
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
    // For clientside rendering force to trigger the monitoring immediately.
    if (typeof window !== 'undefined') {
      windowHasLoaded = true;
      return null;
    }
    return (
      <script
        type="text/javascript"
        src="https://cdn.static-economist.com/sites/default/files/external/ec_omniture/3_5/ec_omniture_s_code.js"
      ></script>
    );
  }
}
