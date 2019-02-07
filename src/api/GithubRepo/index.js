import API from "@/api/base";
const baseUrl = "https://api.github.com/search/repositories?q=";

function sort(order) {
  if (order === true) {
    return ":>1";
  } else {
    return ":<1";
  }
}

const getRepoBy = async (query, order, limit = 10) => {
  const search = `${baseUrl}${query}${sort(order)}&per_page=${limit}`;
  return await API.get(search);
};

export default {
  getRepoBy
};
