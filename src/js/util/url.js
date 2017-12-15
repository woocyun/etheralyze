export default function buildPath (basePath, queryParams) {
  return Object.keys(queryParams)
    .map(key => ({ key, val: queryParams[key] }))
    .reduce((prev, curr, idx) => {
      if (idx === 0) {
        return prev + `?${ curr.key }=${ curr.val }`;
      } else {
        return prev + `&${ curr.key }=${ curr.val }`;
      }
    }, basePath);
}