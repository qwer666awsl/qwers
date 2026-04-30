export const config = {
  runtime: 'edge',
};

export default async function (req: Request) {
  const url = new URL(req.url);
  // 把请求转发到 Google 官方 API
  const proxyUrl = 'https://generativelanguage.googleapis.com' + url.pathname + url.search;

  const newRequest = new Request(proxyUrl, {
    method: req.method,
    headers: req.headers,
    body: req.body,
  });

  return fetch(newRequest);
}
