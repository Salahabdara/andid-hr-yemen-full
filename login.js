// Login Page Script
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const loginForms = document.querySelectorAll('.login-form');
    const registrationForms = document.querySelectorAll('.registration-form');
    const modal = document.getElementById('registration-modal');
    const closeModal = document.querySelector('.close-modal');
    const registerLinks = document.querySelectorAll('[id$="-link"]');

    // Login tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and forms
            tabButtons.forEach(btn => btn.classList.remove('active'));
            loginForms.forEach(form => form.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding form
            this.classList.add('active');
            document.getElementById(targetTab + '-login').classList.add('active');
        });
    });

    // Registration modal functionality
    registerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            
            // Determine which registration form to show
            const linkId = this.id;
            const registrationTabButtons = document.querySelectorAll('.registration-tabs .tab-btn');
            
            registrationTabButtons.forEach(btn => btn.classList.remove('active'));
            registrationForms.forEach(form => form.classList.remove('active'));
            
            if (linkId === 'register-user-link') {
                document.querySelector('[data-tab="user-register"]').classList.add('active');
                document.getElementById('user-register').classList.add('active');
            } else if (linkId === 'register-employer-link') {
                document.querySelector('[data-tab="employer-register"]').classList.add('active');
                document.getElementById('employer-register').classList.add('active');
            }
        });
    });

    // Registration tab switching
    const registrationTabButtons = document.querySelectorAll('.registration-tabs .tab-btn');
    registrationTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            registrationTabButtons.forEach(btn => btn.classList.remove('active'));
            registrationForms.forEach(form => form.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Form submissions
    const userLoginForm = document.getElementById('user-login-form');
    const employerLoginForm = document.getElementById('employer-login-form');
    const adminLoginForm = document.getElementById('admin-login-form');
    const userRegisterForm = document.getElementById('user-register-form');
    const employerRegisterForm = document.getElementById('employer-register-form');

    // User login
    if (userLoginForm) {
        userLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('user-email').value;
            const password = document.getElementById('user-password').value;
            
            // Simulate login process
            showAlert('جاري تسجيل الدخول...', 'info');
            
            setTimeout(() => {
                // Simulate successful login
                showAlert('تم تسجيل الدخول بنجاح!', 'success');
                // Redirect to user dashboard
                window.location.href = 'profile.html';
            }, 1500);
        });
    }

    // Employer login
    if (employerLoginForm) {
        employerLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('employer-email').value;
            const password = document.getElementById('employer-password').value;
            
            showAlert('جاري تسجيل الدخول...', 'info');
            
            setTimeout(() => {
                showAlert('تم تسجيل الدخول بنجاح!', 'success');
                window.location.href = 'employer.html';
            }, 1500);
        });
    }

    // Admin login
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('admin-username').value;
            const password = document.getElementById('admin-password').value;
            
            showAlert('جاري تسجيل الدخول...', 'info');
            
            setTimeout(() => {
                showAlert('تم تسجيل الدخول بنجاح!', 'success');
                window.location.href = 'admin.html';
            }, 1500);
        });
    }

    // User registration
    if (userRegisterForm) {
        userRegisterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('user-reg-password').value;
            const confirmPassword = document.getElementById('user-confirm-password').value;
            
            if (password !== confirmPassword) {
                showAlert('كلمات المرور غير متطابقة', 'error');
                return;
            }
            
            showAlert('جاري إنشاء الحساب...', 'info');
            
            setTimeout(() => {
                showAlert('تم إنشاء الحساب بنجاح! يرجى تسجيل الدخول.', 'success');
                modal.style.display = 'none';
                userRegisterForm.reset();
            }, 2000);
        });
    }

    // Employer registration
    if (employerRegisterForm) {
        employerRegisterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('company-reg-password').value;
            const confirmPassword = document.getElementById('company-confirm-password').value;
            
            if (password !== confirmPassword) {
                showAlert('كلمات المرور غير متطابقة', 'error');
                return;
            }
            
            showAlert('جاري إنشاء حساب الشركة...', 'info');
            
            setTimeout(() => {
                showAlert('تم إنشاء حساب الشركة بنجاح! سيتم مراجعة طلبكم خلال 24 ساعة.', 'success');
                modal.style.display = 'none';
                employerRegisterForm.reset();
            }, 2000);
        });
    }

    // Alert function
    function showAlert(message, type) {
        // Remove existing alerts
        const existingAlerts = document.querySelectorAll('.alert');
        existingAlerts.forEach(alert => alert.remove());
        
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        
        // Insert at the top of the login section
        const loginSection = document.querySelector('.login-section');
        loginSection.insertBefore(alert, loginSection.firstChild);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }
});

