import { Component , OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = ''; // (3º Passo)
  @Input() userData!: {email: string; role: string}; // or -> @Input() userData = '';

  constructor() {}

  ngOnInit(): void {
    
  }
}
