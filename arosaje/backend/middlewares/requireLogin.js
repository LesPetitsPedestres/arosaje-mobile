const requireLogin = (req, res, next) => {
    if (req.cookies && req.cookies.userId) {
      next();
    } else {
      res.status(401).send('Vous devez être connecté pour accéder à cette page');
    }
  };
  
  module.exports = requireLogin;
  