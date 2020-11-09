import { Component, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { PluginsService } from 'src/app/plugins.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit, OnChanges {

  constructor(private plugins: PluginsService) { }

  ngOnInit(){
    const current = this;

    setTimeout(() => {
      current.plugins.index();
      current.plugins.dashboardIndex();
    }, 200);
  }

  ngOnChanges(c) {
    console.log(c)
  }

  getValue($event){
    console.log($event);
  }

}
