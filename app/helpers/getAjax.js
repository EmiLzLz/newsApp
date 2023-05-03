import { NewsCard } from "../components/NewsCard.js";
import { ajax } from "./ajax.js";
import api from "./api.js";

/**
 * This function retrieves data from an API based on a given category and displays it on the webpage.
 * @param category - The category parameter is a string that represents the category of news to be
 * fetched from the API. It is used to construct the URL for the API request.
 */
export async function getAjax(category) {
  const $main = document.getElementById("main");
  await ajax({
    url: api[category],
    cbSuccess: (category) => {
      console.log(category.data)
      let allNews = category.data;
      let html = "";
      allNews.forEach((elem) => (html += NewsCard(elem)));
      $main.innerHTML = html;
    },
  });

  document.querySelector(".loader").style.display = "none";
}
