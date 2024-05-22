"use client";

import React,{ Fragment } from "react";

import { Popup } from "../popup/popup";

export function SublimeApp({children,header,breadcrumbs,footer}:any) :any{

	const Header = header;
	const Breadcrumbs = breadcrumbs;
	const Footer = footer;
	
	return <Fragment>
		<html lang="en">
		<body>
			{Header && <Header/>}
			{Breadcrumbs && <Breadcrumbs/>}
			<main>
				{children}
			</main>
			{Footer && <Footer/>}

		</body>
		<Popup/>
		</html>
	</Fragment>
}
