import { User } from "../omit";

type status = 404 | 403 | 500;

type error = Exclude<status, 404>;

// this wont happen hence the type was excluded
// let notfound: error = 404;
