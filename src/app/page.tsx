import * as motion from "framer-motion/client";
import Link from "@/components/link";

export default function Home() {
	return (
		<motion.div className="text-gray-11">

			<header>
				<h1 className="text-gray-12">
					Jérémy Caruelle
				</h1>
				<span className="text-gray-10">
					Fullstack Engineer
				</span>
			</header>

			<main className="mt-16 flex flex-col gap-16 leading-7">

				<section className="leading-7">
					<p>
						Welcome to the dynamic world of a creative mind dedicated 
						to harmonizing design <em>aesthetics</em> with the precision of engineering, 
						crafting seamless, polished software and interfaces.
					</p>
				</section>

				<section className="leading-7 flex flex-col gap-6">
					<h2 className="text-gray-12">
						Today
					</h2>
					<div className="flex flex-col gap-8">
						<p>
							I have just finished a shiny new version of this website, opting for a 
							more streamlined and understated design that better reflects my 
							style and vision.
						</p>
						<p>
							I am currently in the second year of my Master’s degree in Cloud 
							Computing at <Link href="https://www.insset.u-picardie.fr/">INSSET</Link>, 
							while also gaining hands-on experience as an apprentice at {" "}
							<Link href="https://axa.com">
								AXA Climate
							</Link>
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
							Reach me at <Link href="mailto:hi@jeremycaruelle.com">hi@jeremycaruelle.com</Link>, 
							see more of my work on <Link href="https://x.com/Asgarrrrr">𝕏</Link>, my code on{ " " }
							<Link href="https://github.com/Asgarrrr">Github</Link>, or check out what I’m up 
							to on <Link href="https://read.cv/asgarrrr">read.cv</Link>
						</p>
					</div>
				</section>

			</main>

		</motion.div>
	);
}
