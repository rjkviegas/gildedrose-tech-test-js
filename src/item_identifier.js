class ItemIdentifier {
  constructor() {
    this.specialItems = [
      'Sulfuras, Hand of Ragnaros',
      'Aged Brie',
      'Backstage passes to a TAFKAL80ETC concert',
    ];
  }

  isStandardItem(item) {
    return !this.specialItems.includes(item.name);
  }

  isConjuredItem(item) {
    return item.name.includes('Conjured');
  }

  isItem(itemName, item) {
    return item.name === itemName;
  }

  isItemA(item_keyword, item) {
    return item.name.includes(item_keyword)
  }
}

module.exports = {
  ItemIdentifier,
};
