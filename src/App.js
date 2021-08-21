import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CatForm from './components/CatForm';
import Cats from './components/Cats';
import AddCat from './components/AddCat';
import UpdateCatForm from './components/UpdateCatForm';

import axios from 'axios';

class App extends Component{

  
  constructor(props){
    super(props);

    this.state={
      cats:[],
      server: process.env.REACT_APP_SERVER_URL,
      showCatComponent: false,
      name:'',
      showUpdateFormflag: false,
      catName:'',
      catBreed:'',
      idx:-1,
    }  
  }

// read
 getCats= async (event) => {
    event.preventDefault();

    try{
      const paramsObj={
       name: event.target.ownerName.value
      } 

      const cats= await axios.get(`${this.state.server}/cat`,{params:paramsObj});

      this.setState({
        cats: cats.data,
        showCatComponent: true,
        name: event.target.ownerName.value
      
      });
    }
   catch (error) {
    console.log(error);
  }
  }

// add 
  addCatM = (event)=> {

    event.preventDefault();
    
    const catName= event.target.catName.value
    const catBreed= event.target.catBreed.value

     const catData={
      catName: catName,
      catBreed: catBreed,
     ownerName: this.state.name,
    }


    axios
    .post(`${this.state.server}/addCatR`, catData)
    .then(result =>{
      console.log(result.data);

      this.setState({
        cats: result.data
      })

    })
    .catch(err => {
      console.log(err);
    })
  }

  // delete 
  deletCatM = (index) =>{

    // console.log(index);

    const data={
    ownerName: this.state.name,
     // index: index, // we can do like this
    }
  
    axios
    .delete(`${this.state.server}/deleteCatR/${index}`, {params : data})
    .then(result => {

      console.log(result.data)

      this.setState({
        cats: result.data

      })
 
    })
    .catch(err => {
      console.log(err);
    })
  }

  updateCatM = (event) =>{

  }


  // update 
  showUpdateForm = (index) =>{
// show update form
    this.setState({
      showUpdateFormflag: true,
      catName: this.state.cats[index].catName,
      catBreed: this.state.cats[index].breed,
      idx: index,
    })
    //console.log(index); 
    // console.log(this.state.cats[index])
  }


  updateCatM =(event) => {
    // send req to server
    event.preventDefault();

    const updatedCatData ={
      catName: event.target.catName.value,
      catBreed: event.target.catBreed.value,
      ownerName: this.state.name,
    }

    axios
    .put(`${this.state.server}/updateCatR/${this.state.idx}`, updatedCatData)
    .then(result =>{
      console.log(result.data);

      this.setState({
        cats: result.data
      })

    })
    .catch(err=> {
      console.log(err)

    })

  }

  render(){

    return(
      <>

      <h1>hey</h1>
<CatForm
getCats={this.getCats}
/>

<AddCat 
addCatM ={this.addCatM}
/>

<Cats
cats={this.state.cats}
showCatComponent={this.state.showCatComponent}
deletCatM={this.deletCatM}
showUpdateForm={this.showUpdateForm}
/>

{
  this.state.showUpdateFormflag && 
<UpdateCatForm
updateCatM={this.updateCatM}
catName={this.state.catName}
catBreed={this.state.catBreed}
/>
}

      </>
    )
  }
}

export default App;