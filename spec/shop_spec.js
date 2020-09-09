const {Shop} = require('../src/shop');

describe('Shop', function() {

  describe('isAgedBrie', function() {

    it('returns true when item name is Aged Brie', function() {
      const shop = new Shop();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'Aged Brie'});
      expect(shop.isAgedBrie(itemDouble)).toBeTrue();
    })

    it('returns false when item name is not Aged Brie', function() {
      const shop = new Shop();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'itemDouble'});
      expect(shop.isAgedBrie(itemDouble)).toBeFalse();
    })
  });

  describe('isBackstagePass', function() {

    it('returns true when item name is Backstage passes to a TAFKAL80ETC concert', function() {
      const shop = new Shop();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'Backstage passes to a TAFKAL80ETC concert'});
      expect(shop.isBackstagePass(itemDouble)).toBeTrue();
    })

    it('returns false when item name is not Backstage passes to a TAFKAL80ETC concert', function() {
      const shop = new Shop();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'itemDouble'});
      expect(shop.isBackstagePass(itemDouble)).toBeFalse();
    })
  });
});
