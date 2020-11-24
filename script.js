window.addEventListener('load', start);

var inputA;
var inputB;
var A = 0;
var B = 0;

function start() {
  inputA = document.querySelector('#inputA');
  inputB = document.querySelector('#inputB');
  activateInput();
}

function activateInput(){
  inputA.focus();
  inputA.addEventListener('keyup', (ev) => {
    A = parseInt(ev.target.value);
    render();
  })
  inputB.addEventListener('keyup', (ev) => {
    B = parseInt(ev.target.value);
    render();
  })
}

function divisores (n) {
  var nums = [];
  for(i = 1; i <= n; i++){
    if(n%i==0) nums.push(i)
  }
  return nums.join(', ');
}

function fatorial (n) {
 var f = 1;
 for(var i = n; i>1; i--) {
   f *= i;
 }
 return f;
}

function render() {
  document.querySelector('#soma').value = A+B;
  document.querySelector('#sub1').value = A-B;
  document.querySelector('#sub2').value = B-A;
  document.querySelector('#multi').value = A*B;
  document.querySelector('#div1').value = A/B; //testar o zero
  document.querySelector('#div2').value = B/A; //testar o zero
  document.querySelector('#square1').value = A*A;
  document.querySelector('#square2').value = B*B;
  document.querySelector('#div3').value = divisores(A);
  document.querySelector('#div4').value = divisores(B);
  document.querySelector('#fat1').value = fatorial(A);
  document.querySelector('#fat2').value = fatorial(B);
}

