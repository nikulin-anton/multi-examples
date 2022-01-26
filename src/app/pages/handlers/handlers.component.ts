import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-handlers',
  templateUrl: './handlers.component.html',
  styleUrls: ['./handlers.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HandlersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
