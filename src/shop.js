class Shop {
  constructor(items=[]){
    this.items = items;
  }
  isNormalItem(item) {
    if (item.name === 'Sulfuras, Hand of Ragnaros') return false;
    if (item.name === 'Aged Brie') return false;
    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') return false;
    return true;
  }
  normalItemUpdate(item) {
    if ((item.quality >= 2) && (item.sellIn <= 0)) {
      item.quality -= 2;
    } else if (item.quality > 0) {
      item.quality -= 1;
    }
    item.sellIn -= 1;
  }
  isAgedBrie(item) {
    if (item.name === 'Aged Brie') return true;
    return false;
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

      if (that.isNormalItem(item)) {
        that.normalItemUpdate(item);
      } else if (that.isAgedBrie(item)) {
        that.agedBrieUpdate(item);
      } else if (that.isBackstagePass(item)) {
        that.backstagePassUpdate(item);
      }
    //   } else {
    //     if (item.quality < 50) {
    //       item.quality += 1;
    //       if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (item.sellIn < 11) {
    //           if (item.quality < 50) {
    //             item.quality += 1;
    //           }
    //         }
    //         if (item.sellIn < 6) {
    //           if (item.quality < 50) {
    //             item.quality += 1;
    //           }
    //         }
    //       }
    //     }
    //     item.sellIn -= 1;
    //   }
      
    //   if (item.sellIn < 0) {
    //     if (item.name !== 'Aged Brie') {
    //       if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (item.quality > 0) {
    //             item.quality -= 1;
    //         }
    //       } else {
    //         item.quality = 0;
    //       }
    //     } else {
    //       if (item.quality < 50) {
    //         item.quality += 1;
    //       }
    //     }
    //   }
    // });
    })
    return that.items;
  }
}
module.exports = {
  Shop,
}
