
const articles = document.querySelectorAll('article')

articles.forEach(item=>{
  item.addEventListener('click',e => {
    e.target.classList.toggle('active')
  })
})