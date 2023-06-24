
// import { config } from 'dotenv';

const setEnv = () => {
  // Configure Angular `environment.ts` file path
  const targetPath = './src/app/environment/environment.ts';
  // Load node modules
  require('dotenv').config({
    path: 'src/app/environment/.env',
  });
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
  API_KEY: '${process.env['API_KEY']}',
  production: true,
};
`;

  require("fs").writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      );
    }
  });
};

setEnv();
