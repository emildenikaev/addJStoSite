function modal() {
  // Modal

  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

  function openModal(){
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId)
  }

  modalTrigger.forEach(btn => {
      btn.addEventListener('click', openModal);
  });

  function closeModal(){
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  modal.addEventListener('click', (e) =>{
    if (e.target === modal || e.target.getAttribute('data-close') == ''){
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.style.display === 'block'){
      closeModal();
    }  
  });

  const modalTimerId = setTimeout(openModal, 50000);

  function ShowModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
      openModal();
      window.removeEventListener('scroll', ShowModalByScroll)
    }
  }

  window.addEventListener('scroll', ShowModalByScroll);

}

module.exports = modal;