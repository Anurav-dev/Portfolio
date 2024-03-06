import "./Contact.scss"
import { ReactComponent as LocationIcon } from '../../Constants/Icons/address-icon.svg';
import { ReactComponent as MailIcon } from '../../Constants/Icons/mail-icon.svg';

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
                        <div className="contact-info-container">
                            <div className="contact-info-icon">
                                <LocationIcon />
                            </div>
                            <div className="contact-info-details">
                                <span>Location</span><br />
                                Bangalore, INDIA
                            </div>
                        </div>
                    </div>

                    <div className="contact-info-mail">
                        <div className="contact-info-container">
                            <div className="contact-info-icon">
                                <MailIcon />
                            </div>
                            <div className="contact-info-details">
                                <span>Mail</span><br />
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