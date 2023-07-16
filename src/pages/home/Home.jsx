import React from 'react'
import ProfileImg from "../../assets/home2.jpeg"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import "./home.css"


const Home = () => {
  return (
		<section className="home section grid">
			<img src={ProfileImg} alt="" className="home__img" />
			<div className="home__content">
				<div className="home__data">
					<h1 className="home__title">
						<span>I'm Jaimin Panchal.</span> Web Developer
					</h1>
					<p className="home__description">
						I am a dedicated and ambitious student with a strong passion for web
						development. Eager to expand my skill set and learn new
						technologies, I am constantly seeking opportunities to grow in this
						field. As a learner, I actively seek out challenges and enjoy
						working in a collaborative team environment where I can contribute
						my ideas and learn from others.
					</p>

					<Link to="/about" className="button">
						More About Me{" "}
						<span className="button__icon">
							{" "}
							<FaArrowRight />
						</span>
					</Link>
				</div>
			</div>

			<div className="color__block"></div>
		</section>
	);
}

export default Home