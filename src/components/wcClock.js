class Component extends HTMLElement {
  constructor() {
    super(); // !required!
    this._hasShadow = true; // true or fals to disable or enable shadow dom
    this.dom = this._hasShadow ? this.attachShadow({ mode: "open" }) : this;
    this.instance = null; // used in polyfill step but could be executed differently
    this.loaded = false;
    this.main = null;
    this.face = null;
    this.stamp = null;

    this.hands = null;
    this.secondHand = null;
    this.minuteHand = null;
    this.hourHand = null;

    this.resizeInterval = null;

    // setup your template
    const template = document.createElement("template");

    const pointDegs = [
      { value: (5 / 60) * 360 + 90, point: 1 },
      { value: (10 / 60) * 360 + 90, point: 2 },
      { value: (15 / 60) * 360 + 90, point: 3 },
      { value: (20 / 60) * 360 + 90, point: 4 },
      { value: (25 / 60) * 360 + 90, point: 5 },
      { value: (30 / 60) * 360 + 90, point: 6 }
    ];

    // we're using innerHTML but you could manually create each element and add to this._elements for complex use-cases
    template.innerHTML = `
      <!-- template content -->
        <style>

        :host {
          max-width: 300px;
          position: relative;
          display: inline-block;
          width: var(--clock-width, 100%);
          height: var(--clock-width, 100%);
        }

        :host .clock  {
          border: 1px solid var(--clock-bg, #000);
          box-sizing: border-box;
        }

        :host .clock, 
        :host .clock .clock-points,
        :host .clock .clock-face {          
          width: 100%;
          height: 100%;
          overflow: hidden;  
          border-radius: 100%;
        }
        
        :host .clock .clock-face-center {
          width: 85%;
          height: 85%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          position: absolute;
          border-radius: 100%;
          background: var(--clock-bg, #fff);
        } 
        
        :host .clock .clock-face .hand {
          width: 45%;
          top: 50%;
          left: 5%;
          height: 2px;
          background: var(--clock-bg, #000);
          position: absolute;
          transform-origin: 100%;
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
          /* sets pivot point */
          transform: rotate(90deg);
        }

        :host .clock .clock-face .hand.sec-hand {
          display: var(--clock-hand-seconds-display, block);
        }

        :host .clock .clock-face .hand.hour-hand {
          display: var(--clock-hand-hours-display, block);
          width: 30%;
          top: 50%;
          left: 20%;
          height: 3px;
        }

        :host .clock .clock-face .hand.min-hand {
          display: var(--clock-hand-minutes-display, block);
          width: 35%;
          top: 50%;
          left: 15%;
        }

        :host .clock .clock-points {
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
        }

        :host .clock .clock-points .point-line {
          display: var(--clock-points-display, block);
          position: absolute;
          height: 100%;
          width: 2px;
          background: black;
          top: 0%;
          left: 50%;
          transform: translate(0, 0%)
        }

        :host .clock .clock-points .point-line.main {
          display: var(--clock-points-main-display, block);
        }        

        :host [data-display="false"] {
          display: none;
        }

        </style>

      <div class="clock" tabindex="0">
        <div aria-hidden="true" class="clock-points">
         ${pointDegs.map(i => this.renderPointLine(i)).join("")}          
        </div>
        <div aria-hidden="true" class="clock-face-center"></div>
        <div aria-hidden="true" class="clock-face">           
          <div class="hand hour-hand"></div>  
          <div class="hand min-hand"></div> 
          <div class="hand sec-hand"></div>           
        </div> 
      </div>
      `;

    /* Style Polyfill Step 1 */
    if (window.ShadyCSS) ShadyCSS.prepareTemplate(template, Component.tag); // eslint-disable-line
    /* END Style Polyfill Step 1 */

    this.instance = document.importNode(template.content, true); // copy template contents into 'this'

    /* Style Polyfill Step 2 */
    if (window.ShadyCSS) ShadyCSS.styleElement(this); // eslint-disable-line
    /* END Style Polyfill Step 2 */

    this.dom.appendChild(this.instance);

    return this;
  }

  // default tag for component, makes registering much easier
  static get tag() {
    return "wc-clock";
  }

  static get observedAttributes() {
    return ["data-timestamp"];
  }

  get timestamp() {
    return +this.stamp;
  }

  set timestamp(stamp) {
    this.stamp = +stamp;
    this.positionHands(stamp);
  }

  renderPointLine(point) {
    return `
      <div 
        class="point-line${[6, 3].includes(point.point) ? " main" : ""}" 
        style="transform: translate(-50%, 0%) rotate(${point.value}deg)">
      </div>    
    `;
  }

  updateWidth(widthInPx = this.main.getBoundingClientRect().width) {
    this.main.style.height = `${widthInPx}px`;
    this.main.style.visibility = "visible";
  }

  handleResize() {
    this.main.style.visibility = "hidden";
    clearTimeout(this.resizeInterval);
    this.resizeInterval = setTimeout(() => this.updateWidth(), 250);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return false; // if value hadn't changed do nothing

    if (name === "data-timestamp") {
      this.timestamp = newValue;
      this.positionHands(newValue);
      this.face.style.display = "";
    }

    return this;
  }

  connectedCallback() {
    const hands = Array.from(this.dom.querySelectorAll(".clock .hand"));
    this.main = this.dom.querySelector(".clock");
    this.face = this.dom.querySelector(".clock-face");
    this.secondHand = hands.find(el => el.className.includes("sec-hand"));
    this.minuteHand = hands.find(el => el.className.includes("min-hand"));
    this.hourHand = hands.find(el => el.className.includes("hour-hand"));
    this.hands = hands;
    this.updateWidth();
    window.addEventListener("resize", e => this.handleResize());
    const D = new Date()
      .setMinutes(0)
      .setSeconds(0)
      .getTime();
    this.positionHands(D);
  }

  disconnectedCallback() {
    window.removeEventListener("resize", e => this.handleResize());
  }

  positionHands(timestamp) {
    const D = new Date(+timestamp);

    // daylight savings time
    D.setTime(D.getTime() + D.getTimezoneOffset() * 60 * 1000);

    const secs = D.getSeconds();
    const mins = D.getMinutes();
    const hour = D.getHours();

    const secsDegs = (secs / 60) * 360 + 90;
    const minsDeg = (mins / 60) * 360 + 90;
    const hoursDeg = (hour / 12) * 360 + 90;

    this.secondHand.style.transform = `rotate(${secsDegs}deg)`;
    this.minuteHand.style.transform = `rotate(${minsDeg}deg)`;
    this.hourHand.style.transform = `rotate(${hoursDeg}deg)`;
  }

  // better to use default, predefined tag for css polyfill
  // this could be done externally, but having a method that does it for you is easier
  static register() {
    if (window.customElements.get(Component.tag) === undefined) {
      window.customElements.define(Component.tag, Component);
    }
  }
}

// magic that registers the tag
export default Component;
