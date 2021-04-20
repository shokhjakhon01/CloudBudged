const  buttonMenu = document.querySelector('.menu__button')
const ulList = document.querySelector('.header__nav')
const regestration = document.querySelector('.nav__regestration')
const LangTipsLink = document.querySelector('.langTips__link')
const regestrationOtherLang = document.querySelector('.regestration__otherLang')
const closeButton = document.querySelector('.close__button')
const otherLangListLink = document.querySelectorAll('.otherlang__list-link')
const navRegestration = document.querySelector('.nav__regestration')




LangTipsLink.addEventListener('click', (event) =>{
  regestrationOtherLang.classList.toggle('active')
  
})

otherLangListLink.forEach((item, i)=>{
  otherLangListLink[0].addEventListener('click', ()=>{{
    LangTipsLink.innerHTML = 'Rus'
  }})
  otherLangListLink[1].addEventListener('click', ()=>{{
    LangTipsLink.innerHTML = 'Uzb'
  }})
  otherLangListLink[2].addEventListener('click', ()=>{{
    LangTipsLink.innerHTML = 'Spn'
  }})
})


buttonMenu.addEventListener('click', () =>{
  ulList.style.transform = 'translateY(0px)'
  
})
closeButton.addEventListener('click', () =>{
  ulList.style.transform = 'translateY(-200px)'
  
})