import React from "react";
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={                                     
            username: 'Vaibhav',                     
          
            rollno:'',
            errormessage:''
        };
    }
    myChangeHandler =(event)=>{       
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        let err = '';  
        if(fieldName === "rollno"){                               
            if(fieldValue !=="" && !Number(fieldValue)){
                err = <strong>Your Rollno must be a number</strong>;

            }
        }
        this.setState({errormessage:err});
        this.setState({[fieldName]:fieldValue});
       

    }
    
    subitHandler = (event)=>{           
        event.preventDefault();         
        alert(this.state.username+'  has been sucessfully registerd')
    }
    render(){
        return(
            <div className="from">
            <form onSubmit={this.subitHandler}>
                <h1>Hello  {this.state.username}</h1>
                
                <input className="name" placeholder="Enter Name"
                texr='text'
                name='username'
                onChange={this.myChangeHandler}
                />
                   
                    <input className="phone" texr='text'placeholder="Enter PhoneNumber"
                    name='Phone Number' 
                    onChange={this.myChangeHandler}/>
                   <br></br>
                   <input className="email" texr='text'placeholder="Enter Email Id"
                    name='Email Id' 
                    onChange={this.myChangeHandler}/>

                    <br/><br/>
                    <input className="submit" type="Submit" value="Submit"/><br/>
                    {this.state.errormessage}<br/>
                    {this.state.rollno}
                
                         </form>
                         </div>
        );
    }
}
export default Login;