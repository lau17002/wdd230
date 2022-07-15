    const fromDate = document.querySelector('#fromDate');
    const toDate = document.querySelector('#toDate');
    const curDate = new Date();
    
    let month = curDate.getMonth() + 1;
    let day = curDate.getDate();
    let year = curDate.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    let maxDate = year + '-' + month + '-' + day;
    fromDate.setAttribute('min', maxDate);
    toDate.setAttribute('min', maxDate);