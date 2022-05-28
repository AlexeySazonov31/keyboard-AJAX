function func(){
let tds = document.querySelectorAll('td');
let textarea = document.querySelector('textarea');
let capsLock = document.querySelector('#capsLock');
let parent = document.querySelector('#parent');
let button = document.querySelector('#clear');

for( let td of tds ){
    if( td.dataset.res !== '!' ){
        td.dataset.value = td.innerHTML;    
    }
    td.addEventListener('click',function(){
        if( td.dataset.res !== '!' ){
                textarea.value += td.dataset.value;        
        } else if(td.dataset.value == 'Backspace'){
            let arr = textarea.value.split('');
            arr.pop();
            textarea.value = arr.join('');
        } else if(td.dataset.value == 'eng'){
            document.body.removeChild(parent);
            let past = textarea.value;

            fetch('englishAjax.html').then(
                response => {
                    return response.text();
                }
            ).then(
                text => {
                    document.body.innerHTML = text;
                    tds = document.querySelectorAll('td');
                    textarea = document.querySelector('textarea');
                    capsLock = document.querySelector('#capsLock');
                    parent = document.querySelector('#parent');
                    func();
                    textarea.value = past;
                }
            )
        } else if(td.dataset.value == 'rus'){
            document.body.removeChild(parent);
            let past = textarea.value;

            fetch('russishAjax.html').then(
                response => {
                    return response.text();
                }
            ).then(
                text => {
                    document.body.innerHTML = text;
                    tds = document.querySelectorAll('td');
                    textarea = document.querySelector('textarea');
                    capsLock = document.querySelector('#capsLock');
                    parent = document.querySelector('#parent');
                    func();
                    textarea.value = past;
                }
            )
        }
    });
}

let counter = 0;
capsLock.addEventListener('click',function(){
    this.classList.toggle('active');
    if ( counter == 0 ){
        for(let td of tds){
            if( td.dataset.res !== '!' ){
                td.innerHTML = td.innerHTML.toUpperCase();   
                td.dataset.value = td.innerHTML;     
            }
        }
        counter++;
    } else {
        for(let td of tds){
            if( td.dataset.res !== '!' ){
                td.innerHTML = td.innerHTML.toLowerCase();  
                td.dataset.value = td.innerHTML;      
            }
        }
        counter--;
    }
});

button.addEventListener('click',function(){
    textarea.value = '';        
})

}
func();




