import React, {Component} from 'react';


export class Cats extends Component{

    render(){

        return(
            <>
            {/* { this.props.showCatComponent &&
                    this.props.cats.map((cat, idx) => {
                        return (
                            <div key={idx}>
                                <p>cat name : {cat.catName}</p>
                                <p>cat breed: {cat.breed}</p>
                            </div>
                        )
                    })
                } */}
{
    this.props.showCatComponent &&

    this.props.cats.map((cat , idx)=>{

        return(
            <>
                
            <div key={idx}> cat name : {cat.catName}
            <button onClick={ () => this.props.deletCatM(idx)} >X</button>
            <button onClick={ () => this.props.showUpdateForm(idx)} >Update cat</button>
            </div>
            {/* <p> cat breed : {cat.breed}</p> */}
            </>
        )
    })


}

            </>
        )
    }
}

export default Cats;

