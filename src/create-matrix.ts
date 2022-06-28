import * as core from "@actions/core";

const ALL_PLATFORMS = 'ubuntu-latest","windows-electron","macos-latest';

async function run(): Promise<void> {
  try {
    let platform = core.getInput("os");    
    switch(platform.toLowerCase()) { 
      case "all": { 
          platform = ALL_PLATFORMS
          break; 
      } 
      case "windows": { 
          platform = "windows-electron"
          break; 
      } 
      default: { 
          platform = `${platform}-latest`
          break; 
      } 
    }   
    const platformJSON = `\"platform\":[\"${platform}\"]`;
    const matrixJSON = `{${platformJSON}}`;
    core.setOutput("matrix", matrixJSON);
  } catch (error) {
    core.setFailed(error.message);
  }
}
run();
