//mengedit header - Profile Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const editBtn = document.getElementById('editBtnProfile');
    const saveBtn = document.getElementById('saveBtnProfile');
    const cancelBtn = document.getElementById('cancelBtnProfile');
    const fields = [
        document.getElementById('name'),
        document.getElementById('job'),
        document.getElementById('desc')
    ];
    
    // Store original values
    let originalValues = fields.map(f => f.value);
    
    // Toggle field states
    function toggleFields(isEditing) {
        fields.forEach(field => {
            if (isEditing) {
                field.removeAttribute('readonly');
                field.classList.replace('form-control-plaintext', 'form-control');
            } else {
                field.setAttribute('readonly', true);
                field.classList.replace('form-control', 'form-control-plaintext');
            }
        });
        
        editBtn.style.display = isEditing ? 'none' : 'inline-block';
        saveBtn.style.display = isEditing ? 'inline-block' : 'none';
        cancelBtn.style.display = isEditing ? 'inline-block' : 'none';
    }
    
    // Validate fields
    function validateFields() {
        const messages = ['Nama tidak boleh kosong!', 'Jabatan tidak boleh kosong!', 'Deskripsi tidak boleh kosong!'];
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].value.trim() === '') {
                showNotification(messages[i], 'danger');
                fields[i].focus();
                return false;
            }
        }
        return true;
    }
    
    // Event listeners
    editBtn.onclick = () => {
        toggleFields(true);
        fields[0].focus();
        showNotification('Mode edit aktif - silakan ubah data Anda', 'info');
    };
    
    saveBtn.onclick = () => {
        if (validateFields()) {
            originalValues = fields.map(f => f.value);
            toggleFields(false);
            showNotification('Perubahan berhasil disimpan!', 'success');
        }
    };
    
    cancelBtn.onclick = () => {
        fields.forEach((field, i) => field.value = originalValues[i]);
        toggleFields(false);
        showNotification('Perubahan dibatalkan', 'warning');
    };
    
    // Keyboard shortcuts & auto-resize
    document.addEventListener('keydown', e => {
        if (!fields[0].hasAttribute('readonly')) {
            if (e.key === 'Escape') cancelBtn.click();
            else if (e.ctrlKey && e.key === 's') { e.preventDefault(); saveBtn.click(); }
        }
    });
    
    fields[2].addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
});

// Notification function
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.profile-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `profile-notification alert alert-${type} position-fixed`;
    notification.style.cssText = 'top: 80px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `<span>${message}</span><button type="button" class="btn-close ms-2" onclick="this.parentElement.remove()"></button>`;
    
    document.body.appendChild(notification);
    setTimeout(() => notification.parentElement && notification.remove(), 4000);
}

// Add CSS
const style = document.createElement('style');
style.textContent = `
    #profileForm .form-control {
        background-color: rgba(255, 255, 255, 0.9) !important;
        border: 1px solid rgba(255, 255, 255, 0.5) !important;
        color: #333 !important;
    }
    #profileForm .form-control:focus {
        background-color: rgba(255, 255, 255, 0.95) !important;
        border-color: #0d6efd !important;
        box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25) !important;
        color: #333 !important;
    }
    #profileForm .form-control::placeholder { color: rgba(51, 51, 51, 0.7) !important; }
    #profileForm textarea.form-control { resize: vertical; min-height: 60px; }
`;
document.head.appendChild(style);

console.log('Profile Form functionality loaded successfully.');