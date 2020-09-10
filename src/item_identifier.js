class ItemIdentifier {
  constructor() {
    this.specialItems = [
      'Sulfuras, Hand of Ragnaros',
      'Aged Brie',
      'Backstage passes to a TAFKAL80ETC concert',
    ];
  }

  isNormalItem(item) {
    return !this.specialItems.includes(item.name);
  }

  isItem(itemName, item) {
    return item.name === itemName;
  }

  isConjuredItem(item) {
    return item.name.includes('Conjured');
  }
}

module.exports = {
  ItemIdentifier,
};
