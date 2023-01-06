import Country from "./country";

export default function index({ start, limit, height, width }) {
  var data = Country({ start, limit });
  return data;
}
