class DataSource {
  static searchAnime(keyword = "") {
    let url = "https://api.jikan.moe/v4/anime"
    if(keyword) {
      url += `?q=${keyword}`
    }
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }

  static getAll() {
    return this.searchAnime("")
  }
}

export default DataSource;