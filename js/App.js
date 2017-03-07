import React, { Component } from 'react';
import { WebView } from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.webview = null;
    this.injectJavaScript = this.injectJavaScript.bind(this);
  }
  injectJavaScript() {
    const script = "document.body.style.background = 'red';";
    if (this.webview) {
      this.webview.injectJavaScript(script);
    }
  }
  render() {
    return (
      <WebView
        ref={c => { this.webview = c; }}
        source={{ uri: 'https://www.google.com' }}
        style={{ marginTop: 20 }}
        onLoad={this.injectJavaScript}
        scalesPageToFit
      />
    );
  }
}

export default App;
