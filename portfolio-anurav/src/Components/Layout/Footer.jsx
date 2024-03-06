import "./Footer.scss"
import { ReactComponent as GithubIcon } from '../../Constants/Icons/github-icon.svg';
import { ReactComponent as LinkedInIcon } from '../../Constants/Icons/linkedin-icon.svg';


const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-text">
                    Copyright © 2024. All rights are reserved
                </div>
                <div className="footer-icons-container">

                    <div>
                        <LinkedInIcon />
                    </div>
                    <div>
                        <GithubIcon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;