import {AJAX} from "./Helper.js";
import {API_URL} from "./config.js";

export const state = {
  currunt: {},
};

const createResultObj = function (data) {
  const {result} = data;
  return {
    originalLink: result.original_link,
    shortLink: result.short_link,
  };
};

export const getDatata = async function (input) {
  try {
    const data = await AJAX(`${API_URL}shorten?url=${input}`);
    console.log(data);
    state.currunt = createResultObj(data);
  } catch (err) {
    throw err;
  }
};
