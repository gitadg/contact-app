import React from 'react';
import '../styles/App.css';
import '../styles/bootstrap.min.css';

class DeleteContact extends React.Component {
    constructor(props) {
        super(props);   
        this.state = {
            id: -1
    };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        const contact =  this.props.contacts.filter((c) => { 
            return c.id == this.props.location.pathname.slice(8);
          })
        this.setState((state, props) => ({
        id: contact[0].id
        }));
    }
  
    handleDelete() {
        this.props.deleteContact(this.state.id)
        this.props.history.push(`/`)
    } 

    render() {
        const contact =  this.props.contacts.filter((c) => { 
            return c.id == this.props.location.pathname.slice(8);
          })
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                    {contact.map (contact => 
                        <tr key={contact.id}>
                            <td >{contact.id}</td>
                            <td >{contact.firstName}</td>
                            <td >{contact.lastName}</td>
                            <td >{contact.email}</td>
                            <td >{contact.phone}</td>                       
                        </tr>
                    )}
                    </tbody>
                </table>
                <div>
                    Confirm deletion of this contact?
                </div><br></br>
                <button className="btn-danger btn-lg" onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
    }

export default DeleteContact;