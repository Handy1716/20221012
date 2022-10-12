
document.addEventListener('DOMContentLoaded', () => { 
    document.getElementById('Username')!.addEventListener('input', (e) => {

    let elem = e.currentTarget as HTMLInputElement;
    
    console.log(elem.value);  
});
});