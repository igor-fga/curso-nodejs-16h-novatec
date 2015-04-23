var request = require('supertest'),
    debug   = require('debug')('curso:test'),
    assert  = require('assert'),
    mongo   = require('../../db/Mongo'),
    app     = require('../../app');

describe('Products Endpoints', function() {
  beforeEach(function(done){
    mongo.collection('products').remove({}, done);
  });

  it('GET /products | returns all products', function(done) {
    mongo.collection('products').insert({ name: 'Jane Doe' }, function(err, result) {
      var _id = result._id.toString();

      request(app)
        .get('/products')
        .expect(200)
        .end(function(err, result) {
          var data = result.body;

          assert.equal(data.length, 1);
          assert.deepEqual(data, [ { _id: _id, name: 'Jane Doe' } ]);
          done();
        });
    });
  });

  it('GET /products/:_id | returns a product', function(done) {
    mongo.collection('products').insert({ name: 'Jane Doe' }, function(err, result) {
      var _id = result._id.toString();

      request(app)
        .get('/products/' + _id)
        .expect(200)
        .end(function(err, result) {
          var data = result.body;

          assert.deepEqual(data, { _id: _id, name: 'Jane Doe' });
          done();
        });
    });
  });

  it('POST /products | create a new product', function(done) {
    request(app)
      .post('/products')
      .send({ name: 'Jane Doe' })
      .expect(200)
      .end(function(err, result) {
        var data = result.body;

        assert.equal(data.name, 'Jane Doe');
        done();
      });
  });

  it('PUT /products/:_id | update a product', function(done) {
    mongo.collection('products').insert({ name: 'Jane Doe' }, function(err, result) {
      var _id = result._id.toString();

      request(app)
        .put('/products/' + _id)
        .send({ name: 'John Doe' })
        .expect(200)
        .end(function(err, result) {
          var data = result.body;

          assert.deepEqual(data, { ok: true, n: 1, updatedExisting: true });
          done();
        });
    });
  });

  it('DELETE /products/:_id | remove a product', function(done) {
    mongo.collection('products').insert({ name: 'Jane Doe' }, function(err, result) {
      var _id = result._id.toString();

      request(app)
        .delete('/products/' + _id)
        .expect(200)
        .end(function(err, result) {
          var data = result.body;

          assert.deepEqual(data, { n: 1 });
          done();
        });
    });
  });


}); //describe
