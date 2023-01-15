const contentful = require('contentful');
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: process.env.CTF_SPACE_Id,
  accessToken: process.env.CTF_ACCESS_TOKEN,
  environment: process.env.CTF_ENV,
  host: process.env.CTF_HOST,
  resolveLinks: true,
  removeUnresolved: true,
  logHandler: (level: any, data: any) => {
    console.log(`leve: ${ level } | data: ${ data }`)
  },
};

// export `createClient` to use it in page components
export const contentfulClient = contentful.createClient(config)