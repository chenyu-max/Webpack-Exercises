import getNumber from '../util/getNumber'
import appendNumber from "../page/appendNumber";

let n = new getNumber();
n.onNumberCreated = function (number, isPrime) {
    appendNumber(number, isPrime);
}

let isStart = false; // 默认设置为 false 表示为 还未开始

window.onclick = function () {
    if (isStart) {
        n.stop();
        isStart = false;
    } else {
        isStart = true;
        n.start();
    }
}