// template_udt6vgu
// service_syx5urq
// rxH7LiEWJg3iisMof
let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList.add("dark-theme")
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.overlay__loading');
    const success = document.querySelector('.overlay__success');

loading.classList.add("overlay__visible")
    
    emailjs
        .sendForm(
            'service_syx5urq',
            'template_udt6vgu',
            event.target,
            'rxH7LiEWJg3iisMof'
        )
        .then(() => {
            // throw new Error("error");
            loading.classList.remove("overlay__visible");
            success.classList.add("overlay__visible");
        })
        .catch(() => {
            loading.classList.remove("overlay__visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at nicholas.sanmmartin20@gmail.com"
        )
    })


    loading.classList += " overlay__visible"
    setTimeout(() => {
    }, 1000);
 }

 function toggleModal() {
     if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
        };
    isModalOpen = true;
    document.body.classList += " modal--open"
 }