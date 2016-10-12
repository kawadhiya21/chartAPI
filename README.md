# ChartAPI - An API to generate images for charts
This API generates images from google charts are for the record any charting library you want. The charts are not interactive. The images generated from the chart can be used to showcase data where a browser is not available. This is particularly useful when generating data for emails, presentations or simply, distributions or even printing. Chart images can be cached to be used over a period of time. This also eliminates the need to load a charting library.

#### Requirements
* NodeJS
* [PhantomJS binary](http://phantomjs.org/)

## Instructions to use
#### Download and installation
First of all download the phantomjs binary and place it at a directory which is accessible to your application. Next setup the server by:
```
npm install
```

#### Server
You can add routes and paths to the server for making various graphs and charts. The data can be fetched for each call using ajax in the headless browser. An example routes `/line_chart` has been added for reference.

#### Run the server
Simply do `node index.js`. This will run the server. There are many ways to run it permanently which will not be discussed here. Simplest is to simply assign it a random domain like `chartmaker.yourdomain.com` at `nginx` level and keep it alive using [forever](https://www.npmjs.com/package/forever).

Check the route set in `index.js` and the template rendered by it.

You can access your charts by `http://chartmaker.yourdomain.com/line_chart` and check the chart.

#### Make graph data dynamic
Now data passing around may seem weird but there are few ways.

1. You can pass data in url `http://chartmaker.yourdomain.com/line_chart\?id\=2\&data\=\[12\,4\,6\,8]\&....` and so on.
2. It would be convenient to just pass an id and fetch rest of the data in the template. Example:

```
URL - http://chartmaker.yourdomain.com/line_chart?id=4
// In the views/line_chart.html template
<script>
    ..
    ..
    ..
    .
    .
    $.ajax({
        url: 'http://yourdomain.com/get_data_for_line_chart?id={{ id }}',
        success: function(response) {
            data.addRows(JSON.parse(response).data);
            chart.draw(data, options);
        }
    });
</script>
```

#### Generate the graph
This needs to execute from your application as a shell script.

```
'/path_to_phantomjs' '/path_to_rasterize.js' 'http://chartmaker.yourdomain.com/line_chart?id=4' '/output_file_path'
```

### Examples
#### Ruby

```
system("'/path_to_phantomjs' '/path_to_rasterize.js' 'http://chartmaker.yourdomain.com/line_chart?id=4' '/output_file_path'")
```

#### Python
```
import subprocess
subprocess.call(["'/path_to_phantomjs' '/path_to_rasterize.js' 'http://chartmaker.yourdomain.com/line_chart?id=4' '/output_file_path'"])
```

#### PHP
```
shell_exec("'/path_to_phantomjs' '/path_to_rasterize.js' 'http://chartmaker.yourdomain.com/line_chart?id=4' '/output_file_path'")
```

#### Upload
The image can be uploaded to S3 or wherever you want.

### [Optional] RasterizeJS
Explore ways to play with rasterize. I took the script from [here](https://github.com/ariya/phantomjs/blob/master/examples/rasterize.js). I did tweak it a bit but you can do a lot.
