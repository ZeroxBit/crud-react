import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './header/container/HeaderContainer'
import ContainerTable from './table/container/ContainerTable';

class App extends Component {
  render() {
    return (
     <div className="container">
       <HeaderContainer />
       <ContainerTable />
     </div>
    );
  }
}

export default App;
