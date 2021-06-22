function printError() {
  console.warn("ERROR(1): sadly i cant inject the additional links atm, try to reload later.");
}
class DomWorker {
  constructor() {
    var xpath = "//a[@data-action='click:get-repo#showDownloadMessage']";

    var matchingElement = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    if (matchingElement) {
      try {
        this.BaseElement = matchingElement.parentElement.parentElement;
      } catch (e) {
        printError();
      }
    } else {
      printError();
    }
  }

  createAction({ TITLE, FN, LOGO }) {
    if (!this.BaseElement) {
      return null;
    }
    /* 
     * ├─<ListItem>
     * │ ├─ <ActionItem>
     * │ │  ├─ Logo
     * │ │  ├─ Title
     * │ ├─ </ActionItem>
     * ├─</ListItem>
     */

    try {
      let ListItem = document.createElement("li");
      let ListItemStyle = "Box-row Box-row--hover-gray p-0";
      ListItem.className = ListItemStyle;
      this.BaseElement.appendChild(ListItem);


      let ActionItem = document.createElement("a");
      let LinkItemStyle = "d-flex flex-items-center color-text-primary text-bold no-underline p-3";
      ActionItem.className = LinkItemStyle;
      ActionItem.href = "#";
      ActionItem.onclick = FN;
      ActionItem.innerHTML = LOGO + TITLE

      ListItem.appendChild(ActionItem)
    }
    catch (e) {
      printError();
    }
  }
}

const DomWorkerInstance = new DomWorker();

DomWorkerInstance.createAction({
  TITLE: "View with Github1s",
  FN: function () {
    let curLocation = window.location.href;

    let newLocation = curLocation.replace("github.com/", "github1s.com/");

    window.open(newLocation, "_blank");
  },
  LOGO: `
    <svg class="octicon octicon-desktop-download mr-3" viewBox="0 0 16 16"  width="16" height="16" viewBox="0 0 16 16">
      <g transform="matrix(5.48895,0,0,5.48895,-17.2945,-36.0366)">
        <g transform="matrix(2.79209,0,0,2.79209,3,9)">
            <path d="M0.446,-0.7L0.306,-0L0.07,-0L0.174,-0.522L0.054,-0.522L0.09,-0.7L0.446,-0.7Z" style="fill-rule:nonzero;"/>
        </g>
        <g transform="matrix(2.79209,0,0,2.79209,4.16709,9)">
            <path d="M0.28,0.016C0.219,0.016 0.162,0.01 0.109,-0.004C0.056,-0.017 0.012,-0.034 -0.023,-0.055L0.068,-0.229C0.143,-0.186 0.222,-0.164 0.304,-0.164C0.334,-0.164 0.357,-0.168 0.373,-0.175C0.389,-0.182 0.397,-0.192 0.397,-0.205C0.397,-0.217 0.389,-0.227 0.373,-0.234C0.356,-0.241 0.33,-0.249 0.295,-0.258C0.248,-0.27 0.21,-0.282 0.179,-0.295C0.148,-0.307 0.122,-0.326 0.099,-0.352C0.076,-0.377 0.064,-0.411 0.064,-0.453C0.064,-0.506 0.078,-0.552 0.107,-0.592C0.135,-0.631 0.176,-0.662 0.229,-0.684C0.282,-0.705 0.345,-0.716 0.418,-0.716C0.47,-0.716 0.519,-0.711 0.564,-0.701C0.608,-0.69 0.647,-0.675 0.68,-0.656L0.595,-0.484C0.568,-0.501 0.538,-0.514 0.505,-0.523C0.472,-0.532 0.438,-0.536 0.403,-0.536C0.37,-0.536 0.345,-0.531 0.327,-0.522C0.309,-0.513 0.3,-0.502 0.3,-0.489C0.3,-0.476 0.308,-0.466 0.325,-0.459C0.341,-0.452 0.368,-0.444 0.405,-0.435C0.45,-0.424 0.489,-0.413 0.52,-0.401C0.551,-0.389 0.577,-0.37 0.6,-0.345C0.623,-0.32 0.634,-0.286 0.634,-0.245C0.634,-0.193 0.62,-0.147 0.591,-0.108C0.562,-0.069 0.521,-0.038 0.468,-0.017C0.415,0.005 0.352,0.016 0.28,0.016Z" style="fill-rule:nonzero;"/>
        </g>
      </g>
    </svg>
  `
});