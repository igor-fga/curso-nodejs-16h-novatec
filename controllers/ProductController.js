function ProductController() {}

ProductController.prototype.getAll = function(req, res, next) {
  res.send('GET ALL');
};
ProductController.prototype.create = function(req, res, next) {
  res.send('POST');
};
ProductController.prototype.getById = function(req, res, next) {
  res.send('GET ID');
};
ProductController.prototype.update = function(req, res, next) {
  res.send('PUT ID');
};
ProductController.prototype.delete = function(req, res, next) {
  res.send('DELETE ID');
};

module.exports = new ProductController();
