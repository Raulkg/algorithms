import React  from 'react';
import BarChart from './barchart.jsx';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { List } from 'material-ui/List';
import Toolbar from 'material-ui/Toolbar';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

import Card, { CardActions, CardContent } from 'material-ui/Card';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};


class App extends React.Component {

  constructor(props) {
    super(props);
     this.handleChange = this.handleChange.bind(this);
    this.state = {
      slideIndex: 0,
    };
  }
   


  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };


   render() {
    
        const { classes } = this.props;
        const { value } = this.props;



   return (
 <MuiThemeProvider>
      <div className='App'>
        
      <AppBar title="String Search Algorithms" color="default" iconClassNameRight="muidocs-icon-navigation-expand-more"  showMenuIconButton={true}/>
    

<div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Boyre Moore" value={0} />
          <Tab label="Knuth Morris Pratt" value={1} />
          <Tab label="Rabin Karp" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
        <h2>main String </h2>

         <BarChart data={[5,10,1,3,15,16,12,12,12,23,44]} size={[500,500]} />
          </div>
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
   
  
      </div>
      </MuiThemeProvider>
    
   )
   }
}
export default App
