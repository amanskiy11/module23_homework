import React, { Component } from "react";
import "../../dist/base.css";
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="copyright">© SkillDrive Inc. 2020</div>
                <div className="socialLinks">
                    <ul>
                        <li className="footerSocial"><a href=""><img src="./src/images/vkontakte.svg"
                                                                     alt="ссылка VKontakte" className="socialLogo" /></a>
                        </li>
                        <li className="footerSocial"><a href=""><img src="./src/images/instagram.svg"
                                                                     alt="ссылка Instagram" className="socialLogo" /></a>
                        </li>
                        <li className="footerSocial"><a href=""><img src="./src/images/facebook.svg" alt="ссылка Facebook"
                                                                     className="socialLogo" /></a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}
export default Footer;