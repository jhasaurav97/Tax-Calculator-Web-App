

document.getElementById('taxForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const age = document.getElementById('age').value;
    const income = parseFloat(document.getElementById('income').value);
    const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;

    const errorIcon = document.getElementById('errorIcon');
    errorIcon.classList.add('hidden');

     if (!age) {
        errorIcon.classList.remove('hidden');
        errorIcon.innerText = '!';
        return;
    }

    let tax = 0;

    if (income + extraIncome - deductions > 800000) {
        if (age === 'below_40') {
            tax = 0.3 * (income + extraIncome - deductions - 800000);
        } else if (age === '40_to_60') {
            tax = 0.4 * (income + extraIncome - deductions - 800000);
        } else if (age === 'above_60') {
            tax = 0.1 * (income + extraIncome - deductions - 800000);
        }
    }

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `Your overall income will be` + `<br />` + `${(income + extraIncome - deductions) - tax}`+ `<br />` + `after tax deductions.`;

    document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hidden');
});