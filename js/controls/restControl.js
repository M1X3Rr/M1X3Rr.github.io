// Vyberte formulár pomocou jeho ID
const form = document.getElementById('nameGenderForm');

// Pripojte obslužnú funkciu na udalosť odoslania formulára
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Zabránenie odoslaniu formulára

    // Získajte hodnoty z vstupných polí
    const nameInput = document.getElementById('names');
    const name = nameInput.value;

    const studyingCheckbox = document.getElementById('inlineCheckbox1');
    const isStudying = studyingCheckbox.checked;

    const workingCheckbox = document.getElementById('inlineCheckbox2');
    const isWorking = workingCheckbox.checked;

    const genderRadios = document.getElementsByName('exampleRadios');
    let selectedGender = '';
    for (const radio of genderRadios) {
        if (radio.checked) {
            selectedGender = radio.value;
            break;
        }
    }

    // Validácia vstupov
    let isValid = true;

    if (name.trim() === '') {
        isValid = false;
        // Ak je pole 'Name' prázdne, zobraziť chybovú správu
        nameInput.classList.add('is-invalid');
    } else {
        nameInput.classList.remove('is-invalid');
    }

    if (!isStudying && !isWorking) {
        isValid = false;
        // Ak nie je zvolený žiadny checkbox ('I am studying.' alebo 'I am working.'), zobraziť chybovú správu
        studyingCheckbox.classList.add('is-invalid');
        workingCheckbox.classList.add('is-invalid');
    } else {
        studyingCheckbox.classList.remove('is-invalid');
        workingCheckbox.classList.remove('is-invalid');
    }

    if (selectedGender === '') {
        isValid = false;
        // Ak nie je zvolený žiadny pohlavie, zobraziť chybovú správu
        const genderLabels = document.querySelectorAll('input[name="exampleRadios"] + label');
        for (const label of genderLabels) {
            label.classList.add('is-invalid');
        }
    } else {
        const genderLabels = document.querySelectorAll('input[name="exampleRadios"] + label');
        for (const label of genderLabels) {
            label.classList.remove('is-invalid');
        }
    }

    if (isValid) {
        // Ak sú všetky polia vyplnené správne, môžete vykonať ďalšie akcie (napr. odoslať formulár na server)
        console.log('Formulár je správne vyplnený. Môžete vykonať odoslanie.');
        // Tu môžete pridať kód na odoslanie formulára na server
    } else {
        console.log('Formulár obsahuje chyby. Prosím, skontrolujte vyplnené údaje.');
    }
});