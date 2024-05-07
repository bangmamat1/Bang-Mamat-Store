document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Validate password match
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    if (password !== confirm_password) {
        document.getElementById('passwordError').innerText = 'Konfirmasi password tidak cocok';
        return;
    } else {
        document.getElementById('passwordError').innerText = '';
    }
    
    // Other validation (e.g., email format, password strength) can be added here
    
    // Submit form if all validations pass
    this.submit();
});

