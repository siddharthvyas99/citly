import axios from "axios";

const list = () => axios.get("/links");

const create = payload => axios.post("/links/", payload);

const show = slug => axios.get(`/links/${slug}`);

const update = slug => axios.put(`/links/${slug}`);

const linksApi = {
  list,
  create,
  show,
  update,
};

export default linksApi;
