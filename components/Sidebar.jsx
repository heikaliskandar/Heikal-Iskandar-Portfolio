"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
	faHome,
	faUser,
	faFolderOpen,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
	return (
		<div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14  flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
			<ul
				id="sidebar"
				className="flex flex-col justify-evenly items-center h-full  text-gray-50">
				<li data-menuanchor="home">
					<a href="/#home">
						<FontAwesomeIcon icon={faHome} className="text-xl text-white" />
					</a>
				</li>
				<li data-menuanchor="about">
					<a href="/#about">
						<FontAwesomeIcon icon={faUser} className="text-xl text-white" />
					</a>
				</li>
				<li data-menuanchor="projects">
					<a href="/#projects">
						<FontAwesomeIcon icon={faFolderOpen} className="text-xl text-white" />
					</a>
				</li>
				<li data-menuanchor="contact">
					<a href="/#contact">
						<FontAwesomeIcon icon={faEnvelope} className="text-xl text-white" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
