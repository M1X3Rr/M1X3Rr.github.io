document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zastavíme predvolenú akciu odoslania formulára

    // Získame hodnoty z polí
    var email = document.getElementById('email').value;
    var text = document.getElementById('text').value;

    // Kontrola vyplnenia polí
    if (email.trim() === '') {
        alert('Please enter your email address.');
        return; // Zastavíme odoslanie formulára
    }

    if (text.trim() === '') {
        alert('Please write your text.');
        return; // Zastavíme odoslanie formulára
    }

    // Kontrola korektnosti emailovej adresy
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return; // Zastavíme odoslanie formulára
    }

    alert('Form submitted successfully!');
});
