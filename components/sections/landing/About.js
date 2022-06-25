import Map from './Map';
import Marquees from './Marquees';
import s from '../../../styles/About.module.css';

function About({ setShowMenu }) {
	return (
		<>
			<div className={s.outerContainer}>
				<div id="bar" className={s.container}>
					<div
						className={s.innerContainer}
						style={{ backgroundImage: `url(./images/about.jpg)` }}
					></div>
					<div className={s.aboutText}>
						Aquí ibamos a poner algo sobre el bar pero nadie ha querido escribir nada. Aún así
						queda mejor escribir esto aunque no sea más que por una cuestión estética.
					</div>
					<div className={s.schedule}>
						<span>Horario de verano:</span>
						<span>21 junio - 29 agosto:</span>
						<p>Lunes a Jueves: 15:00 - 23:00</p>
						<p>Viernes: 16:00 - 02:30</p>
						<p>Cerramos sábados y domingos</p>
						<p>*Del 1 al 15 de agosto nos vamos por vacaciones chau</p>
					</div>
				</div>
				<Marquees setShowMenu={setShowMenu} />
				<Map />
			</div>
		</>
	);
}

export default About;
