import React from 'react';

export default class EideasyWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.widgetHolderRef = React.createRef();
  }

  componentDidMount() {
    this.renderWidget();
  }

  componentDidUpdate(prevProps) {
    // Re-render the widget only if the props that are relevant to the widget have changed.
    if (prevProps.docId !== this.props.docId || prevProps.clientId !== this.props.clientId) {
      this.renderWidget();
    }
  }

  renderWidget() {
    const _self = this;
    const eidEasyWidget = document.createElement('eideasy-widget');

    const settings = {
      countryCode: 'EE', // ISO 3166  two letter country code
      language: 'en', // ISO 639-1 two letter language code,
      sandbox: true,
      clientId: this.props.clientId,
      docId: this.props.docId,
      enabledMethods: {
        signature: 'all',
        // if you want to enable specific methods, then use
        // signature: ['ee-id-login', 'lv-id-login'],
      },
      selectedMethod: null,
      enabledCountries: 'all',
      onSuccess: function (data) {
        _self.props.onSuccess(data);
      },
      onFail: function (error) {
        _self.props.onFail(error);
      },
    }

    Object.keys(settings).forEach(key => {
      eidEasyWidget[key] = settings[key];
    });

    this.widgetHolderRef.current.innerHTML = '';
    this.widgetHolderRef.current.appendChild(eidEasyWidget);
  }

  render() {
    console.log('render() method');
    return (
      <div>
        <div ref={this.widgetHolderRef}></div>
      </div>
    );
  }
}
