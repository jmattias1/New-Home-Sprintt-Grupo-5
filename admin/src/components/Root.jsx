import React from "react";
import Footer from "./Footer";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import {Outlet} from "react-router-dom"

const Root = () => {
  return (
	<div id="wrapper">
    <SideBar/>

		<div id="content-wrapper" class="d-flex flex-column">

			<div id="content">

<TopBar/>

<Outlet/>
			</div>

<Footer/>
			

		</div>
		

	</div>
  );
};

export default Root;
