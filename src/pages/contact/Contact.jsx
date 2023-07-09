import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
	FaEnvelopeOpen,
	FaPhoneSquareAlt,
	FaLinkedin,
	FaInstagram
} from "react-icons/fa";



import { FiSend} from "react-icons/fi"
import "./contact.css"

const Contact = () => {

  const [form, setForm] = useState({
    email: "",
    message: "",
    name: "",
    subject:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]:value
    })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you. I will get back to you as soon as possible.");
    emailjs
			.send(
				"service_qj2svte",
				"template_lmuircr",
				{
					from_name: form.name,
					to_name: "Jaimin Panchal",
					from_email: form.email,
					to_email: "jaiminpanchal1208@gmail.com",
					message: form.subject+":\n"+form.message,
				},
				"5gyFgV6N8vxY5Uk4I"
			)
			.then(
				() => {

					setForm({
						name: "",
						email: "",
            message: "",
            subject:""
					});
        },
    )
    .catch(err=> {
      alert("try again please!")
    })

  }
	return (
		<section className="contact section" >
			<h2 className="section__title">
				Get In <span>Touch</span>
			</h2>

			<div className="contact__container container grid">
				<div className="contact__data">
					<h3 className="contact__title">Namaskar!</h3>

					<p className="contact__description">
						Feel free to get in touch with me.Always open to New projects,New
						ideas,good Opportunities and to work with New people. Lets Build
						Together!
					</p>

					<div className="contact__info">
						<div className="info__item">
							<FaEnvelopeOpen className="info__icon" />

							<div className="">
								<span className="info__title">Mail me</span>
								<h4 className="info__desc">jaiminpanchal1208@gmail.com</h4>
							</div>
						</div>

						<div className="info__item">
							<FaPhoneSquareAlt className="info__icon" />

							<div className="">
								<span className="info__title">Contact me</span>
								<h4 className="info__desc">+814 152 6409</h4>
							</div>
						</div>
					</div>

					<div className="contact__socials">
						<a href="https://www.linkedin.com" className="contact__social-link">
							<FaLinkedin />
						</a>
						<a
							href="https://www.instagram.com"
							className="contact__social-link"
						>
							<FaInstagram />
						</a>
					</div>
				</div>

				<form className="contact__form" onSubmit={handleSubmit}>
					<div className="form__input-group">
						<div className="form__input-div">
							<input
								type="text"
								placeholder="Your Name"
								name="name"
								value={form.name}
								onChange={(e) => handleChange(e)}
								className="form__control"
							/>
						</div>

						<div className="form__input-div">
							<input
								type="email"
								placeholder="Your Email"
								value={form.email}
								onChange={(e) => handleChange(e)}
								name="email"
								className="form__control"
							/>
						</div>

						<div className="form__input-div">
							<input
								type="text"
								placeholder="Your Subject"
								name="subject"
								value={form.subject}
								onChange={(e) => handleChange(e)}
								className="form__control"
							/>
						</div>
					</div>

					<div className="form__input-div">
						<textarea
							placeholder="Your Message"
							name="message"
							value={form.message}
							onChange={handleChange}
							className="form__control textarea"
						></textarea>
					</div>

					<button className="button" type="submit"  >
						Send Message
						<span className="button__icon contact__button-icon">
							<FiSend />
						</span>
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
