import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/jumbotron.scss";
import { MainForm } from "../component/mainform";
import { Dish } from "../component/dish";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";
import calamares from "../../img/calamares.jpg";
import PropType from "prop-types";
import { useLocation } from "react-router-dom";

export const Search = props => {
	const { store, actions } = useContext(Context);
	const [indexTop, setIndexTop] = useState(4);
	const indexBottom = indexTop - 2;
	const location = useLocation();
	actions.loadSearchInfo(location.search);
	console.log(location.search);
	return (
		<div className="base">
			<div className="jumbotron alinearform" id="jumbobackground">
				<MainForm />
			</div>
			<div className="row">
				<div className="card col-6 base">
					<div className="container cont_width dishcard">
						{store.dishes.map((e, index) => {
							if (index <= indexTop && index > indexBottom) {
								console.log(index);
								return <Dish key={index} dishes={e} />;
							}
						})}
					</div>
					<div className="card-footer">
						<div className="d-flex justify-content-between ">
							<Button
								href=""
								className="alignbutton m-1 bg-dark"
								onClick={() => {
									setIndexTop(indexTop - 5);
								}}>
								Previous
							</Button>
							<Button
								href=""
								className="alignbutton m-1 bg-dark"
								onClick={() => {
									setIndexTop(indexTop + 5);
								}}>
								Next
							</Button>
						</div>
					</div>
				</div>
				<div className="col-6">
					<img
						className="card-img-center"
						src="https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/480/public/media/image/2016/05/543113-asi-funciona-google-maps-conexion-internet.jpg?itok=zLmKOPKf"
						alt="Card image cap"
					/>
				</div>
			</div>
		</div>
	);
};

Search.PropType = {
	lugar: PropType.string,
	plato: PropType.string
};
