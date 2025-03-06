import http from "./httpService";

export function getCategoriesApi(options) {
  return http.get("/category/list", options).then(({ data }) => data.data);
}
