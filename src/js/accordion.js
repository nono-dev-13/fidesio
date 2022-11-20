const accordion = document.querySelector('.accordion');
const items     = accordion.querySelectorAll('li');
const buttonAccordion = accordion.querySelectorAll('.js-heading');
const closeAccordion = accordion.querySelectorAll('.js-close');

function toggleAccordion() {
  const thisItem = this.parentNode;
  
    items.forEach(item => {
      if (thisItem == item) {
        thisItem.classList.toggle('open');
        return;
    }
    
    item.classList.remove('open');
  });
}

buttonAccordion.forEach(button => button.addEventListener('click', toggleAccordion));

closeAccordion.forEach(close => close.addEventListener('click', function(){
  this.parentNode.parentNode.classList.remove('open')
}));

