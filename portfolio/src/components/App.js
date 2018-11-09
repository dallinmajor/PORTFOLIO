import React, { Component } from 'react'; 
import SideNav from '../containers/side_nav';
import DisplayPage from '../containers/display_page';
import '../style/style.css';
import '../style/positioners.css'


class App extends Component {
  render() {
    return (
      <div className='row h100'>
        <SideNav/>
        <DisplayPage/>
      </div>
      
    );
  }
}

export default App;
