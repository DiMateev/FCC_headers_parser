module.exports = (app) => {
  
  app.get("/", function (request, response) {
    // Get IP address
    var ip = request.headers['x-forwarded-for'].split(',')[0];
    // Get system locale
    var language = request.headers['accept-language'].split(',')[0];
    // Get system information
    var str = request.headers['user-agent'];
    var system = str.substring(str.indexOf('(') + 1, str.indexOf(')'));
    var obj = {
      ipaddress: ip,
      language: language,
      software: system
    }
    response.end(JSON.stringify(obj));
  });
  
};
