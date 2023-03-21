
function useRequest(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (xhr.status != 200) {console.log('Статус ответа: ', xhr.status);      
        } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
            callback(result);
        }
        }
    };
    xhr.onerror = function() {
        conole.log('Ошибка! Статус ответа: ', xhr.status);
    };
    xhr.send();
};

function displayResult(apiData) {
    let photos = '';

    apiData.forEach(item => {
        const photoBlock = `
        <div class="card">
            <img src="${item.download_url}" class="photo-card">
        </div>`;
        photos = photos + photoBlock;
    });
        resultNode.innerHTML = photos;
}


console.log("WHY")
  

const btnNode = document.querySelector('.j-btn-request');
const resultNode = document.querySelector('.j-result');


  
btnNode.addEventListener('click', () => {
    const value = document.querySelector('#Number_input').value;
    const valueNum = Number(value);
    if(valueNum < 1 || valueNum > 10){
        console.log(valueNum);
        console.log("Введенное число вне диапазона.");
    } else {
        console.log(valueNum)
        useRequest('https://picsum.photos/v2/list?limit=${valueNum}', displayResult);  
    };
});
