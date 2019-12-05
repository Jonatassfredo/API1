"use strict";

const app = require("./bin/express");
const variables = require("./bin/configuration/variables");

app.listen(variables.Api.port, () => {
    console.info(`API START ON PORT ${variables.Api.port}`);
});