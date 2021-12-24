const el_a = document.querySelectorAll('.button');

el_a.forEach((a)=> {

    a.addEventListener('click', (event) => {
        event.preventDefault()
        console.log(event)
    })

})

