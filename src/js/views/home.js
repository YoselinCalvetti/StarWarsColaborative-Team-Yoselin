import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Vehiculos from "../component/vehiculos";
import Planetas from "../component/planetas";
import Personas from "../component/personas";
import Peliculas from "../component/peliculas";
import Naves from "../component/naves";
import { MdPendingActions } from "react-icons/md";


export const Home = () => {


	
	return (

		<div className="container">

			<Vehiculos />
			<Planetas />
			<Personas />
			<Peliculas />
			<Naves />

		</div>
	)
}
