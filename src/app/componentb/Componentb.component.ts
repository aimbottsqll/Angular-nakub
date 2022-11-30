import { Component, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'app-componentb',
    templateUrl: './Componentb.component.html',
    styleUrls: ['./Componentb.component.scss']
  })
  export class ComponentbComponent{
    list:any []=[];
    removeTask(id:number)
  {
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id);
  }
  }