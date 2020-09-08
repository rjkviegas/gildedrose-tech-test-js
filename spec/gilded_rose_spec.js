var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  describe("#updateQuality", function() {

    it("reduces sellIn and quality of a normal item", function() {
      const gildedRose = new Shop([ new Item("testItem", 10, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("testItem");
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].sellIn).not.toEqual(10);
      expect(items[0].quality).toEqual(19);
      expect(items[0].quality).not.toEqual(20);
    });

    it("does not reduce quality of normal item below 0", function() {
      const gildedRose = new Shop([ new Item("testItem", 10, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("testItem");
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].sellIn).not.toEqual(10);
      expect(items[0].quality).toEqual(0);
      expect(items[0].quality).not.toEqual(-1);
    });

    it("quality of normal item degrades twice as fast once sellIn less than 0", function() {
      const gildedRose = new Shop([ new Item("testItem", 1, 4) ]);
      const dayOneItems = gildedRose.updateQuality();
      expect(dayOneItems[0].name).toEqual("testItem");
      expect(dayOneItems[0].sellIn).toEqual(0);
      expect(dayOneItems[0].sellIn).not.toEqual(1);
      expect(dayOneItems[0].quality).toEqual(3);
      expect(dayOneItems[0].quality).not.toEqual(4);
      const dayTwoItems = gildedRose.updateQuality();
      expect(dayTwoItems[0].name).toEqual("testItem");
      expect(dayTwoItems[0].sellIn).toEqual(-1);
      expect(dayTwoItems[0].sellIn).not.toEqual(0);
      expect(dayTwoItems[0].quality).toEqual(1);
      expect(dayTwoItems[0].quality).not.toEqual(2);
    });

    it("Aged Brie quality increases as days increase", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual('Aged Brie')
      expect(items[0].sellIn).toEqual(1)
      expect(items[0].sellIn).not.toEqual(2)
      expect(items[0].quality).toEqual(1)
      expect(items[0].quality).not.toEqual(0)
    });

    it("Aged Brie quality cannot increase over 50", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 2, 49) ]);
      const dayOneItems = gildedRose.updateQuality();
      expect(dayOneItems[0].name).toEqual("Aged Brie");
      expect(dayOneItems[0].sellIn).toEqual(1);
      expect(dayOneItems[0].sellIn).not.toEqual(2);
      expect(dayOneItems[0].quality).toEqual(50);
      expect(dayOneItems[0].quality).not.toEqual(49);
      const dayTwoItems = gildedRose.updateQuality();
      expect(dayTwoItems[0].name).toEqual("Aged Brie");
      expect(dayTwoItems[0].sellIn).toEqual(0);
      expect(dayTwoItems[0].sellIn).not.toEqual(1);
      expect(dayTwoItems[0].quality).toEqual(50);
      expect(dayTwoItems[0].quality).not.toEqual(51);
    });

    it("Sulfaras properties are constant", function() {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
      const dayOneItems = gildedRose.updateQuality();
      expect(dayOneItems[0].name).toEqual("Sulfuras, Hand of Ragnaros");
      expect(dayOneItems[0].sellIn).toEqual(0);
      expect(dayOneItems[0].sellIn).not.toEqual(-1);
      expect(dayOneItems[0].quality).toEqual(80);
      expect(dayOneItems[0].quality).not.toEqual(79);
      const dayTwoItems = gildedRose.updateQuality();
      expect(dayTwoItems[0].name).toEqual("Sulfuras, Hand of Ragnaros");
      expect(dayTwoItems[0].sellIn).toEqual(0);
      expect(dayTwoItems[0].sellIn).not.toEqual(-2);
      expect(dayTwoItems[0].quality).toEqual(80);
      expect(dayTwoItems[0].quality).not.toEqual(78);
    });
  });
});
