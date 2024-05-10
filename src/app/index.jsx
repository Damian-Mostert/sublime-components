import React,{Fragment} from "react";

import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import { Popup } from "../popup/popup";

export function SublimeApp({routes}){
	return <Fragment>
		<BrowserRouter>
		<Routes>
			{routes.map((route,key)=>{
				const Element = route.element;
				return <Route key={key} path={route.pathname} element={<Element/>}/>
			})}
		</Routes>
		</BrowserRouter>
		<Popup/>
	</Fragment>
}
