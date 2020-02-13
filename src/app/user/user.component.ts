import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  showCog = false;
  sorting = false;
  backupList = []
  inputArray = [];
  filterPosition = '';
  columnData = [];
  dropdownSettings = {};

  constructor(
  ) { }

  ngOnInit() {
    this.getList();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }
  }
  ngOnchanges() {
    this.getList();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  toggleMenu(column) {
    column.openFilter = !column.openFilter;
    event.stopPropagation();
  }

  sortBy(column) {
    column.sorting = !column.sorting;
    const sortOrder = column.sorting == true ? 'desc' : 'asc';
    console.log('sortOrder : ', sortOrder, column)
    const result = _.orderBy(this.inputArray, (element) => {
      return element[column.name];
    }, sortOrder);
    console.log('result : ', result);

    this.inputArray = result;
    event.stopPropagation();
  }

  filterList(column) {
    console.log('this.filterPosition : ', column);
    if (column.filterModel == null || column.filterModel.length == 0) {
      this.inputArray = this.backupList;
      column.openFilter = false;
      return null;
    }
    else {
      this.inputArray = this.backupList;
    }
    this.resetAllFilterModel(column);
    // console.log('allClear() : ', this.allClear());
    // const checkAllClear = this.allClear();
    // console.log('checkAllClear : ', checkAllClear);
    // if (checkAllClear == undefined) {
    //   this.inputArray = this.backupList;
    //   column.openFilter = false;
    //   return false;
    // }
    let array = []
    _.forEach(this.inputArray, (element) => {
      let matchedresult = null;
      _.forEach(column.filterModel, (filter) => {
        // return element[column.name] == filter.item_text;
        if (element[column.name] == filter.item_text) {
          matchedresult = element;
        }
      });
      console.log('matchedresult : ', matchedresult)
      if (matchedresult) {
        array.push(matchedresult)
        // console.log('matchedresult : ', matchedresult);
      }

    });
    console.log('array : ', array);
    // if (result) {
    this.inputArray = array;
    // }
    column.openFilter = false;
    event.stopPropagation();
  }

  resetAllFilterModel(currentColumn) {
    this.columnData.forEach((column) => {
      if (column.name != currentColumn.name) {
        column.filterModel = [];
      }
      // column.openFilter = false;
    });
  }

  getList() {
    this.inputArrayMethod();
    this.backupList = this.inputArray;
    this.getUnqiueKeys();
  }



  getUnqiueKeys() {
    let keysArray = [];
    _.forEach(this.inputArray, (element) => {
      const keys = _.keys(element);
      keysArray = _.merge(keysArray, keys);
      // console.log('keysArray : ', keysArray);
    });
    // console.log('keysArray : ', keysArray);
    keysArray.forEach((element) => {
      const filterValues = _.map(this.inputArray, element);
      const newList = [];
      // const newObj = { item_id: 1, item_text: 'Mumbai' };
      filterValues.forEach((element, index) => {
        newList.push({ item_id: index, item_text: element })
      })
      // console.log('filterValues : ', filterValues);
      this.columnData.push({ name: element, sorting: false, filterModel: [], filterList: newList });
    });
    // console.log('this.columnData : ', this.columnData);
  }

  allClear() {
    const result = _.find(this.columnData, (column) => {
      return column.filterModel.length > 0;
    });
    console.log('allClear() : ', result);
    return result;
  }

  inputArrayMethod() {
    this.inputArray = [
      {
        "position": 1,
        "name": "Hydrogen HydrogenHydrogenHydrogenHydrogenHydrogen",
        "weight": 1.0079,
        "symbol": "H",
        "position1": 1,
        "name1": "Hydrogen",
        "weight1": 1.0079,
        "symbol1": "H",
      },
      {
        "position": 1,
        "name": "Hydrogen HydrogenHydrogenHydrogenHydrogenHydrogen",
        "weight": 1.00797946416431657616461463486431,
        "symbol": "H",
        "position1": 1,
        "name1": "Hydrogen",
        "weight1": 1.0079,
        "symbol1": "H",
      }

    ];
  }


}
