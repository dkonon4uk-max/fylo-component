const btns = document.querySelector('#btns')

btns.addEventListener('click', (event) => {
    // console.log('key');
    // console.log(event);
    // console.log(event.target);
    if (event.target.id === 'document') {
        console.log(1);
    } else if (event.target.id === 'folder') {
        console.log(2);
    } else if (event.target.id === 'upload') {
        console.log(3);
    }
})

const line = document.querySelector('.line')
const used = document.querySelector('.used')

console.dir(line.getBoundingClientRect().width.toFixed());
console.dir(used.getBoundingClientRect().width.toFixed());

const lineWidth = line.getBoundingClientRect().width - 6
const usedWidth = used.getBoundingClientRect().width

console.log(usedWidth * 100 / lineWidth);
let percentWidth = (usedWidth * 100 / lineWidth).toFixed(2)
console.log(percentWidth);

const addFileMb = 100
const addFilePercent = addFileMb * 100 / 1000
console.log(addFilePercent);

percentWidth = Number(percentWidth) + addFilePercent
console.log(percentWidth);

used.style.width=`${percentWidth}%`

const capasity = document.querySelector('.info p span')
console.log(capasity.textContent);
capasity.textContent = `${percentWidth * 10} GB`