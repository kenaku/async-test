const expect = require('chai').expect;
const asyncForEach = require('./asyncForEach').asyncForEach;

const items = [1,2,3,4,5];

describe('async-test', function() {
  it('Every item should be equal to index', function(done){
    asyncForEach(items, function (item, index, next) {
      next();
      expect(item - 1).to.equal(index);
    }).then(done)
  })
})