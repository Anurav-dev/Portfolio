import "./Contact.scss"

const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <div className="heading">
                    CONTACT
                </div>
                <div className="sub-heading">
                    Don't be shy! Hit me up! 👇
                </div>
                <div className="contact-info">
                    <div className="contact-info-location">
                        <div>
                            <div className="contact-info-icon">

                            </div>
                            <div className="contact-info-details">
                                Location <br />
                                Bangalore,KA
                            </div>
                        </div>
                    </div>

                    <div className="contact-info-mail">
                        <div>
                            <div className="contact-info-icon">

                            </div>
                            <div className="contact-info-details">
                                Mail <br />
                                anuravgupta22@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;