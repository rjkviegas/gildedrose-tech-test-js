const {Shop} = require('../src/shop.js');

describe('Shop', function() {

  describe('#isNormalItem', function() {

    it('returns true for normal item', function() {
      const shop = new Shop();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'normalItem'});
      expect(shop.isNormalItem(itemDouble)).toEqual(true)
    });
  });
});