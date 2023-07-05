Array.from(document.querySelectorAll('.accordion')).forEach(el => {

    let accordionTitle = el.querySelector('.accordion-title');
    let accordionBody = el.querySelector('.accordion-body');

     accordionTitle.innerHTML = `
     <div>`+accordionTitle.innerHTML+`</div>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="accordion-title-icon">
         <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/>
     </svg>
     `

     let accordionTitleIcon = el.querySelector('.accordion-title-icon');
    
    let toggle = function() {

        accordionBody.classList.toggle('collapsed')

        accordionTitleIcon.style.transform = accordionBody.classList.contains('collapsed') ? 'rotate(0deg)' : 'rotate(180deg)'
    }

    accordionTitle.addEventListener('click', toggle);

    toggle();
    toggle();
})
