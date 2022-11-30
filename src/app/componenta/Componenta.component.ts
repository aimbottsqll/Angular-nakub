import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-componenta',
    templateUrl: './Componenta.component.html',
    styleUrls: ['./Componenta.component.scss']
  })
  export class ComponentaComponent{
    title = 'todo-list';
    list:any []=[];
    addTask(item:string)
    {
      this.list.push({id:this.list.length,name:item})
      console.warn(this.list);
    }
  }