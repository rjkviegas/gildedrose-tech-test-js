class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach( function(item) {
      if (item.name === 'Sulfuras, Hand of Ragnaros') {
        return item
      } else {
        if (item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0) {
              item.quality -= 1;
          }
        } else {
          if (item.quality < 50) {
            item.quality += 1;
            if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
              if (item.sellIn < 11) {
                if (item.quality < 50) {
                  item.quality += 1;
                }
              }
              if (item.sellIn < 6) {
                if (item.quality < 50) {
                  item.quality += 1;
                }
              }
            }
          }
        }
        item.sellIn -= 1;
        if (item.sellIn < 0) {
          if (item.name !== 'Aged Brie') {
            if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
              if (item.quality > 0) {
                  item.quality -= 1;
              }
            } else {
              item.quality = 0;
            }
          } else {
            if (item.quality < 50) {
              item.quality += 1;
            }
          }
        }
      }
    });
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
