// 화살표함수

let getTriangle = (base, height) => {
    (base*height) / 2;
    // 추가 코드 작성 
};

console.log('삼각형의 면적:' + getTriangle(5,2));


const person = {
    name : "bear",

    //일반함수
    hello1 : function (){
        console.log(`일반함수: ` + this.name);
    },

    //화살표함수
    hello2: () => {
        console.log(`화살표함수: ` + this.name);
    }
}

person.hello1();
person.hello2();