const slugify = (value = "") => value
  .toString()
  .normalize("NFKD")
  .trim()
  .toLowerCase()
  .replace(/[^\p{L}\p{N}]+/gu, "-")
  .replace(/^-+|-+$/g, "");

export default slugify;

