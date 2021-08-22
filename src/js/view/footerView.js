import View from "./view.js";
import logoFooter from "../../images/footer-logo.svg";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
class Footer extends View {
  _parentElement = document.querySelector(".footer");

  constructor() {
    super();
    this.render();
  }

  _generateMarkup() {
    return `
    <div class="footer-logo">
    <img src="${logoFooter}" alt="shortly" />
  </div>
  <a href="" class="footer-link"></a>
  <div class="footer-box">
    <h4 class="footer-box__logo">Features</h4>
    <ul class="footer-item_container">
      <li class="footer-item">
        <a href="#" class="footer-link">Link Shortening</a>
      </li>
      <li class="footer-item">
        <a href="#" class="footer-link">Branded Links</a>
      </li>
      <li class="footer-item">
        <a href="#" class="footer-link">Analytics</a>
      </li>
    </ul>
  </div>
  <div class="footer-box">
    <h4 class="footer-box__logo">Resources</h4>
    <ul class="footer-item_container">
      <li class="footer-item">
        <a href="#" class="footer-link">Blog</a>
      </li>
      <li class="footer-item">
        <a href="#" class="footer-link">Developers</a>
      </li>
      <li class="footer-item">
        <a href="#" class="footer-link">Support</a>
      </li>
    </ul>
  </div>
  <div class="footer-box">
    <h4 class="footer-box__logo">Company</h4>
    <ul class="footer-item_container">
      <li class="footer-item">
        <a href="#" class="footer-link">About</a>
      </li>
      <li class="footer-item">
        <a href="#" class="footer-link">Our Team</a>
      </li>
      <li class="footer-item">
        <a href="#" class="footer-link">Careers</a>
      </li>
      <li class="footer-item">
        <a href="#" class="footer-link">Contact</a>
      </li>
    </ul>
  </div>
  <div class="footer-social">
  <a href="https://en-gb.facebook.com/">
  <img src="${facebook}" alt="facebook" class="footer-social-icon" />
    
  </a>
  <a href="https://twitter.com/?lang=en-gb">
  <img src="${twitter}" alt="twitter" class="footer-social-icon" />
    
  </a>
  <a href="https://www.pinterest.co.uk/pinterest/">
  <img src="${pinterest}" alt="pinstrest" class="footer-social-icon" />
    
  </a>
  <a href="https://www.instagram.com/">
  <img src="${instagram}" alt="instagram" class="footer-social-icon" />
    
  </a>
      </div>
 `;
  }
}

export default new Footer();
