//const escapeHtml = require('escape-html');

//TODO how to especify a name different from function.js and how to 
// deploy this lib escape-html without error

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.myHelloHttp = (req, res) => {
  //res.send(`Hello ${escapeHtml(req.query.name || req.body.name || 'World')}!`);
  res.send('Hello World! ');
};
