

const tree = [
  {
    title: '1',
    children: [
      {
        title: '1-1',
        children: [
          {
            title: '1-1-1'
          }
        ]
      }
    ]
  },
  {
    title: '2',
    children: [
      {
        title: '2-1',
        children: [
          {
            title: '2-1-1',
            children: [
              {
                title: '2-1-1-1'
              }
            ]
          }
        ]
      }
    ]
  }
]

function forTree(tree,k = 0, isTop = true) {
  for(let i = 0; i < tree.length; i++) {
    console.log(tree[i].title + ' -- title');
    isTop ? k = 1 : k++;
    console.log(k + ' -- k');
    if(tree[i].children) {
      forTree(tree[i].children, k, false);
    }
  }
}
forTree(tree);


//
//
// class Animal {
//   constructor(age) {
//     this.age = age;
//   }
//
//   sayAge() {
//     console.log('age=', this.age);
//   }
// }
//
// class Doge extends Animal {
//   constructor({ name, age }) {
//     super(age);
//     this.name = name;
//   }
//
//   say(...args) {
//     console.log(this.name, 'say', this.age, ...args);
//   }
// }
//
// const a = new Doge({ name: 'hahaha', age: 1 });
// a.say(1,2,3, 'a', ['asdf']);  // hahaha say 1 1 2 3 a ['asdf']
// a.sayAge(); // age= 1
