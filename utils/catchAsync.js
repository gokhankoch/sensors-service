module.exports = fn => {
  // return a function
  return (req, res, next) => {
    fn(req, res, next).catch(err => next(err));
  };
};
