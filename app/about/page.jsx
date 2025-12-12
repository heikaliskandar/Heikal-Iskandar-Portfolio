// Copyright (C) 2025 Muhammad Heikal Iskandar
// Based on work by Alvalens (https://github.com/Alvalens/Alvalens-porto-2-nextJs)
// This file is part of Heikal-Iskandar-Portfolio.
// Licensed under the GNU GPL v3.0. See LICENSE for details.

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";
import FixedButton from "@/components/FixedButton";
import Script from "next/script";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Quote from "./components/quote/quote.jsx";
import Skills from "./components/skills/skills.jsx";
import About from "./components/about/about.jsx";
import Hr from "@/components/Hr";
import Sidebar from "@/components/Sidebar";

// images
import Hero from "@/public/image/heikal-iskandar-2.jpg";

// Animation constants
const ANIMATION_CONFIG = {
	mobile: { initial: 1, animate: 1.05, hover: 1.1 },
	desktop: { initial: 1, animate: 1.15, hover: 1.6 },
};


export default function Page() {
	const [isMobile, setIsMobile] = useState(false);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		window.scrollTo(0, 0);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const scaleConfig = isMobile ? ANIMATION_CONFIG.mobile : ANIMATION_CONFIG.desktop;

	const handleScrollDown = () => {
		const aboutSection = document.querySelector("#about-section");
		if (aboutSection) {
			aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
		} else {
			window.scrollTo({ top: 1000, behavior: "smooth" });
		}
	};

	return (
		<>
			<Sidebar />
			<main className="overflow-hidden">
				<FixedButton href="/#about" aria-label="Back to home about section">
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-black pr-10"
						aria-hidden="true"
					/>
				</FixedButton>

				<section
					className="relative h-screen gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden"
					aria-label="About page hero section"
				>
					{/* Hero Image */}
					<div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16 overflow-hidden rounded-sm">
						{isClient && (
							<motion.div
								initial={{ scale: scaleConfig.initial, opacity: 0 }}
								animate={{ scale: scaleConfig.animate, opacity: 1 }}
								whileHover={{ scale: scaleConfig.hover }}
								transition={{
									scale: { ease: "circOut", duration: 1 },
									opacity: { duration: 0.5 },
								}}
								className="relative h-[400px] md:h-[600px] w-[80vw] md:w-[30vw]"
							>
								<Image
									src={Hero}
									alt="Muhammad Heikal Iskandar, Front-End Engineer and SEO Specialist"
									fill
									priority
									placeholder="blur"
									sizes="(max-width: 768px) 80vw, 30vw"
									className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
									quality={90}
								/>
							</motion.div>
						)}
					</div>

					{/* Hero Content */}
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md:px-0 text-black text-5xl md:text-8xl font-bold">
							About Me
						</h1>
						<Hr />
						<p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
							A brief introduction about me and{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								my interests.
							</span>
						</p>
						<motion.button
							onClick={handleScrollDown}
							className="mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
							aria-label="Scroll down to read more about me"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button variation="primary">Scroll Down</Button>
						</motion.button>
					</div>
				</section>
				{/* end hero */}

				{/* about */}
				<div id="about-section">
					<About />
				</div>
				{/* end about */}

				{/* skills */}
				<Skills />
				{/* end skills */}

				{/* Quote */}
				<Quote />
				{/* end Quote */}
			</main>

			{/* Structured Data */}
			<Script
				id="about-page-schema"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ProfilePage",
						name: "About Muhammad Heikal Iskandar",
						url: "https://heikal-iskandar-portfolio.vercel.app/about",
						mainEntity: {
							"@type": "Person",
							name: "Muhammad Heikal Iskandar",
							jobTitle: ["Front-End Engineer", "SEO Specialist"],
							description:
								"Passionate Front-End Engineer and SEO Specialist creating beautiful and performant web experiences in Kuala Lumpur",
							address: {
								"@type": "PostalAddress",
								addressLocality: "Kuala Lumpur",
								addressCountry: "MY",
							},
							sameAs: [
								"https://github.com/heikaliskandar",
								"https://www.linkedin.com/in/heikal-iskandar/",
								"https://www.instagram.com/heikaliskandar/",
								"https://twitter.com/Heikaliskandar_",
							],
						},
					}),
				}}
			/>
		</>
	);
}
