import { VerifyOriginFn } from "../@types/app.utils";

const whiteList:string[] = ['http://localhost:3001', 'https://kinghub-anime.netlify.app'];

export const verifyOrigin:VerifyOriginFn = (origin, callback) => {

  if (whiteList.indexOf(origin || '') === -1 || !origin) {

    var msg = 'The CORS policy for this site does not allow access from the specified Origin.';

    return callback(new Error(msg), false);

  }

  return callback(null, true);

}