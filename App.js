import	React from 'react'
import	{ Link, Route, Switch } from 'react-router-dom'

import Shop from './Shop.js';
import Admin from './Admin.js';


//const Admin = () => (
//	<div>
//	    <h2>Admin</h2>		
//	</div>
//)

export default function App() {
    return (
		<div>
	    	<aside>
	        	<Link to={'/'}>Shop</Link> | <Link to={'/admin'}>Add-Book</Link>
	    	</aside>
	    	<main>
				<Switch>
	        		<Route exact path="/" component={Shop} />
		    		<Route path="/admin" component={Admin} />
				</Switch>
	    	</main>
	 	</div>
    )
}

