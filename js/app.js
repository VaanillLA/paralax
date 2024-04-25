window.addEventListener("scroll", e=>{
document.body.style.cssText += `--scrollTop:${this.scrollY}px`
});
window.scrollBy({ top: -1000, behavior: 'smooth' })