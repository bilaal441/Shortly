import "core-js/stable";
import "regenerator-runtime/runtime";

import {TIMEOUT_SEC} from "./config.js";

const timeout = (s) =>
  new Promise((_, reject) => {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });

export const AJAX = async function (url) {
  try {
    const fetchData = fetch(url);

    const res = await Promise.race([fetchData, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (err) {
    throw err;
  }
};
