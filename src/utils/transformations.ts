export const jsonToQueryString = (json: any) =>
  '?' +
  Object.keys(json)
    .map(key => key + '=' + json[key])
    .join('&');
