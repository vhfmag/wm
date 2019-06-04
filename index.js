const micro = require('micro');
const check = require('./routes/check');
const auth = require('./routes/auth');
const { send } = micro;

const dev = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url.startsWith('/api/check')) {
    return await check(req, res);
  }

  if (req.url.startsWith('/auth')) {
    return await auth(req, res);
  }

  send(res, 404, '404. Not found.');
};

const server = micro(dev);

server.listen(3030);