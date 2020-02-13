import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-custom-table-treeview',
  templateUrl: './custom-table-treeview.component.html',
  styleUrls: ['./custom-table-treeview.component.scss']
})
export class CustomTableTreeviewComponent implements OnInit, OnChanges {
  @Input() data;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log('changes : ', changes);
  }

  toggleNodes(nodeObj, role) {

    switch (role) {
      case 'manager': {
        nodeObj.showManagerList = (nodeObj.showManagerList!=undefined && nodeObj.showManagerList==true) ? false : true
        break;
      }
      default:
        break;
    }

  }
}
