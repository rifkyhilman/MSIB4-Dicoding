import '../components/anime-list.js';
import '../components/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const animeListElement = document.querySelector('anime-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchAnime(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const onLoadPages = async () => {
    try {
      const result = await DataSource.getAll();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    animeListElement.anime = results.data;
  };

  const fallbackResult = message => {
    animeListElement.renderError(message);
  };

  onLoadPages();
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;