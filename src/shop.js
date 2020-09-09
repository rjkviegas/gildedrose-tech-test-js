const { ItemIdentifier } = require("./item_identifier");

class Shop {
  constructor(items=[], itemIdentifier = ItemIdentifier){
    this.items = items;
    this.itemIdentifier = new itemIdentifier();
  }
  normalItemUpdate(item) {
    if ((item.quality >= 2) && (item.sellIn <= 0)) {
      item.quality -= 2;
    } else if (item.quality > 0) {
      item.quality -= 1;
    }
    item.sellIn -= 1;
  }
  agedBrieUpdate(item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
    item.sellIn -= 1;
  }
  backstagePassUpdate(item) {
    if (item.quality <= 49) {
      item.quality += 1;
    }
    if (item.sellIn <= 10 && item.quality <= 49) {
      item.quality += 1;
    } 
    if (item.sellIn <= 5 && item.quality <= 49) {
      item.quality += 1;
    }
    if (item.sellIn <= 0) {
      item.quality = 0;
    }
    item.sellIn -= 1;
  }
  updateQuality() {
    const that = this;
    this.items.forEach( function(item) {
      if (that.itemIdentifier.isItem('Sulfuras, Hand of Ragnaros', item)) return item

      if (that.itemIdentifier.isNormalItem(item)) {
        that.normalItemUpdate(item);
      } else if (that.itemIdentifier.isItem('Aged Brie', item)) {
        that.agedBrieUpdate(item);
      } else if (that.itemIdentifier.isItem('Backstage passes to a TAFKAL80ETC concert', item)) {
        that.backstagePassUpdate(item);
      }
    })
    return that.items;
  }
}
module.exports = {
  Shop,
}
