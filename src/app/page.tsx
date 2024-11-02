import * as motion from "framer-motion/client";
import { Link } from "next-view-transitions";

export default function Home() {
	return (
		<motion.div className="text-gray-11">

			<header>
				<h1 className="text-gray-12">
					Jérémy Caruelle
				</h1>
				<span className="text-gray-9">
					Fullstack Engineer
				</span>
			</header>

			<main className="mt-16 flex flex-col gap-16 leading-7">

				<section className="leading-7">
					<p>
						Welcome to the dynamic world of a creative mind dedicated 
						to harmonizing design aesthetics with the precision of engineering, 
						crafting seamless, polished software and interfaces.
					</p>
				</section>

				<section className="leading-7 flex flex-col gap-6">
					<h2 className="text-gray-12">
						Today
					</h2>
					<div className="flex flex-col gap-8">
						<p>
							I have just finished a new version of this website, opting for a 
							more streamlined and understated design that better reflects my 
							style and vision.
						</p>
						<p>
							I am currently in the second year of my Master’s degree in Cloud 
							Computing at INSSET, while also gaining hands-on experience as an 
							apprentice at AXA Climate.
						</p>
						<p>
							Fascinated by the endless possibilities of technology, I am always
							on the lookout for new challenges. This inspired me to create
							the crafts section.
						</p>
					</div>

				</section>

				<section className="leading-7 flex flex-col gap-6">
					<h2 className="text-gray-12">
						Connect
					</h2>
					<div className="flex flex-col gap-8">
						<p>
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
						</p>
					</div>
				</section>

				{/* <section className="leading-7 flex flex-col gap-6">
					<h2 className="text-gray-12">
						Connect
					</h2>
					<div className="flex flex-col gap-8">
						<p>
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv


							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv

							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv

							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv

							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv
							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv

							Reach me at hi@jeremycaruelle.com, see more of my work on 𝕏, my code on
							GitHub, or check out what I’m up to on read.cv

						</p>
					</div>
				</section> */}

			</main>

		</motion.div>
	);
}
