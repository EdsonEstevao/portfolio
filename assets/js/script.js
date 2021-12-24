const el_a = document.querySelectorAll('a');

el_a.forEach((a)=> {

    a.addEventListener('click', (event) => {
        event.preventDefault()
        console.log(event)
    })

})

