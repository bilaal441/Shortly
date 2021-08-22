import View from "./view.js";
import iconBrand from "../../images/icon-brand-recognition.svg";
import iconDetailed from "../../images/icon-detailed-records.svg";
import iconCustomizable from "../../images/icon-fully-customizable.svg";

class features extends View {
  _parentElement = document.querySelector(".Features");

  constructor() {
    super();
    this.render();
  }

  _generateMarkup() {
    return `

    <div class="shorten">
    <div class="shorten-links">
    <input
      type="text"
      class="shorten-field"
      placeholder="Shorten a link here"
    />
    <div class="message">please add a link</div>
    <button class="btn-secondery">Shorten It!</button>
  </div>
    </div>
    <div class=" intro flex">
        <h2 class="title">Advanced Statistics</h2>
        <p class="stat-content">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div class="stats flex">
        <div class="feature">
          <div class="stat-icon">
            <img src="${iconBrand}" alt="" />
          </div>
          <h2 class="title">Brand Recognition</h2>
          <p class="stat-content">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div class="feature">
          <div class="stat-line"></div>
          <div class="stat-icon">
            <img src="${iconDetailed}" alt="" />
          </div>
          <h2 class="title">Detailed Records</h2>
          <p class="stat-content">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div class="feature">
          <div class="stat-line"></div>
          <div class="stat-icon">
            <img src="${iconCustomizable}" alt="" />
          </div>
          <h2 class="title">Fully Customizable</h2>
          <p class="stat-content">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>

 `;
  }
}

export default new features();
