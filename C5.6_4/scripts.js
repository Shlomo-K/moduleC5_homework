
const btnNode = document.querySelector('.j-btn-request');

const image = document.querySelector('.img')

btnNode.addEventListener('click', () => {      
    const inputValue_1 = document.querySelector('#input_1').value;
    const inputValue_2 = document.querySelector('#input_2').value;
    const numValue_1 = Number(inputValue_1);
    const numValue_2 = Number(inputValue_2);
    const url = `https://picsum.photos/${numValue_1}/${numValue_2}`;
    // const image = document.querySelector('.img')
    
    if((numValue_1 < 100 || numValue_1 > 300) || (numValue_2 < 100 || numValue_2 > 300) || isNaN(numValue_1) || isNaN(numValue_2)) {
        console.log('Оба или одно из введенных чисел вне диапазона.')
    } else {
        fetch(url)
            .then((response) => {
                console.log("response", response);
                const result = response.blob();
                console.log(result);
                return result;      
            })
            .then((data) => {
                const imageObject = URL.createObjectURL(data);
                console.log(imageObject);
                image.src = imageObject
                
            })
            .catch(() => {console.log('error')});
        
    };
}); 



// async function fH() {
//     try {
//         const response = await fetch('https://picsum.photos/150/200');
//         const data = await response.json();
//         console.log(data);
//         // image.src = data.file;
//     } catch(error) {
//         console.log('error');
//     }
// }
// fH();
