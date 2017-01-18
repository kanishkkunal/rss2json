/* Import dependencies, declare constants */

/**
* Your function call
* @param {Object} params Execution parameters
*   Members
*   - {Array} args Arguments passed to function
*   - {Object} kwargs Keyword arguments (key-value pairs) passed to function
*   - {String} remoteAddress The IPv4 or IPv6 address of the caller
*
* @param {Function} callback Execute this to end the function call
*   Arguments
*   - {Error} error The error to show if function fails
*   - {Any} returnValue JSON serializable (or Buffer) return value
*/
var Feed = require('rss-to-json');

module.exports = (params, callback) => {
  if(params.kwargs.url && params.kwargs.url.length != 0) {
    Feed.load(params.kwargs.url, function(err, rss){
        callback(null, rss);
    });
  }
  else {
    callback('Please provide a url', null);
  }
};
