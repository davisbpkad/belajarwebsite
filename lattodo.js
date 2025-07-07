/*
 * TODO LIST APPLICATION
 * Aplikasi daftar tugas sederhana dengan JavaScript
 * Fitur: Add, Delete, Mark as Done
 */

console.log("TODO List Application Loaded");

// ===========================
// 1. DATA INITIALIZATION
// ===========================

/**
 * Array untuk menyimpan data todo
 * Setiap todo memiliki struktur: { id, text, done }
 */
// const todos = [{
//     id: 1,
//     text: "Learn JavaScript",
//     done: true
// }, {
//     id: 2,  
//     text: "Build a TODO app",
//     done: false
// }];

// Inisialisasi data todos dari localStorage jika ada, atau gunakan data default
let todos = [];
const storedTodos = localStorage.getItem('todos');
if (storedTodos) {
    todos = JSON.parse(storedTodos);
} else {
    // Data initial jika localStorage kosong
    todos = [
        { id: 1, text: "Learn JavaScript", done: true },
        { id: 2, text: "Build a TODO app", done: false }
    ];
    localStorage.setItem('todos', JSON.stringify(todos));
}

// ===========================
// 2. DOM ELEMENTS
// ===========================

/**
 * Ambil referensi elemen-elemen penting dari DOM
 */
const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todo-list");

// ===========================
// 3. CORE FUNCTIONS
// ===========================

/**
 * Simpan data todos ke localStorage
 * Dipanggil setiap kali ada perubahan pada array todos
 */
function saveToLocalStorage() {
    try {
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log('Data berhasil disimpan ke localStorage');
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        alert('Gagal menyimpan data. Storage mungkin penuh.');
    }
}

/**
 * Menampilkan semua todo dari array ke dalam DOM
 * Fungsi ini akan membersihkan list lama dan membuat yang baru
 */
function renderTodos() {
    // Bersihkan list yang sudah ada
    todoList.innerHTML = "";
    
    // Jika tidak ada todos, tampilkan pesan kosong
    if (todos.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.className = "list-group-item text-center text-muted";
        emptyMessage.innerHTML = "<em>Belum ada todo. Tambahkan todo pertama Anda!</em>";
        todoList.appendChild(emptyMessage);
        return;
    }
    
    // Loop melalui setiap todo dan buat elemen HTML
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.setAttribute('data-index', index); // Tambahkan index untuk referensi
        
        // Buat struktur HTML untuk setiap item
        li.innerHTML = `
            <span class="todo-text ${todo.done ? 'text-decoration-line-through' : ''}">${todo.text}</span>
            <div class="btn-group" role="group">
                <button class="btn btn-danger btn-sm btn-delete" title="Hapus todo">Delete</button>
                <button class="btn btn-success btn-sm btn-done" title="${todo.done ? 'Tandai belum selesai' : 'Tandai selesai'}">${todo.done ? 'Undo' : 'Done'}</button>
            </div>
        `;
        
        // Tambahkan ke dalam list
        todoList.appendChild(li);
    });
    
    // Pasang event listeners setelah rendering
    attachEventListeners();
    
    // Update info statistics
    updateTodoStats();
}

/**
 * Menampilkan statistik todo (total, selesai, belum selesai)
 */
function updateTodoStats() {
    const total = todos.length;
    const completed = todos.filter(todo => todo.done).length;
    const remaining = total - completed;
    
    console.log(`Todo Stats - Total: ${total}, Completed: ${completed}, Remaining: ${remaining}`);
    
    // Update title dengan info jumlah
    document.title = `TODO List (${remaining} remaining)`;
}

/**
 * Menambahkan todo baru ke dalam array
 * @param {string} text - Teks todo yang akan ditambahkan
 */
function addTodo(text) {
    const newTodo = {
        id: Date.now(), // Generate ID unik menggunakan timestamp
        text: text.trim(),
        done: false
    };
    
    // Tambahkan ke array
    todos.push(newTodo);
    
    // Simpan ke localStorage
    saveToLocalStorage();
    
    // Render ulang untuk menampilkan perubahan
    renderTodos();
    
    console.log('Todo baru ditambahkan:', newTodo);
}

/**
 * Toggle status done/undone untuk todo tertentu
 * @param {number} index - Index todo dalam array
 */
function toggleTodoDone(index) {
    if (index >= 0 && index < todos.length) {
        todos[index].done = !todos[index].done;
        
        // Simpan ke localStorage
        saveToLocalStorage();
        
        // Render ulang untuk update tampilan
        renderTodos();
        
        console.log(`Todo ${index} status changed to: ${todos[index].done ? 'completed' : 'pending'}`);
    }
}

/**
 * Menghapus todo dari array
 * @param {number} index - Index todo yang akan dihapus
 */
function deleteTodo(index) {
    if (index >= 0 && index < todos.length) {
        const deletedTodo = todos[index];
        todos.splice(index, 1); // Hapus 1 elemen pada index tertentu
        
        // Simpan ke localStorage
        saveToLocalStorage();
        
        // Render ulang untuk update tampilan
        renderTodos();
        
        console.log('Todo dihapus:', deletedTodo);
    }
}

/**
 * Menghapus semua todo yang sudah selesai
 */
function clearCompletedTodos() {
    const beforeCount = todos.length;
    todos = todos.filter(todo => !todo.done);
    const afterCount = todos.length;
    const deletedCount = beforeCount - afterCount;
    
    if (deletedCount > 0) {
        // Simpan ke localStorage
        saveToLocalStorage();
        
        // Render ulang
        renderTodos();
        
        alert(`${deletedCount} todo yang sudah selesai berhasil dihapus.`);
        console.log(`${deletedCount} completed todos cleared`);
    } else {
        alert('Tidak ada todo yang sudah selesai untuk dihapus.');
    }
}

/**
 * Menampilkan data localStorage dalam format yang mudah dibaca
 */
function displayLocalStorageData() {
    const storedData = localStorage.getItem('todos');
    if (storedData) {
        console.log('=== DATA LOCALSTORAGE ===');
        console.log('Raw data:', storedData);
        console.log('Parsed data:', JSON.parse(storedData));
        console.log('Total items:', JSON.parse(storedData).length);
        
        // Tampilkan dalam alert juga untuk user
        const parsedData = JSON.parse(storedData);
        let message = `Data di LocalStorage:\n\n`;
        message += `Total Todo: ${parsedData.length}\n\n`;
        
        parsedData.forEach((todo, index) => {
            message += `${index + 1}. ${todo.text} ${todo.done ? '✓' : '⏳'}\n`;
        });
        
        alert(message);
    } else {
        console.log('Tidak ada data di localStorage');
        alert('Tidak ada data tersimpan di localStorage');
    }
}

/**
 * Memasang event listeners pada semua tombol
 * Dipanggil setiap kali setelah rendering
 */
function attachEventListeners() {
    // Event listeners untuk tombol Done
    const btnDone = document.querySelectorAll(".btn-done");
    btnDone.forEach((btn) => {
        btn.removeEventListener("click", doneBtnHandler); // Hapus listener lama
        btn.addEventListener("click", doneBtnHandler);
    });
    
    // Event listeners untuk tombol Delete
    const btnDelete = document.querySelectorAll(".btn-delete");
    btnDelete.forEach((btn) => {
        btn.removeEventListener("click", deleteBtnHandler); // Hapus listener lama
        btn.addEventListener("click", deleteBtnHandler);
    });
}

// ===========================
// 4. EVENT HANDLERS
// ===========================

/**
 * Handler untuk form submission (menambah todo baru)
 * @param {Event} event - Event object dari form submission
 */
function addBtnHandler(event) {
    event.preventDefault(); // Cegah reload halaman
    
    console.log("Add Button Clicked");
    
    // Validasi input
    if (todoInput.value.trim() === "") {
        alert("Please enter a todo item.");
        return;
    }
    
    // Tambahkan todo baru
    addTodo(todoInput.value);
    
    // Bersihkan input field
    todoInput.value = "";
}

/**
 * Handler untuk tombol Done
 * Mengubah status done/undone dari todo
 */
function doneBtnHandler() {
    console.log("Done Button Clicked");
    
    // Ambil elemen list item dan index-nya
    const todoItem = this.closest("li");
    const index = parseInt(todoItem.getAttribute('data-index'));
    
    // Toggle status done
    toggleTodoDone(index);
}

/**
 * Handler untuk tombol Delete
 * Menghapus todo dari list
 */
function deleteBtnHandler() {
    console.log("Delete Button Clicked");
    
    // Ambil elemen list item dan index-nya
    const todoItem = this.closest("li");
    const index = parseInt(todoItem.getAttribute('data-index'));
    
    // Hapus todo
    deleteTodo(index);
}

// ===========================
// 5. INITIALIZATION
// ===========================

/**
 * Event listener untuk form submission
 */
todoForm.addEventListener("submit", addBtnHandler);

/**
 * Inisialisasi aplikasi saat DOM sudah siap
 */
document.addEventListener("DOMContentLoaded", function() {
    renderTodos(); // Render todo yang sudah ada
});

/**
 * Render immediate jika DOMContentLoaded sudah fired
 * (sebagai fallback)
 */
renderTodos();


