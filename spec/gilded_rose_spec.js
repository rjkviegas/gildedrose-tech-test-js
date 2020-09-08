const {Item} = require('../src/item');
const {Shop} = require('../src/shop');

describe("Feature Tests", function() {

  describe("#updateQuality", function() {

    describe("Normal Item", function() {

      it("reduces sellIn and quality values by 1", function() {
        const gildedRose = new Shop([ new Item("testItem", 10, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("testItem");
        expect(items[0].sellIn).toEqual(9);
        expect(items[0].sellIn).not.toEqual(10);
        expect(items[0].quality).toEqual(19);
        expect(items[0].quality).not.toEqual(20);
      });

      it("does not reduce quality below 0", function() {
        const gildedRose = new Shop([ new Item("testItem", 10, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("testItem");
        expect(items[0].sellIn).toEqual(9);
        expect(items[0].sellIn).not.toEqual(10);
        expect(items[0].quality).toEqual(0);
        expect(items[0].quality).not.toEqual(-1);
      });

      it("quality degrades twice as fast once sellIn less than 0", function() {
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
    });

    describe("Aged Brie", function() {

      it("quality increases as days increase", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual('Aged Brie')
        expect(items[0].sellIn).toEqual(1)
        expect(items[0].sellIn).not.toEqual(2)
        expect(items[0].quality).toEqual(1)
        expect(items[0].quality).not.toEqual(0)
      });
  
      it("quality cannot increase over 50", function() {
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
    });

    describe("Sulfaras", function() {

      it("properties are constant", function() {
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
    })

    describe("Backstage passes", function() {

      it("quality increase as sellIn decreases", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].sellIn).toEqual(14);
        expect(items[0].sellIn).not.toEqual(15);
        expect(items[0].quality).toEqual(21);
        expect(items[0].quality).not.toEqual(19);
      });

      it("quality increases twice as fast when sellIn less than or equal to 10", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20) ]);
        const dayOneItems = gildedRose.updateQuality();
        expect(dayOneItems[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(dayOneItems[0].sellIn).toEqual(10);
        expect(dayOneItems[0].sellIn).not.toEqual(11);
        expect(dayOneItems[0].quality).toEqual(21);
        expect(dayOneItems[0].quality).not.toEqual(20);
        const dayTwoItems = gildedRose.updateQuality();
        expect(dayTwoItems[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(dayTwoItems[0].sellIn).toEqual(9);
        expect(dayTwoItems[0].sellIn).not.toEqual(10);
        expect(dayTwoItems[0].quality).toEqual(23);
        expect(dayTwoItems[0].quality).not.toEqual(22);
        const dayThreeItems = gildedRose.updateQuality();
        expect(dayThreeItems[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(dayThreeItems[0].sellIn).toEqual(8);
        expect(dayThreeItems[0].sellIn).not.toEqual(9);
        expect(dayThreeItems[0].quality).toEqual(25);
        expect(dayThreeItems[0].quality).not.toEqual(23);
      });
      it("quality increases three times as fast when sellIn less than or equal to 5", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20) ]);
        const dayOneItems = gildedRose.updateQuality();
        expect(dayOneItems[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(dayOneItems[0].sellIn).toEqual(5);
        expect(dayOneItems[0].sellIn).not.toEqual(6);
        expect(dayOneItems[0].quality).toEqual(22);
        expect(dayOneItems[0].quality).not.toEqual(21);
        const dayTwoItems = gildedRose.updateQuality();
        expect(dayTwoItems[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(dayTwoItems[0].sellIn).toEqual(4);
        expect(dayTwoItems[0].sellIn).not.toEqual(5);
        expect(dayTwoItems[0].quality).toEqual(25);
        expect(dayTwoItems[0].quality).not.toEqual(24);
        const dayThreeItems = gildedRose.updateQuality();
        expect(dayThreeItems[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(dayThreeItems[0].sellIn).toEqual(3);
        expect(dayThreeItems[0].sellIn).not.toEqual(4);
        expect(dayThreeItems[0].quality).toEqual(28);
        expect(dayThreeItems[0].quality).not.toEqual(26);
      });

      it("quality equals 0 once sellIn equals 0", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 20) ]);
        const dayOneItems = gildedRose.updateQuality();
        expect(dayOneItems[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(dayOneItems[0].sellIn).toEqual(0);
        expect(dayOneItems[0].sellIn).not.toEqual(1);
        expect(dayOneItems[0].quality).toEqual(23);
        expect(dayOneItems[0].quality).not.toEqual(21);
        const dayTwoItems = gildedRose.updateQuality();
        expect(dayTwoItems[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(dayTwoItems[0].sellIn).toEqual(-1);
        expect(dayTwoItems[0].sellIn).not.toEqual(0);
        expect(dayTwoItems[0].quality).toEqual(0);
        expect(dayTwoItems[0].quality).not.toEqual(26);
      });
    });
  });
});
