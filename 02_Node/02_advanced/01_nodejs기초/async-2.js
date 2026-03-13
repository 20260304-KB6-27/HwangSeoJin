let isOrder = true;

const order = new Promise((resolve, reject) => {
    if (isOrder) 
        resolve('피자를 주문했습니다.');
    else 
        reject('피자를 주문하지 않습니다.');
});

order
    .then(result => console.log(result))
    .catch(err => console.log(err));