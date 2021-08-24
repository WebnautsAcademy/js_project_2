

// console.log(data, "sdjbvsdh");

const pinTemplate = document.querySelector('#pin').content.querySelector('button');
const mapPinsElement = document.querySelector('.map__pins');

    export function getPins(data) {
        data.forEach((it, i, arr)=>{
            const pinElement = pinTemplate.cloneNode(true)
            const img =   pinElement.querySelector('img')
            img.src = it.author.avatar

            pinElement.style.left=it.location.x + 'px';
            pinElement.style.top=it.location.y + 'px';

           mapPinsElement.insertAdjacentElement('beforeend', pinElement)
        
    })

    }
   
