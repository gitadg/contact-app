import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../components/Search';
import '../styles/App.css';
import '../styles/bootstrap.min.css';


class Contacts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          filterText: ''        
        };
        
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    handleFilterTextChange(filterText) {
        this.setState({
          filterText: filterText
        });
      }
    render() {
        const filterText = this.state.filterText;
        const rows = [];
        this.props.contacts.forEach((contact) => {
            if (contact.firstName.indexOf(filterText) === -1
                && contact.lastName.indexOf(filterText) === -1
            ) return;
            rows.push(contact);
          });
        return (
            <div className="container">
        <Search
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />            
        <table className="table">
                <thead>
                    <tr >
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map (contact => 

                    <tr key={contact.id}>
                        <td >{contact.firstName}</td>
                        <td >{contact.lastName}</td>
                        <td >{contact.email}</td>
                        <td >{contact.phone}</td>
                        <td >
                            <button className="btn-primary">
                                <NavLink className="btn-primary" to={`/update/${contact.id}`} activeClassName="is-active">Update</NavLink>
                            </button>
                        </td>
                        <td >
                            <button className="btn-danger">
                                <NavLink className="btn-danger" to={`/delete/${contact.id}`} activeClassName="is-active">Delete</NavLink>
                            </button>
                        </td>                            
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        )
    }
}

export default Contacts;