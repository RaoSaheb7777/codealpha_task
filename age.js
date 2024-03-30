function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    
    // Check if the input is a valid date
    if (isNaN(dob.getTime())) {
        alert('Please enter a valid date.');
        return;
    }
    
    // Check if the selected date is in the future
    const today = new Date();
    if (dob > today) {
        alert('Please select a date in the past.');
        return;
    }
    
    const diff = today - dob;
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById('result').innerText = `Your age is ${age} years.`;
}
