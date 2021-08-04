# create-job-matrix
Returns a string representing a a job-matrix that can be passed to a subsequent job
 
Usage
---
first add the following input to your workflow:
```
      platform:
        description: 'operating system'
        required: true
        default: 'Ubuntu'
```

then add a the following step into your workflow:
```  
get-platform-matrix:
    runs-on: 'ubuntu-latest'
    outputs:
      matrix: ${{ steps.create-job-matrix.outputs.matrix }}
    steps:
      - id: create-job-matrix
        uses: wixplosives/create-job-matrix@master
        with:
          os: ${{ github.event.inputs.platform }}
```

and then pass the resulting string into your strategy as follow:
```
  myJob1:
    needs: get-platform-matrix
    strategy:
      matrix: ${{fromJson(needs.get-platform-matrix.outputs.matrix)}}
    runs-on: ${{ matrix.platform }}
```
Supported Inputs
---
**platform** : Ubuntu | MacOS | Windows | All

Outputs
---
* ``\"platform\":[\"${platform}-latest\"]`` (Ubuntu, MacOS, All)
* ``\"platform\":[\"'Ubuntu-latest","Windows-latest","MacOS-latest'\"]`` (All)
