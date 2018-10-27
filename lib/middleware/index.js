import { json, urlencoded } from 'body-parser';

export default [
  json(),
  urlencoded({ extended: true }),
];
