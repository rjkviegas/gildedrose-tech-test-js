const {Shop} = require('../src/shop');

describe('Shop', function() {

  describe('#isNormalItem', function() {

    it('returns true for normal item', function() {
      const shop = new Shop();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'normalItem'});
      expect(shop.isNormalItem(itemDouble)).toBeTrue();
    });

    it('returns false for Sulfuras', function() {
      const shop = new Shop();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'Sulfuras, Hand of Ragnaros'});
      expect(shop.isNormalItem(itemDouble)).toBeFalse()
    });

    it('returns false for Aged Brie', function() {
      const shop = new Shop();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'Aged Brie'});
      expect(shop.isNormalItem(itemDouble)).toBeFalse()
    });

    it('returns false for Backstage passes', function() {
      const shop = new Shop();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'Backstage passes to a TAFKAL80ETC concert'});
      expect(shop.isNormalItem(itemDouble)).toBeFalse()
    });
  });
});
