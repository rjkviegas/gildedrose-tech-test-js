class ItemQualityUpdater {
  constructor() {
    this.UPPER_LIMIT = 50;
    this.LOWER_LIMIT = 0;
    this.STANDARD_INCREMENT = 1;
    this.STANDARD_DECREMENT = 1;
    this.PAST_SELL_IN_DECREMENT = 2;
    this.CONJURED_STANDARD_DECREMENT = 2;
    this.CONJURED_PAST_SELL_IN_DECREMENT = 4;
    this.BACKSTAGE_PASS_SELL_IN_BAND_ONE = 10;
    this.BACKSTAGE_PASS_SELL_IN_BAND_TWO = 5;
  }

  updateStandardItem(item) {
    const that = this;
    if (item.sellIn <= 0 && item.quality >= that.PAST_SELL_IN_DECREMENT) {
      that.decreaseQualityBy(that.PAST_SELL_IN_DECREMENT, item);
    } else if (item.quality > that.LOWER_LIMIT) {
      that.decreaseQualityBy(that.STANDARD_DECREMENT, item);
    }
  }

  updateAgedBrie(item) {
    const that = this;
    if (item.quality < that.UPPER_LIMIT) { that.increaseQualityBy(that.STANDARD_INCREMENT, item); }
  }

  updateBackstagePass(item) {
    const that = this;
    if (item.sellIn <= 0) return (item.quality = that.LOWER_LIMIT);
    if (item.quality < that.UPPER_LIMIT) { that.increaseQualityBy(that.STANDARD_INCREMENT, item); }
    if (item.sellIn <= that.BACKSTAGE_PASS_SELL_IN_BAND_ONE && item.quality < that.UPPER_LIMIT) {
      that.increaseQualityBy(that.STANDARD_INCREMENT, item);
    } 
    if (item.sellIn <= that.BACKSTAGE_PASS_SELL_IN_BAND_TWO && item.quality < that.UPPER_LIMIT) {
      that.increaseQualityBy(that.STANDARD_INCREMENT, item);
    }
  }

  updateConjuredItem(item) {
    const that = this;
    if (item.sellIn <= 0 && item.quality >= that.CONJURED_PAST_SELL_IN_DECREMENT) {
      that.decreaseQualityBy((that.CONJURED_PAST_SELL_IN_DECREMENT), item);
    } else if (item.quality >= that.CONJURED_STANDARD_DECREMENT) {
      that.decreaseQualityBy((that.CONJURED_STANDARD_DECREMENT), item);
    } else {
      item.quality = that.LOWER_LIMIT;
    }
  }

  decreaseQualityBy(decrement, item) {
    item.quality -= decrement;
  }

  increaseQualityBy(increment, item) {
    item.quality += increment;
  }
}

module.exports = {
  ItemQualityUpdater,
};
