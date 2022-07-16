import { VerifyOriginFn } from "../@types/app.utils";

const whiteList:string[] = ['http://localhost:3000'];

export const verifyOrigin:VerifyOriginFn = (origin, callback) => {

  if (!origin) return callback(null, true);

  if (whiteList.indexOf(origin) === -1) {

    var msg = 'The CORS policy for this site does not ' +
    'allow access from the specified Origin.';

    return callback(new Error(msg), false);

  }

  return callback(null, true);

}