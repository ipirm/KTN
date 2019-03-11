$(document).ready(function(){

  if ($('.map').length)
  {

"use strict";

var DataArray = [{}, {
  link: {
    title: 'absheron.az',
    href: '#'
  },
  city: 'Abşeron',
  year: '2017',
  products: [{
    name: 'Kartof',
    value: 511.2,
	    value2:5
  }, {
    name: 'Ət',
    value: 224.1,
	    value2:5
  }, {
    name: 'Süd',
    value: 742,
	    value2:5
  }, {
    name: 'Meyvə',
    value: 33.3,
	    value2:5
  }, {
    name: 'Tərəvəz',
    value: 25,
	    value2:5
  }]
}, {
  link: {
    title: 'somesite.com',
    href: '#'
  },
  city: 'City 2',
  year: '2018',
  products: [{
    name: 'Product 1',
    value: 1241,
	    value2:5
  }, {
    name: 'Product 2',
    value: 221.2,
	    value2:576
  }, {
    name: 'Product 3',
    value: 354.2,
	    value2:544
  }, {
    name: 'Product 4',
    value: 564.2,
	    value2:556
  }, {
    name: 'Product 5',
    value: 756,
	    value2:567
  }, {
    name: 'Product 5',
    value: 756,
	    value2:578
  }, {
    name: 'Product 5',
    value: 756,
	    value2:545
  }]
}, {
  link: {
    title: 'anothersite.ru',
    href: '#'
  },
  city: 'MiracleTown',
  year: '1990',
  products: [{
    name: 'Apple',
    value: 25555.8,
	    value2:71500
  }, {
    name: 'Orange',
    value: 3.1,
	    value2:554
  }, {
    name: 'Tomato',
    value: 3777.54,
	  value2:523
  }]
}];
var svgMap = {
  mapEl: document.querySelector('#map'),
  tableEl: document.querySelector('.map__table'),
  refEl: document.querySelector('.map__link a'),
  showTableInfo: function showTableInfo(tableData) {
    var _this = this;

    if (!this.nodes) {
      return false;
    }

    this.nodes.city.innerHTML = tableData.city;
    this.nodes.year.innerHTML = tableData.year;
    var paddingOffset = 23;
    var currentHeight = paddingOffset + tableData.products.length * (19 + 6) - 6;
    this.nodes.tableItemWrapper.style.height = currentHeight + 'px';
    this.nodes.tableItemWrapper.innerHTML = '';
    tableData.products.forEach(function (item) {
      var tableItem = document.createElement('div');
      tableItem.classList.add('map__table-item');
      var tableItemProduct = document.createElement('div');
      tableItemProduct.classList.add('map__country');
      tableItemProduct.innerHTML = item.name;
      var tableItemValue = document.createElement('div');
      tableItemValue.classList.add('map__number');
      tableItemValue.innerHTML = item.value;
		   var tableItemValue2 = document.createElement('div');
      tableItemValue2.classList.add('map___number');
      tableItemValue2.innerHTML = item.value2;
      tableItem.appendChild(tableItemProduct);
      tableItem.appendChild(tableItemValue);
tableItem.appendChild(tableItemValue2);
      _this.nodes.tableItemWrapper.append(tableItem);
    });
  },
  selectRegion: function selectRegion(regionEl) {
    var _this2 = this;

    var dataArrayIndex = regionEl.getAttribute('data-index');
    var regionData = DataArray[dataArrayIndex];

    if (!dataArrayIndex || !regionData) {
      return false;
    }

    this.activeRegion.classList.remove('--active');
    regionEl.classList.add('--active');
    this.activeRegion = regionEl;
    this.tableEl.classList.add('--hidden');
    this.tableEl.addEventListener('transitionend', function (e) {
      _this2.showTableInfo(regionData);

      _this2.tableEl.classList.remove('--hidden');
    }, {
      once: true
    });
    this.refEl.classList.add('--hidden');
    this.refEl.addEventListener('transitionend', function (e) {
      _this2.refEl.innerHTML = regionData.link.title;
      _this2.refEl.href = regionData.link.href;

      _this2.refEl.classList.remove('--hidden');
    }, {
      once: true
    });
  },
  init: function init(initialRegion) {
    var _this3 = this;

    this.nodes = {
      city: this.tableEl.querySelector('.map__caption'),
      year: this.tableEl.querySelector('.map__table-year'),
      tableItemWrapper: this.tableEl.querySelector('.map__table-wrap')
    };
    this.regions = Array.from(this.mapEl.querySelectorAll('path[id], polygon')); // this.regions = Array.from(this.mapEl.querySelectorAll('.st0'));

    if (!initialRegion) {
      initialRegion = this.regions[0];
    }

    this.activeRegion = initialRegion;
    this.activeRegion.classList.add('--active');
    var resStr = '';
    this.regions.forEach(function (item, i) {
      if (!_this3.activeRegion) {
        _this3.activeRegion = item;
      } //  Marking disabled regions (without any data linked)


      if (!item.getAttribute('data-index') && item.getAttribute('data-index') != 0) {
        item.classList.add('--disabled');
      } //  binding click


      item.addEventListener('click', function (e) {
    

        _this3.selectRegion(item);
      });
    });
  
    return this;
  }
};
var initialRegion = document.getElementById('path31_4_');
svgMap.init(initialRegion);
	  
	    }
});