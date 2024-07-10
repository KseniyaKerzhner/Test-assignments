function calculate() {
  var data = document.querySelector('.date')
  var time = document.querySelector('.time')
  var from = document.querySelector('.from')
  var to = document.querySelector('.to')
  var car = document.querySelector('.car')
  var total = document.querySelector('.total')
  var alert = document.querySelector('.alert')
  var button = document.querySelector('.order')
  var worker = document.querySelector('.worker')
  var promo = document.querySelector('.promo')
  var final = document.querySelector('.final')
  var achtung = document.querySelector('.achtung')

  alert.textContent = ''
  achtung.textContent = ''

  if (from.value === '' || to.value === '' || car.value === '') {
    achtung.textContent = 'Заполните поля Откуда, Куда, Машина'
    return
  }

  if (from.value === to.value) {
    alert.textContent = 'Переезд в рамках одного города невазможен'
    return
  }

  var sum = 0

  if (from.value === 's2') {
    sum = 8000
  } else if (from.value === 's4') {
    sum = 15000
  } else if (to.value === 's2') {
    sum = 8500
  } else if (to.value === 's4'){
    sum = 11000
  }

  if (worker.checked) {
    sum = sum + 200
  }

  if (promo.value === 'ЧАЙКА') {
    sum = sum - 401
  }

  if (car.value === 's2') {
    sum = sum + 1000
  } else if (car.value === 's3') {
    sum = 0.8 * (sum + 500)
  }

  total.textContent = 'ИТОГО: ' + sum.toFixed(3) + 'p'
}

function init() {
  document.querySelector(".calculate").onclick = function(){
    calculate()
  }

  document.querySelector(".final").onclick = function(){
    location.href='page2.html'
  }
}
