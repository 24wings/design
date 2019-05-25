import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles: [`
    #navigation { margin: 20px 0; font-weight:bold; font-size:18px; }
    #navigation a { color: #5279a4; margin-right:20px; }
    #outlet-wrapper { padding: 20px; border:1px #ccc solid; }
  `,'./app.component.scss']
})
export class AppComponent {
  visible=true
  orderableLists = [['Item 1a', 'Item 2a', 'Item 3a'], ['Item 1b', 'Item 2b', 'Item 3b']];
  
  sourceBuilderTools = [
    {name:"栅格",inputType:"grid",icon:'far fa-square',class:'wide'},
    {name:"1/3格",inputType:"col",children:[],class:'three',},
    { name: 'Section', children: [] as any[], inputType: 'section', icon: 'far fa-square', class: 'wide' },
    { name: 'String', inputType: 'string', icon: 'fas fa-language', class: 'half' },
    { name: 'Number', inputType: 'number', icon: 'fas fa-hashtag', class: 'half' }
  ];
  sourceBuilderTools2 = [
    {name:"栅格",inputType:"grid",icon:'far fa-square',class:'wide'},
    {name:"1/3格",inputType:"col",children:[],class:'three',},
    { name: 'Section', children: [] as any[], inputType: 'section', icon: 'far fa-square', class: 'wide' },
    { name: 'String', inputType: 'string', icon: 'fas fa-language', class: 'half' },
    { name: 'Number', inputType: 'number', icon: 'fas fa-hashtag', class: 'half' }
  ];
  targetBuilderTools: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;

  builderDrag(e: any) {
    const item = e.value;
    item.data =
      item.inputType === 'number'
        ? (Math.random() * 100) | 0
        : Math.random()
            .toString(36)
            .substring(20);
  }

  log(e: any) {
    console.log(e.type, e);
  }

  canMove(e: any): boolean {
    return e.indexOf('Disabled') === -1;
  }
  spanModel={}

  outputModel= [];
  inputModel={}
  item1Model={label:"item1Model",children:[]}
  item2Model={children:[]}
  item3Model={children:[]}
  boxList=["123","234"]
  boxList2=[{name:"123"},{name:"234"}]
  str='name'
  gridModel={name:'栅格',inputType:'grid',icon:'far fa-square',class:'wide',isContainer:true,children:[]}
  colModel={name:'栅格',inputType:'col'}
}
