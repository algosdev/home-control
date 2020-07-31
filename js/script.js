const time = new Date();
let h = (time.getHours() > 12) ? (time.getHours() - 12) : time.getHours();
let pam = (time.getHours() > 12) ? 'PM' : 'AM';
let m = formatter(time.getMinutes());
let hour = h;
let day = formatter(time.getDay());
let month = formatter(time.getMonth());
let year = time.getFullYear();
const onOff = document.querySelectorAll('.toggler');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const temp = document.querySelector('.temperature');
const rooms = document.querySelectorAll('.rooms p');
let activeRoom = rooms[2];
const images = ['/img/1.png', '/img/2.png', '/img/3.png', '/img/4.png', '/img/5.png'];
rooms.forEach(el => {
    el.addEventListener('click', () => {
        activeRoom.classList.remove('linear');
        el.classList.add('linear');
        let w = parseInt(el.getAttribute('data-num'));
        document.querySelector('.camera img').setAttribute('src', `${images[w]}`);
        document.querySelector('.camera p span').innerHTML = w + 1;

        activeRoom = el;
    })
});
onOff.forEach(el => {
    el.addEventListener('click', () => {
        if (el.classList.contains('on')) {
            el.className = 'toggler off';
        }
        else {
            el.className = 'toggler on';
        }
    })
});
let c = parseInt(temp.innerText);
plus.addEventListener('click', () => {
    c++;
    temp.innerHTML = c;
});
minus.addEventListener('click', () => {
    c--;
    temp.innerHTML = c;
})
function formatter(n) {
    return (n < 10) ? `0${n}` : n;
}
function updateTime() {
    document.querySelector('.time').innerHTML = `${h}:${m}  ${pam}`;
    document.querySelector('.date').innerHTML = `${day}/${month}/${year}`;
}
updateTime();
setInterval(updateTime(), 60000);
var ctx = document.getElementById('power').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    responsive: true,
    data: {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J'],
        datasets: [{
            label: 'kW/h (last 6 months)',
            backgroundColor: '#fff',
            borderColor: '#1388CA',
            data: [0, 2.5, 2.7, 3.5, 2.7, 5.5, 9],
            fill: false,
            radius: 5,
            fontColor: '#1388CA',
            lineHeight: 1,
        }],
    },
    options: {
        title: {
            display: true,
            fontSize: 16,
            text: 'POWER',
            fontColor: '#1388CA',
            padding: -2
        },
        legend: {
            align: 'start',
            labels: {
                fontColor: '#1388CA',
                fontFamily: 'Saira',
                display: false,
            }
        },

    },
});
var ctxw = document.getElementById('water').getContext('2d');
var chartw = new Chart(ctxw, {
    type: 'line',
    responsive: true,
    data: {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J'],
        datasets: [{
            label: 'litre (last 6 months)',
            backgroundColor: '#fff',
            borderColor: '#1388CA',
            data: [0, 750, 550, 630, 840, 1070, 904],
            fill: false,
            radius: 5,
            fontColor: '#1388CA',
            lineHeight: 1,
        }],
    },
    options: {
        title: {
            display: true,
            fontSize: 16,
            text: 'WATER',
            fontColor: '#1388CA',
            padding: -2
        },
        legend: {
            align: 'start',
            labels: {
                fontColor: '#1388CA',
                fontFamily: 'Saira',
                display: false,
            }
        },
    },
});
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.defaultFontFamily = 'Saira';
Chart.defaults.global.defaultFontWeight = '400';
Chart.defaults.global.title.padding = 5;
Chart.defaults.global.layout.padding = 0;
let width = window.innerWidth;
onResize();
window.addEventListener('resize', () => {
    onResize();
})
function onResize() {
    width = window.innerWidth;
    if (width < 780) {
        document.querySelector('.over').style.display = 'flex';
        document.querySelector('.container').style.display = 'none';
    }
    else {
        document.querySelector('.over').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    }
}