import * as core from "@actions/core";

async function run(): Promise<void> {
  try {
    const platform = core.getInput("os");
    let platformJSON = "";
    switch (platform) {
      default:
        platformJSON = `\"platform\":[\"${platform}-latest\"]`;
        break;
    }
    const matrixJSON = `{${platformJSON}}`;
    core.setOutput("matrix", matrixJSON);
  } catch (error) {
    core.setFailed(error.message);
  }
}
run();
