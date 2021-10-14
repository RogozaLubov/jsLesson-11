document.addEventListener('DOMContentLoaded', () => {
    //task1------------------------------------------------------------------------------
    let tabs = document.querySelector('.tabs');
    let content = document.querySelector('.content');

    let targetTab = null;
    tabs.addEventListener('click', event => {
        targetTab = event.target.dataset.target;
        tabs.childNodes.forEach(e => {
            //e.classList.remove('active');
            if(e.nodeType === 1) e.classList.remove('is-active');
        })
        if (event.target.matches('li')) event.target.classList.add('is-active');

        content.childNodes.forEach(e => {
            if(e.nodeType === 1) {
                e.classList.remove('is-active');
                if(e.dataset.target === targetTab) e.classList.add('is-active');
            }
        })
    })
    
    //task1------------------------------------------------------------------------------

    //task2------------------------------------------------------------------------------
    let tableTask2 = document.querySelector('.table-task2');
    tableTask2.addEventListener('click', event => {
        let color = window.getComputedStyle(event.target).backgroundColor;
        if (color === 'rgba(0, 0, 0, 0)') event.target.style.backgroundColor = 'yellow';
        else event.target.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    })
    //task2------------------------------------------------------------------------------

    //task3------------------------------------------------------------------------------
    let tableTask3 = document.querySelector('.table-task3');
    tableTask3.addEventListener('mouseover', event => {
        let color = window.getComputedStyle(event.target).backgroundColor;
        if (color === 'rgba(0, 0, 0, 0)') event.target.style.backgroundColor = 'blue';
        else event.target.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    })
    //task3------------------------------------------------------------------------------
})



