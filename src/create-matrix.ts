import * as core from "@actions/core";

const ALL_PLATFORMS = 'Ubuntu-latest","Windows-latest","MacOS-latest';

async function run(): Promise<void> {
  try {
    let platform = core.getInput("os");
    platform =
      platform.toLowerCase() == "all" ? ALL_PLATFORMS : `${platform}-latest`;
    const platformJSON = `\"platform\":[\"${platform}\"]`;
    const matrixJSON = `{${platformJSON}}`;
    core.setOutput("matrix", matrixJSON);
  } catch (error) {
    core.setFailed(error.message);
  }
}
run();
