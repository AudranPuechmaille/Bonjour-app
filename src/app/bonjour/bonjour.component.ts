import { Component } from '@angular/core';

@Component({
  selector: 'app-bonjour',
  templateUrl: './bonjour.component.html',
  styleUrls: ['./bonjour.component.css']
})
export class BonjourComponent {
  name: string = '';
  font: string = 'Arial';
  fontSize: number = 14;
  alignment: string = 'left';

  fonts: string[] = ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Verdana'];

  styles: any = {};

  updateText() {
    this.styles = {
      'font-family': this.font,
      'font-size': `${this.fontSize}px`,
      'text-align': this.alignment
    };
  }
}
