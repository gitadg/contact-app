import axios from 'axios';

class ContactsDataService {

    retrieveAllContacts() {
        return axios.get('http://localhost:8080/contacts');
    }
    addContact(contact) {
        return axios.post('http://localhost:8080/add', contact);
    }
    updateContact(id, contact) {
        return axios.put(`http://localhost:8080/update/${id}`, contact);
    }
    deleteContact(id) {
        return axios.delete(`http://localhost:8080/delete/${id}`);
    }
}

export default new ContactsDataService(); 