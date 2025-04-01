function ContactUs({tittle, type="white"}) {
	return (
		<div className="contactUs-container">
			<div className={`contactUs ${type === "white" ? "type-white":"type-black"}`}><span className="point"></span>{tittle}</div>
			<span className={`line ${type === "white" ? "type-white":"type-black"}`}></span>
			<div className={`contactUs-info ${type === "white" ? "type-white":"type-black"}`}><a href="#form">СВЯЗАТЬСЯ С НАМИ</a></div>

		</div>
	)

}

export default ContactUs;