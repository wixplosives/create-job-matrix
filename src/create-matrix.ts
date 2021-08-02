import * as core from "@actions/core";

const platform = core.getInput("os");
let platformJSON = "";
switch (platform) {
  default:
    platformJSON = `\"platform\":[\"${platform}-latest\"]`;
    break;
}
const matrixJSON = `{${platformJSON}}`;
core.setOutput("matrix", matrixJSON);