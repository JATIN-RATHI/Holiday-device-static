const contentful = require('contentful');
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: "8053dpll6ke8",
  accessToken: "3-PBVPuoy2fBN0gmiQ7B0BdB721TQM6DHge5xu2eoRw",
  environment: "master",
  host: "preview.contentful.com",
  resolveLinks: true,
  removeUnresolved: true,
  logHandler: (level: any, data: any) => {
    console.log(`leve: ${ level } | data: ${ data }`)
  },
};

// export `createClient` to use it in page components
export const contentfulClient = contentful.createClient(config)