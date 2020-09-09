const { ItemIdentifier } = require("./item_identifier");

class Shop {
  constructor(items=[], itemIdentifier = ItemIdentifier){
    this.items = items;
    this.itemIdentifier = new itemIdentifier;
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
  isBackstagePass(item) {
    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') return true;
    return false;
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
      if (item.name === 'Sulfuras, Hand of Ragnaros') return item

      if (that.itemIdentifier.isNormalItem(item)) {
        that.normalItemUpdate(item);
      } else if (that.itemIdentifier.isAgedBrie(item)) {
        that.agedBrieUpdate(item);
      } else if (that.isBackstagePass(item)) {
        that.backstagePassUpdate(item);
      }
    })
    return that.items;
  }
}
module.exports = {
  Shop,
}
