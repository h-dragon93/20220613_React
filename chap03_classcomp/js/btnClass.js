class BtnEvent {
  constructor() {
    this.name = 'NolBu';
    this.age = 20;

    // this를 BtnEvent 객체로 변경해서 changeName을 현재 BtnEvent에 복사
    this.changeNameA = this.changeName.bind(this);
    document.getElementById('btn01').addEventListener('click', this.changeNameA);

    document.getElementById('btn02').addEventListener('click', function(evt) {
      console.log(this, evt.target);
      // this.changeAge();
    });

    document.getElementById('btn03').addEventListener('click', (evt) => {
      this.changeAge();
      console.log(this, evt);
    });
  }

  changeName(evt) {
    this.name = 'HungBu';
    console.log(this, evt.target);
  }
  changeAge() {
    this.age = 100;
    console.log(this);
  }


}

const btn = new BtnEvent();
console.log(btn);
