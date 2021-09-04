import "core-js/stable";
import "regenerator-runtime/runtime";

import style from "../scss/main.scss";
import header from "./view/header.js";
import showcase from "./view/showcase.js";
import features from "./view/featuresView.js";
import boostView from "./view/boostView.js";
import footerView from "./view/footerView.js";
import Search from "./view/searcchView.js";
import resultView from "./view/resultView.js";
import * as model from "./module.js";

const controllShortingLinks = async function () {
  try {
    const quary = Search.getQuery();
    if (!quary) return;
    Search.warnUser(quary);
    Search.addSpinerbtn();
    await model.getDatata(quary);
    console.log(quary);
    resultView.render(model.state.currunt);
    Search.removeSpinerbtn();
    console.log();
  } catch (err) {
    resultView.renderError();
    console.log(err);
  }
};

const init = function () {
  Search.addHandlerSearch(controllShortingLinks);
};
init();
