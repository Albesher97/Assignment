const { Pool, Client } = require("pg");
require("dotenv").config();

export const pg = new Client({
  host: "ec2-34-241-90-235.eu-west-1.compute.amazonaws.com",
  user: "fdjafjwswpnhmw",
  port: "5432",
  password: "847d3f4afecd606194cf371a3d5f14199bf0830e24c2085a9f2b05e534c8467c",
  database: "dfu0sasmrj9v5h",
  ssl: true,
});
pg.connect().then(() => {});
