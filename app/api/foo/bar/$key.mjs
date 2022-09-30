// View documentation at: https://docs.begin.com
export async function get(req) {
  return {
    json: { pathParameters: req.pathParameters, params: req.params },
  };
}
