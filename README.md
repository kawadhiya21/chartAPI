# ChartAPI - An API to generate images for charts
This API generates images from google charts. This eliminates the need of browser to showcase a particular chart. The charts are not interactive.

#### Requirements
* NodeJS
* [PhantomJS binary](http://phantomjs.org/)

## Instructions to use
Once you are done installing using npm, you need to start the server using `node index.js`. The server configurations are in `index.js` itself. The server will serve the html version of charts. Now `phantomjs` binary will convert this to a chart image by taking the screenshot and clipping it.

Detailed stuff coming up ...
