let checkbox = document.querySelector('input[name=theme]')

checkbox.addEventListener('change',function() {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.add('transition')
    }, 1000)
}