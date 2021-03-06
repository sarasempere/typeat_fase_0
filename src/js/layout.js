import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Login } from "./views/login";
import { SignUp } from "./views/signUp";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Search } from "./views/search";
import { Favorites } from "./views/favorites";
import { Searchresult } from "./views/searchresult";
import MapView from "./component/react-leaflet";
import { MarkerIcon } from "./component/react-leaflet-icon";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login/">
							<Login />
						</Route>
						<Route exact path="/signup/">
							<SignUp />
						</Route>
						<Route exact path="/search/">
							<Search />
						</Route>
						<Route exact path="/favorites/">
							<Favorites />
						</Route>

						<Route exact path="/searchresult/:theid">
							<Searchresult />
						</Route>
						<Route exact path="/maps/" />
						<MapView />

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
