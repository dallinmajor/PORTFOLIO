import React, { Component } from 'react';
import SideNav from '../containers/side_nav';
import DisplayPage from '../containers/display_page';
import '../style/style.css';
import '../style/positioners.css'


class App extends Component {
  render() {
    return (
      <div className='row h100'>
        <div className='h100 col-md-3 col-sm-12'>
          <SideNav />
        </div>
        <div className='col-md-9 col-sm-12 h100'>
          <DisplayPage />
        </div>
      </div>

    );
  }
}

export default App;
