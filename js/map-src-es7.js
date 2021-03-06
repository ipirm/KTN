var DataArray = [
  {},
  {
    link: {
      title: 'absheron.az',
      href: '#'
    },
    city: 'Abşeron',
    year: '2017',
    products: [
      {
        name: 'Kartof',
        value: 511.2
      },
      {
        name: 'Ət',
        value: 224.1
      },
      {
        name: 'Süd',
        value: 742
      },
      {
        name: 'Meyvə',
        value: 33.3
      },
      {
        name: 'Tərəvəz',
        value: 25
      },
    ]
  },
  {
    link: {
      title: 'somesite.com',
      href: '#'
    },
    city: 'City 2',
    year: '2018',
    products: [
      {
        name: 'Product 1',
        value: 12414
      },
      {
        name: 'Product 2',
        value: 221.2
      },
      {
        name: 'Product 3',
        value: 354.2
      },
      {
        name: 'Product 4',
        value: 564564.2
      },
      {
        name: 'Product 5',
        value: 75675
      },
      {
        name: 'Product 5',
        value: 75675
      },
      {
        name: 'Product 5',
        value: 75675
      },
    ]
  },
  {
    link: {
      title: 'anothersite.ru',
      href: '#'
    },
    city: 'MiracleTown',
    year: '1990',
    products: [
      {
        name: 'Apple',
        value: 25.8
      },
      {
        name: 'Orange',
        value: 3.1
      },
      {
        name: 'Tomato',
        value: 3777.54
      },
    ]
  },
]



var svgMap = {
  mapEl: document.querySelector('#map'),
  tableEl: document.querySelector('.map__table'),
  refEl: document.querySelector('.map__link a'),
  showTableInfo: function (tableData) {
    if (!this.nodes) { return false; }

    this.nodes.city.innerHTML = tableData.city;
    this.nodes.year.innerHTML = tableData.year;

    let paddingOffset = 23;
    let currentHeight = paddingOffset + tableData.products.length * (19 + 6) - 6;
    
    this.nodes.tableItemWrapper.style.height = currentHeight + 'px';
    this.nodes.tableItemWrapper.innerHTML = '';

    tableData.products.forEach((item) => {
      let tableItem = document.createElement('div');
      tableItem.classList.add('map__table-item');
      let tableItemProduct = document.createElement('div');
      tableItemProduct.classList.add('map__country');
      tableItemProduct.innerHTML = item.name;
      let tableItemValue = document.createElement('div');
      tableItemValue.classList.add('map__number');
      tableItemValue.innerHTML = item.value;
      
      tableItem.appendChild(tableItemProduct);
      tableItem.appendChild(tableItemValue);

      this.nodes.tableItemWrapper.append(tableItem);
    })
  },
  selectRegion: function (regionEl) {
    let dataArrayIndex = regionEl.getAttribute('data-index');
    let regionData = DataArray[dataArrayIndex];
    if (!dataArrayIndex || !regionData) {      
      return false;
    }

    this.activeRegion.classList.remove('--active');
    regionEl.classList.add('--active');
    this.activeRegion = regionEl;

    this.tableEl.classList.add('--hidden');
    this.tableEl.addEventListener('transitionend', (e) => {
      this.showTableInfo(regionData);
      this.tableEl.classList.remove('--hidden');
    }, { once: true });

    this.refEl.classList.add('--hidden');
    this.refEl.addEventListener('transitionend', (e) => {
      this.refEl.innerHTML = regionData.link.title;
      this.refEl.href = regionData.link.href;
      this.refEl.classList.remove('--hidden');
    }, { once: true })
  },

  init: function (initialRegion) {
    this.nodes = {
      city: this.tableEl.querySelector('.map__caption'),
      year: this.tableEl.querySelector('.map__table-year'),
      tableItemWrapper: this.tableEl.querySelector('.map__table-wrap'),
    };
    this.regions = Array.from(this.mapEl.querySelectorAll('path[id], polygon'));
    // this.regions = Array.from(this.mapEl.querySelectorAll('.st0'));

    if (!initialRegion) {initialRegion = this.regions[0]}

    this.activeRegion = initialRegion;
    this.activeRegion.classList.add('--active');
    let resStr = '';
    this.regions.forEach((item, i) => {
      if (!this.activeRegion) {
        this.activeRegion = item;
      }

      //  Marking disabled regions (without any data linked)
      if (!item.getAttribute('data-index') && item.getAttribute('data-index') != 0) {
        item.classList.add('--disabled');
      }

      //  binding click
      item.addEventListener('click', (e) => {
        console.log(item.id);
        
        this.selectRegion(item);        
      })
    })    
    console.log(resStr);
    return this;
  }
}

let initialRegion = document.getElementById('path31_4_');
svgMap.init(initialRegion);


