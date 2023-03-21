const btnNode = document.querySelector('.j-btn-request');
const resultNode = document.querySelector('.j-result');
resultNode.innerHTML = localStorage.getItem('stored_data');

btnNode.addEventListener('click', () => {      
    const numValue_1 = document.querySelector('#Number_input_1').value;
    const numValue_2 = document.querySelector('#Number_input_2').value;

    const url = `https://picsum.photos/v2/list?page=${numValue_1}&limit=${numValue_2}`;
    
    
    if(((numValue_1 < 1 || numValue_1 > 10) || isNaN(numValue_1)) && ((numValue_2 < 1 || numValue_2 > 10) || isNaN(numValue_2))) {
        resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10.';
    } else if ((numValue_1 < 1 || numValue_1 > 10) || isNaN(numValue_1)){
        resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10.';
    } else if ((numValue_2 < 1 || numValue_2 > 10) || isNaN(numValue_2)){
        resultNode.innerHTML = 'Указанный лимит вне диапазона от 1 до 10.';

    } else {
        fetch(url)
            .then((response) => {
                console.log("response", response);                
                const result = response.json();
                console.log(result);
                return result;      
            })
            .then((data) => {
                displayResult(data);
            })
            .catch(() => {console.log('error')});
    };
}); 

function displayResult(apiData) {    
    console.log(apiData);                
    let photos = '';
    apiData.forEach(item => {
        const card = `
        <div class="card">
            <img src="${item.download_url}" class="photo-card">
            <p class="result_p">${item.author}</p>                        
        </div>`;
    photos = photos + card;     
    localStorage.setItem('stored_data', photos);               
    });
    resultNode.innerHTML = photos;
};

