import { Component, OnInit } from '@angular/core';

const changeImage = (index: number) => {
  const divStyle = document.getElementById('imgs-div-id');
  switch (index) {
    case 1:
      divStyle?.classList.add('img-1')
      divStyle?.classList.remove('img-3')
      break;
    case 2:
      divStyle?.classList.add('img-2')
      divStyle?.classList.remove('img-1')
      break;
    case 3:
      divStyle?.classList.add('img-3')
      divStyle?.classList.remove('img-2')
      break;
  }
};

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: [
    './events.component.scss',
    './events.component-2.scss',
    './responsive-scss/events.component-2.scss',
  ],
})
export class EventsComponent implements OnInit {
  private imgIndex: number = 1;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.imgIndex == 3 ? (this.imgIndex = 0) : (this.imgIndex += 1);
      changeImage(this.imgIndex);
    }, 4000);
  }
}
