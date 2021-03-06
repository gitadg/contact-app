import React from 'react';
//import { NavLink } from 'react-router-dom';
import '../styles/App.css';
import '../styles/bootstrap.min.css';

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState({
          [name]: value,
          id: this.props.idCount
        });
      } 
      handleValidation(e) {
            e.preventDefault();
            if(this.state.firstName.length<2){
                alert("Please enter a First Name.");
                return;
            }
            if(this.state.lastName.length<2){
                alert("Please enter a Last Name.")
                return;
            }        
            if(this.state.email.length<2){
                alert("Please enter an email address.")
                return;
            }        
            if(this.state.phone.length<2){
                alert("Please enter a Phone number.")
                return;
            }    
            this.handleSubmit();
        }
      handleSubmit() {
        console.log(this.state);
        this.props.addNewContact(this.state)
        this.props.history.push(`/`)
      } 

    render() {
        return (
            <div className="container">
                <h3>Add Contact</h3>
                <form onSubmit={this.handleValidation}>
                    <label>
                    First Name 
                    <input name="firstName" type="text"  value={this.state.firstName}  onChange={this.handleInputChange}/>
                    </label><br/>
                    <label>
                    Last Name
                    <input name="lastName" type="text"  value={this.state.lastName}  onChange={this.handleInputChange}/>
                    </label><br/>
                    <label>
                    Email Address
                    <input name="email" type="email"  value={this.state.email}  onChange={this.handleInputChange}/>
                    </label><br/>
                    <label>
                    Phone #
                    <input name="phone" type="tel"  value={this.state.phone}  onChange={this.handleInputChange}/>
                    </label><br/>                    
                    <input type="submit" className="btn-primary" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddContact;