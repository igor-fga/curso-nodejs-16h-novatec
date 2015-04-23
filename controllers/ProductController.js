var ProductModel = require('../models/ProductModel');

function ProductController(Model) {
  this.Model = Model;
}

ProductController.prototype.getAll = function(req, res, next) {
  this.Model.find({}, function(err, result){
    if (err) {
      return next(err);
    }
    res.json(result);
  });
};
ProductController.prototype.getById = function(req, res, next) {
  var _id = req.params._id;
  this.Model.findOne(_id, function(err, result){
    if (err) {
      return next(err);
    }
    res.json(result);
  });
};
ProductController.prototype.create = function(req, res, next) {
  this.Model.create(req.body, function(err, result){
    if (err) {
      return next(err);
    }
    res.json(result);
  });
};
ProductController.prototype.update = function(req, res, next) {
  var _id = req.params._id;
  this.Model.update(req.body, _id, function(err, result){
    if (err) {
      return next(err);
    }
    res.json(result);
  });
};
ProductController.prototype.delete = function(req, res, next) {
  var _id = req.params._id;
  this.Model.delete(_id, function(err, result){
    if (err) {
      return next(err);
    }
    res.json(result);
  });
};

module.exports = new ProductController(ProductModel);
