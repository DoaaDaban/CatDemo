import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form ,Button} from 'react-bootstrap';


class CatForm extends Component{

  render(){

    return(
      <>
<h1>hello</h1>

{/* <form onSubmit={(e) => this.props.getCats(e)}>
                <label>Enter your name</label>
                <input type="text" name="ownerName" />
                <input type="submit" value="get cats" />
            </form> */}
 
<Form onSubmit={(e) => this.props.getCats(e)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>owner name</Form.Label>
    <Form.Control type="text" placeholder="Enter owner Name" name='ownerName' />
  </Form.Group>

  <Button variant="primary" type="submit" >
  get cats
  </Button>
</Form>

      </>
    )
  }
}

export default CatForm;



