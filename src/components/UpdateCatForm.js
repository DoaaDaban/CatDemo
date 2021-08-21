import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form ,Button} from 'react-bootstrap';


class UpdateCatForm extends Component{

  render(){

    return(
      <>

<Form onSubmit={(e) => this.props.updateCatM(e)}>
 
    <Form.Label>cat name</Form.Label>
    <Form.Control type="text" placeholder="Enter owner Name" name='catName' defaultValue={this.props.catName}/> 
 
    <Form.Label>cat breed</Form.Label>
    <Form.Control type="text" placeholder="Enter breed Name" name='catBreed' defaultValue={this.props.catBreed}/> 
 
  <Button variant="primary" type="submit" >
  update 
  </Button>
</Form>

      </>
    )
  }
}

export default UpdateCatForm;
