import {Component, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';
import {PluginsService} from '../../../plugins.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit, OnChanges {

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    // Init all plugins...
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
