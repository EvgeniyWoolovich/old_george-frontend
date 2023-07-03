import "./footer.css";

export const Footer = () => {
    return (
        <footer className="footer" id="myContact">
            <div className="footer__text-container">
                <span className="footer__text">Ждём Вас в гости:</span>
                <span className="footer__text">Ресторан:</span>
                <span className="footer__text">ПН-ЧТ, ВС 12:00-24:00</span>
                <span className="footer__text">ПТ, СБ 12:00-1:00</span>
            </div>
            <div className="footer__logo">
                <a className="footer__logo-link" href="">СГ</a>
            </div>
            <div className="footer__social-link-container">
                <a href="tel:+78362494646" className="footer__social-link">
                    <img src="/image/headerIcon/telephoneIcon.svg" alt="" className="footer__social-image" />
                    <span className="footer__social-text">+7(8362)49-46-46</span>
                </a>
                <a href="https://vk.com/oldgeorge" className="footer__social-link" target="_blank">
                    <img src="/image/headerIcon/vkIcon.svg" alt="" className="footer__social-image" />
                    <span className="footer__social-text">vk.com/oldgeorge</span>
                </a>
                <a href="https://instagram.com/old_georg/" className="footer__social-link" target="_blank">
                    <img src="/image/headerIcon/instagram.svg" alt="" className="footer__social-image" />
                    <span className="footer__social-text">instagram.com/old_georg/</span>
                </a>
            </div>
        </footer>
    )
}