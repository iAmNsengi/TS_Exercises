type status = "notfound" | "badrequest" | "ok";

type errorStatus = Record<status, number>;


const erroCodes: errorStatus = {
  notfound: 404,
  badrequest: 400,
  ok: 200,
};
