import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ta9-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() isRTL: boolean = false;
  collapsedButtons!: {
    category: string;
    buttons: {
      text: string;
      icon: string;
    }[][];
  };

  listItems: { text: string; icon: string; }[] = [];

  dropdownButtons = [
    {
      listTitle: 'Drawing Tools',
      svgIcon: '../../../assets/images/svg/icons/paint.svg',
      listItems: [
        { text: 'Edit node style', icon: '../../../assets/images/svg/icons/pencil.svg'},
        { text: 'Add shape', icon: '../../../assets/images/svg/icons/pencil.svg'},
        { text: 'Add text', icon: '../../../assets/images/svg/icons/pencil.svg'},
      ]
    },
    {
      listTitle: 'General Tools',
      svgIcon: '../../../assets/images/svg/icons/setting.svg',
      listItems: [
        { text: 'Remove from graph', icon: '../../../assets/images/svg/icons/trash-bin.svg'},
        { text: 'Print', icon: '../../../assets/images/svg/icons/printing.svg'},
        { text: 'Find shorted path', icon: '../../../assets/images/svg/icons/segment-blank.svg'},
        { text: 'Find first level relations', icon: '../../../assets/images/svg/icons/eye.svg'},
      ]
    },
    {
      listTitle: 'Export',
      svgIcon: '../../../assets/images/svg/icons/file-export.svg',
      listItems: [
        { text: 'Export as Image', icon: '../../../assets/images/svg/icons/file-export.svg'},
        { text: 'Export as JSON', icon: '../../../assets/images/svg/icons/file-export.svg'},
        { text: 'Export as PDF', icon: '../../../assets/images/svg/icons/file-export.svg'},
      ]
    }
  ]

  saveTools = {
    listTitle: 'Save Options',
    svgIcon: '../../../assets/images/svg/icons/save.svg',
    listItems: [
      { text: 'Save', icon: '../../../assets/images/svg/icons/save.svg'},
      { text: 'Save As', icon: '../../../assets/images/svg/icons/save-as.svg'},
    ]
  }

  siren = {
    listTitle: 'Warning',
    svgIcon: 'projects\intsight-ui\public\assets\images\svg\icons\siren.svg',
  }

  layers = {
    listTitle: 'layer',
    svgIcon: '../../../assets/images/svg/icons/layers.svg',
  }

  _x32_0 = {
    listTitle: 'paint',
    svgIcon: '../../../assets/images/svg/icons/_x32_0.svg',
  }

  Group_2039 = {
    listTitle: 'group',
    svgIcon: '../../../assets/images/svg/icons/Group 2039svg',
  }

  sync = {
    listTitle: 'syncronize',
    svgIcon: '../../../assets/images/svg/icons/Group 2039svg',
  }

  clock1 = {
    listTitle: 'time',
    svgIcon: '../../../assets/images/svg/icons/Group 2039svg',
  }

  calendar = {
    listTitle: 'date',
    svgIcon: '../../../assets/images/svg/icons/Group 2039svg',
  }

  constructor() {
    this.collapsedButtons = {
      category: 'More tools',
      buttons: [
        [
          { text: 'Recent', icon: '../../../assets/images/svg/icons/clock.svg' }
        ],
        [
          { text: 'Analysis', icon: '../../../assets/images/svg/icons/link.svg' }
        ],
        [
          { text: 'Link', icon: '../../../assets/images/svg/icons/segment-new.svg' }
        ],
        [
          { text: 'Undo', icon: '../../../assets/images/svg/icons/undo.svg' },
          { text: 'Redo', icon: '../../../assets/images/svg/icons/redo.svg' }
        ],
        [
          { text: 'Combine', icon: '../../../assets/images/svg/icons/import-new.svg' },
          { text: 'Separate', icon: '../../../assets/images/svg/icons/export-new.svg' }
        ]
      ]
    };
  }



  ngOnInit(): void {
    this.collapsedButtons.buttons.forEach(item => {
      item.forEach(childItem => {
        this.listItems.push(childItem);
      } );
    });
  }
}
