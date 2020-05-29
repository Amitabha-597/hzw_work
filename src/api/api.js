import $api from "./request.js";

export function Index(data) {
  return $api.get("/index/index", {
    params: data,
  });
}
