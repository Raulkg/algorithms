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
          <Tab label="Tab One" value={0} />
          <Tab label="Tab Two" value={1} />
          <Tab label="Tab Three" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
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
