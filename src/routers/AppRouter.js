import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Contacts from '../components/Contacts';
import AddContact from '../components/AddContact';
import UpdateContact from '../components/UpdateContact';
import DeleteContact from '../components/DeleteContact';
import '../styles/App.css';


const AppRouter = () => (
	<BrowserRouter>
		<div className="app">
			<div ><Header /></div>
			<Switch>
				<Route path="/" component={Contacts} exact={true}/>
				<Route path="/add" component={AddContact} />
                <Route
                    path='/update/:id'
                    render={(props) => <UpdateContact {...props} bla={"yooooooooooooooo"} />}
                />  
				<Route path="/delete/:id" component={DeleteContact} />
				<Route component={Contacts} />
			</Switch>
		</div>
	</BrowserRouter>	
);

export default AppRouter;