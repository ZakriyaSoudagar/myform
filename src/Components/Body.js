import React from "react";
import './Body.css'


class Body extends React.Component{
    constructor()
    {
        super();
        this.state ={
            name: "",
            dept: "",
            rating : "",
            user : []
        }

    }

    handleChange =(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
        
    }
    submitForm = (event)=>
    {
        event.preventDefault();
        const tempObj ={
            name: this.state.name,
            dept : this.state.dept,
            rating : this.state.rating
        }


        const arr = this.state.user;
        arr.push(tempObj);
        this.setState({
            user:arr
        });
        console.log(this.state)
        this.setState({
            [event.target.value] :""
        })

      
           }
           

    

    render()
    {
        return(
            <div>
                <h1>Employee Feedback Form.</h1>
                <form>
                <label for='name'>Name</label>
                <input id='input' type='text' name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}></input>
                <br/>

                <label for='dept'>Department</label>
                <input id='input' type='text' name="dept" placeholder="dept" onChange={this.handleChange} value={this.state.dept}></input>
                <br/>

                <label for='rating'>Rating</label>
                <input id='input' type='number' name="rating" placeholder="rating" onChange={this.handleChange} value={this.state.rating}></input>
                <br/>
                <button className="btn" onClick={this.submitForm} >Submit</button>
        </form>

                

                <hr/>
                
                    { this.state.user.map((value, i)=>{
                        return(
                            <div className="Box">
                                <h2>{value.name} | {value.dept} | {value.rating}</h2>
                            </div>
                        )
                    }
                
            
                
                    )} </div>
            )
    }
}
export default Body;