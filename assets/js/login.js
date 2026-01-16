// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Basic validation
            if (!email || !password) {
                alert('Vui lòng điền đầy đủ thông tin đăng nhập.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Vui lòng nhập địa chỉ email hợp lệ.');
                return;
            }
            
            // Here you would typically send the data to a server
            console.log('Login attempt:', { email, password });
            
            // Simulate login process
            alert('Đang xử lý đăng nhập...');
        });
    }
    
    // Add focus effects to inputs
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.borderColor = '#013a59';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.borderColor = '#b0bec5';
        });
    });
});
