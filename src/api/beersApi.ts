import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.punkapi.com/v2/",
});

export type beers = {
  id: number;
  name: string;
  description: string;
  image_url: string;
};

export type beer = {
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  abv: number;
  food_pairing: string[];
};

const beersApi = {
  search_text: "",
  page: 1,

  _createURL(name: string, page: number): string {
    return name
      ? `beers?beer_name=${name}&per_page=30&page=${page}`
      : `beers?per_page=30&page=${page}`;
  },

  async getBeers(search_text: string) {
    this.search_text = search_text;
    this.page = 1;
    const res = await instance.get<beers[]>(
      this._createURL(this.search_text, this.page)
    );
    return res.data;
  },
  async loadMoreBeers() {
    this.page++;
    const res = await instance.get<beers[]>(
      this._createURL(this.search_text, this.page)
    );
    return res.data;
  },
  async getBeer(id: string) {
    const res = await instance.get<beer[]>(`beers/${id}`);
    return res.data;
  },
};

export default beersApi;
