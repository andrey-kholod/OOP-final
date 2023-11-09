const _User = {
   firstName: '',
   lastName: '',
   mon: '',
   dob: '',
   yob: '',
   setName: function (name) {
      const nameRow = name.split(' ');
      // console.log(this)
      this.firstName = nameRow[0];
      this.lastName = nameRow[1];
   },
   getName: function () {
      return `${this.firstName} ${this.lastName}`;
   },
   getAge: function () {

   }
};

class User {
   constructor(props) {
      this.name = props.name;
      this.dateofBirth = props.dob;
   }

   firstName = '';
   lastName = '';
   dob = '';
   mob = '';
   yob = '';

   set name(newName) {
      const newRow = newName.split(' ');
      this.firstName = newRow[0];
      this.lastName = newRow[1];
   }
   get name() {
      return `${this.firstName} ${this.lastName}`;
   }
   set dateofBirth(date) {
      const dateRow = date.split('-');
      // console.log(dateRow)
      this.dob = Number(dateRow[0]);
      this.mob = Number(dateRow[1]);
      this.yob = Number(dateRow[2]);
   }
   get dateofBirth() {
      return `${this.dob}-${this.mob}-${this.yob}`
   }

   get age() {
      return new Date().getFullYear() - this.yob;
   }
   

}


const Vasya = new User({
   name: 'Vasya Pupkin',
   dob: '31-03-2007',
});



// console.log(Misha);
// console.log(Misha.dob);

// console.log(Vasya)
// // console.log(Dasha.name);
// let x = '31-03-2007';
// console.log(x.split('-'))

class returnAge {
   constructor(props) {
      this.name = props.name;
      this.dateofBirth = props.dateofBirth;
   }
   firstName = '';
   dob = '';
   mpd = '';
   yob = '';
   set dateofBirth(fully) {
      const arr = fully.split('-');
      // console.log(arr);
      this.dob = +(arr[0]);
      this.mpd = +(arr[1]);
      this.yob = +(arr[2]);
   }
   get dateofBirth() {
      return `${this.dob}-${this.mob}-${this.yob}`
   }
   get age() {
      return new Date().getFullYear() - this.yob;
   }
   
}

let newAger = new returnAge({
   name: 'lol l',
   dateofBirth: '19-9-1979'
});
console.log(newAger)