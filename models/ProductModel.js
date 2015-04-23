var mongo = require('../db/Mongo');

function ProductModel(db) {
  this.db = db;
  this.collection = db.collection('products');
}

ProductModel.prototype.find = function(query, callback) {
  this.collection.find(query, callback);
};
ProductModel.prototype.findOne = function(_id, callback) {
  this.collection.findOne({ _id: mongo.ObjectId(_id) }, callback);
};
ProductModel.prototype.create = function(data, callback) {
  this.collection.insert(data, callback);
};
ProductModel.prototype.update = function(data, _id, callback) {
  this.collection.update({ _id: mongo.ObjectId(_id) }, data, callback);
};
ProductModel.prototype.delete = function(_id, callback) {
  this.collection.remove({ _id: mongo.ObjectId(_id) }, callback);
};

module.exports = new ProductModel(mongo);
