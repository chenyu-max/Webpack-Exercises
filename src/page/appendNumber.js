import randomColor, {getRandom} from "../util/randomColor";


const divContainer = document.getElementById('divContainer');
const divCenter = document.getElementById('divCenter');

export default function (n, isPrime) {
    let span = document.createElement('span');
    if (isPrime) {
        const color = randomColor();
        span.style.color = color;
        createCenterPrimeNumber(n, color);
    }
    span.innerHTML = n;
    divContainer.appendChild(span);
    createCenterNumber(n);
}

function createCenterNumber(n) {
    divCenter.innerHTML = n;
}

function createCenterPrimeNumber(n, color) {
    const div = document.createElement('div');
    div.classList.add('center');
    div.style.color = color;
    div.innerText = n;
    document.body.appendChild(div);

    // 加入了div 后 强行让div 重新渲染
    getComputedStyle(div).left; // 只要读取某个元素的位置或者尺寸信息，就会造成浏览器重新渲染 reflow
    div.style.transform = `translate(${getRandom(-200, 200)}px, ${getRandom(-200, 200)}px)`;
    div.style.opacity = '0';
}