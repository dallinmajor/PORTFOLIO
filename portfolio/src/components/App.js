import React, { Component } from 'react'; 
import SideNav from '../containers/side_nav';
import DisplayPage from '../containers/page';

class App extends Component {
  render() {
    return (
      <div className='row'>
        <SideNav/>
        <DisplayPage/>
      </div>
      
    );
  }
}

export default App;
