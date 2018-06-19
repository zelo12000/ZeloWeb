import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ZeloWebsite from './components/ZeloWebsite'

class App extends Component {


  render() {

    return (
      <React.Fragment>
        <CssBaseline />
          <ZeloWebsite />
      </React.Fragment>
    );
  }
}

export default App;
