import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
class TabViewElement extends React.Component{
  constructor(props){
       super(props)
       
    }




    render(){
  return (

  <div>
      <Card>
    <CardHeader
      title="Enter the required fields"
      
      actAsExpander={false}
      showExpandableButton={false}
    />

    <CardText >

        <TextField
      hintText="Enter large String here"
      floatingLabelText="Main String"
       
    /><br />

       <TextField
      hintText="Enter small sub String here"
      floatingLabelText="Small sub String"

      
    /><br />

 
    </CardText>
        <CardActions>
      <FlatButton label="Process" />
      
    </CardActions>
  </Card>
</div>

  )
}




    }

export default TabViewElement;
