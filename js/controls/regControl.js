document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Zabraňuje odosielaniu formulára

        // Kontrola vyplnenia pola 'Name'
        var nameInput = document.getElementById('name');
        var nameValue = nameInput.value.trim(); // Odstráni začiatočné a koncové medzery

        if (nameValue === '') {
            alert('Please enter your name.');
            nameInput.focus(); // Zameria kurzor na pole 'Name'
            return false;
        }

        // Kontrola vyplnenia pola 'Email address'
        var emailInput = document.getElementById('email_reg');
        var emailValue = emailInput.value.trim();

        if (emailValue === '') {
            alert('Please enter your email address.');
            emailInput.focus();
            return false;
        }

        // Kontrola korektnosti emailovej adresy pomocou regulárneho výrazu
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return false;
        }

        // Kontrola vyplnenia pola 'Password'
        var passwordInput = document.getElementById('password');
        var passwordValue = passwordInput.value.trim();

        if (passwordValue === '') {
            alert('Please enter your password.');
            passwordInput.focus();
            return false;
        }

        // Ak sa dostane sem, všetky kontroly prebehli úspešne
        // Môžete vykonať akcie, ako napríklad odoslanie formulára na server
        alert('Registration successful!');
        form.reset(); // Resetuje formulár

        return true;
    });
});
