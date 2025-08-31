// Copyright (C) 2025 Heikal Iskandar
// This file is part of Heikal-porto-2-nextJs.
// Licensed under the GNU GPL v3.0. See LICENSE for details.

"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/legacy/image";
// import "../globals.css";
import { motion } from "framer-motion";
import Link from "next/link";

// components
import Button from "@/components/Button";
import Me from "@/public/image/me.jpg";
import MeAbout from "@/public/image/me2.jpg";
import Setup from "@/public/image/setup.jpg";
import ProjectAll from "@/public/image/projects.png";
import Hr from "@/components/Hr";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "@/components/Sidebar";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const MyPage = () => {
	const fullpageOptions = {
		anchors: ["home", "about", "projects", "contact"],
		scrollingSpeed: 1000,
		licenseKey: "gplv3-license",
		menu: "#sidebar",
		lockAnchors: false,
	};

	return (
		<div>
			 <ReactFullpage
                render={({ state, fullpageApi }) => (
                    <>
                        <Sidebar fullpageApi={fullpageApi} />
                        <ReactFullpage.Wrapper>
						
							<div className="section">
								<div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20">
									<motion.div
										className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											type: "spring",
										}}>
										<div className="block md:hidden col-span-1 mx-auto my-10">
											<div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0 transition-all ease duration-300">
												<Image
													src={Me}
													width={500}
													height={500}
													className="rounded-full w-full h-full object-cover "
													alt="Heikal"
													placeholder="blur"
												/>
											</div>
										</div>
										<motion.h3
											className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
											initial={{ x: -100, opacity: 0 }}
											whileInView={{ x: 0, opacity: 1 }}
											transition={{
												delay: 0.2,
												type: "spring",
											}}>
											Heikal
										</motion.h3>
										<motion.h1
											className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5"
											initial={{ x: -100, opacity: 0 }}
											whileInView={{ x: 0, opacity: 1 }}
											transition={{
												delay: 0.3,
												type: "spring",
											}}>
											Web Developer
										</motion.h1>
										<motion.p
											className="title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
											initial={{ x: -100, opacity: 0 }}
											whileInView={{ x: 0, opacity: 1 }}
											transition={{
												delay: 0.4,
												type: "spring",
											}}>
											Hi! I&rsquo;am Heikal, a final-year student passionate about web development and everything related to software engineering. I specialize in modern full-stack development and enjoy building scalable, user-friendly web applications while continuously exploring new technologies to enhance functionality and user experience.
										</motion.p>
										<motion.div
											className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
											initial={{ x: -100, opacity: 0 }}
											whileInView={{ x: 0, opacity: 1 }}
											transition={{
												delay: 0.5,
												type: "spring",
											}}>
											
											<Button
												variation="secondary"
												onClick={() => fullpageApi.moveTo("contact")}>
												Contact Me
											</Button>
										</motion.div>
									</motion.div>
									<motion.div
										className="hidden md:flex col-span-1 mx-auto justify-center items-center "
										initial={{ x: 100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.7,
											type: "spring",
										}}>
										<div className="rounded-full h-auto w-auto  lg:px-12 grayscale hover:grayscale-0 transition-all ease duration-300">
											<Image
												src={Me}
												width={400}
												height={550}
												placeholder="blur"
												alt="Heikal"
												className="rounded-full w-full h-full object-cover"
											/>
										</div>
									</motion.div>
								</div>
							</div>
							<div className="section">
								<div className="relative md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden">
									<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
										<motion.div
											className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
											initial={{
												x: 300,
												opacity: 0,
												z: -100,
											}}
											whileInView={{
												x: 0,
												opacity: 1,
												z: 0,
											}}
											transition={{
												delay: 0.5,
												type: "spring",
												stiffness: 100,
												damping: 20,
											}}>
											<Image
												src={MeAbout}
												layout="fill"
												className="object-cover"
												alt="Heikal"
												placeholder="blur"
											/>
										</motion.div>
									</div>
									<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
										<motion.h1
											className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold"
											initial={{ x: -100, opacity: 0 }}
											whileInView={{ x: 0, opacity: 1 }}
											transition={{
												delay: 0.1,
												type: "spring",
											}}>
											About Me
										</motion.h1>
										<Hr />
										<motion.p
											className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
											initial={{ x: -100, opacity: 0 }}
											whileInView={{ x: 0, opacity: 1 }}
											transition={{
												delay: 0.2,
												type: "spring",
											}}>
											A brief introduction about me and my interest.
										</motion.p>
										<motion.div
											initial={{ y: 40, opacity: 0 }}
											whileInView={{ y: 0, opacity: 1 }}
											transition={{
												delay: 0.3,
												type: "spring",
											}}>
											<Button variation="primary">
												<Link href="/about">Learn More</Link>
											</Button>
										</motion.div>
									</div>
								</div>
							</div>
							<div className="section">
								<div className="relative md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden">
									<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
										<motion.div
											className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
											initial={{
												x: 300,
												opacity: 0,
												z: -100,
											}}
											whileInView={{
												x: 0,
												opacity: 1,
												z: 0,
											}}
											transition={{
												delay: 0.5,
												type: "spring",
												stiffness: 100,
												damping: 20,
											}}>
											<Image
												src={ProjectAll}
												layout="fill"
												className="object-cover"
												alt="Projects"
												placeholder="blur"
											/>
										</motion.div>
									</div>
									<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
										<motion.h1
											className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold"
											initial={{ x: -100, opacity: 0 }}
											whileInView={{ x: 0, opacity: 1 }}
											transition={{
												delay: 0.1,
												type: "spring",
											}}>
											Projects
										</motion.h1>
										<Hr />
										<motion.p
											className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
											initial={{ x: -100, opacity: 0 }}
											whileInView={{ x: 0, opacity: 1 }}
											transition={{
												delay: 0.2,
												type: "spring",
											}}>
											Some of my recent projects and work.
										</motion.p>
										<motion.div
											initial={{ y: 40, opacity: 0 }}
											whileInView={{ y: 0, opacity: 1 }}
											transition={{
												delay: 0.3,
												type: "spring",
											}}>
											<Button variation="primary">
												<Link href="/projects">View All</Link>
											</Button>
										</motion.div>
									</div>
								</div>
							</div>
							<div className="section">
								<div className="mx-auto container grid grid-cols-1 md:grid-cols-2 gap-4 p-10 overflow-hidden md:px-20">
									<motion.div
										className="col-span-1 flex flex-col justify-center items-center md:items-start text-center md:text-start"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											type: "spring",
										}}>
										<motion.h1
											className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5"
											initial={{ x: -100, opacity: 0 }}
											whileInView={{ x: 0, opacity: 1 }}
											transition={{
												delay: 0.1,
												type: "spring",
											}}>
											Contact
										</motion.h1>
										<Hr />
										<motion.p
											className="title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
											initial={{ x: -100, opacity: 0 }}
											whileInView={{ x: 0, opacity: 1 }}
											transition={{
												delay: 0.2,
												type: "spring",
											}}>
											Let&rsquo;s get in touch! Feel free to reach out for collaborations, opportunities, or just to say hello.
										</motion.p>
										<motion.div
											className="social-links flex flex-row justify-center items-center space-x-6 mt-10"
											initial={{ x: -100, opacity: 0 }}
											whileInView={{ x: 0, opacity: 1 }}
											transition={{
												delay: 0.3,
												type: "spring",
											}}>
											<a
												href="https://github.com/heikaliskandar"
												target="_blank"
												rel="noopener noreferrer"
												className="text-2xl text-gray-600 hover:text-black transition-colors duration-300">
												<FontAwesomeIcon icon={faGithub} />
											</a>
											<a
												href="https://www.linkedin.com/in/heikal-iskandar/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-2xl text-gray-600 hover:text-blue-600 transition-colors duration-300">
												<FontAwesomeIcon icon={faLinkedin} />
											</a>
											<a
												href="https://www.instagram.com/heikaliskandar/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-2xl text-gray-600 hover:text-pink-600 transition-colors duration-300">
												<FontAwesomeIcon icon={faInstagram} />
											</a>
											<a
												href="https://twitter.com/Heikaliskandar_"
												target="_blank"
												rel="noopener noreferrer"
												className="text-2xl text-gray-600 hover:text-blue-400 transition-colors duration-300">
												<FontAwesomeIcon icon={faXTwitter} />
											</a>
											<a
												href="mailto:heikaliskandar@gmail.com"
												className="text-2xl text-gray-600 hover:text-red-600 transition-colors duration-300">
												<FontAwesomeIcon icon={faEnvelope} />
											</a>
										</motion.div>
									</motion.div>
									<motion.div
										className="col-span-1 flex justify-center items-center"
										initial={{ x: 100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.5,
											type: "spring",
										}}>
										<div className="relative w-full max-w-xs h-60 md:h-[600px] md:w-[30vw] mx-auto">
											<Image
												src={Setup}
												layout="fill"
												className="object-cover rounded-sm"
												alt="Setup"
												placeholder="blur"
											/>
										</div>
									</motion.div>
								</div>
							</div>
						</ReactFullpage.Wrapper>
					</>
				)}
				{...fullpageOptions}
			/>
		</div>
	);
};

export default MyPage; 