import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/heikal-iskandar-1.jpg";
import Me2 from "@/public/image/heikal-iskandar-2.jpg";
import Me3 from "@/public/image/heikal-iskandar-3.jpg";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="w-full h-full">
								<Image
									src={Me1}
									alt="Alvalens"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="w-full h-full">
								<Image
									src={Me2}
									alt="Alvalens"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="w-full h-full">
								<Image
									src={Me3}
									alt="Alvalens"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						Heikal Iskandar
					</h2>
					<p className="text-gray-600 text-justify title text-lg">
						Hey there, I’m Heikal Iskandar, a tech enthusiast from Alor Setar.
						I completed my high school at Kolej Sultan Abdul Hamid and am
						currently based in Kuala Lumpur, pursuing my degree in
						<span className="text-black font-medium">
							{" "}
							Software Engineering
						</span>{" "}
						at
						<span className="text-black font-medium">
							{" "}
							Universiti Kuala Lumpur (UniKL MIIT).
						</span>
					</p>
					<p className="text-gray-600 text-justify title text-lg mt-4">
						I’m passionate about
						<span className="text-black font-medium">
							{" "}
							web development and software engineering
						</span>
						, with a focus on building clean, functional, and user-friendly
						digital experiences. From designing intuitive interfaces to writing
						efficient backend code, I enjoy every step of the development
						process.
					</p>
					<p className="text-gray-600 text-justify title text-lg mt-4">
						In today’s fast-evolving tech world, I believe in staying curious,
						learning continuously, and
						<span className="text-black font-medium">
							{" "}
							building things that matter.
						</span>{" "}
						Let’s connect and create something awesome together!
					</p>
					<Card />
				</motion.div>
			</div>
		</>
	);
}
