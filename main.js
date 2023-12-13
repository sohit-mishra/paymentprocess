var img = document.querySelector('img');
var heading = document.querySelector('h3');
var para = document.querySelector('p');
var btn1 = document.querySelector('button#payment');
var btn2 = document.querySelector('button#home');


var cvv;

function makePayment() {
    var txt = prompt('Please Enter a Send Money.');

    img.src = 'img/loading.svg';
    heading.textContent = 'Pending Payment!';
    para.textContent = '';
    document.querySelector('button#Payment').style.display = 'none';

    let mypromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Number(txt) >= 1) {
                resolve('I am done!');
            } else {
                reject(' I am Fail!');
            }
        }, 2000);
    })

    console.log(mypromise);
    mypromise.then(function (res) {
        img.src = 'img/pass.svg';
        heading.textContent = 'Payment Sucessful!';
        para.textContent = 'Your payment of ₹' + txt + ' was succesful and all the details have been sent to you on your registered email abc@gmail.com';
        document.querySelector('button#Payment').style.display = 'none';
        btn2.style.display = 'block';
    })
        .catch(function (err) {
            img.src = 'img/fail.svg';
            heading.textContent = 'Payment Failed!';
            para.textContent = 'Your transction has failed due to some technical error. Please try Again';
            document.querySelector('button#Payment').style.display = 'none';
            btn2.style.display = 'block';
        })
}

function home() {
    location.reload();
}