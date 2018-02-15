import React, { Component } from 'react';
import BarChart from './barchart.jsx';
class App extends Component {
   render() {
   return (
      <div className='App'>
      <div className='App-header'>
      <h2>Analysis of Algorithms</h2>
      </div>
      <div>
      <BarChart data={[5,10,1,3,15,16,12,12,12,23,44]} size={[500,500]} />
      </div>
      </div>
   )
   }
}
export default App
