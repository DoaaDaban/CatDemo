import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form ,Button} from 'react-bootstrap';


class AddCat extends Component{

  render(){

    return(
      <>


{/* <form onSubmit={(e) => this.props.getCats(e)}>
                <label>Enter your name</label>
                <input type="text" name="ownerName" />
                <input type="submit" value="get cats" />
            </form> */}
 
<Form onSubmit={(e) => this.props.addCatM(e)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>cat name</Form.Label>
    <Form.Control type="text" placeholder="Enter owner Name" name='catName' />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>cat breed</Form.Label>
    <Form.Control type="text" placeholder="Enter owner Name" name='catBreed' />
  </Form.Group>


  <Button variant="primary" type="submit" >
  add cats
  </Button>
</Form>

      </>
    )
  }
}

export default AddCat;



