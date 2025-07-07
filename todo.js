 let todos = [];
        
        // Add todo function
        function addTodo() {
            const input = document.getElementById('todoInput');
            const todoText = input.value.trim();
            
            if (todoText === '') {
                alert('Please enter a todo item!');
                return;
            }
            
            todos.push({
                id: Date.now(),
                text: todoText,
                completed: false
            });
            
            input.value = '';
            renderTodos();
        }
        
        // Delete todo function
        function deleteTodo(id) {
            todos = todos.filter(todo => todo.id !== id);
            renderTodos();
        }
        
        // Toggle todo completion
        function toggleTodo(id) {
            todos = todos.map(todo => 
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            );
            renderTodos();
        }
        
        // Render todos
        function renderTodos() {
            const container = document.getElementById('todoListContainer');
            
            if (todos.length === 0) {
                container.innerHTML = '<p class="text-center text-muted mt-4">No todos yet. Add one above!</p>';
                return;
            }
            
            container.innerHTML = todos.map(todo => `
                <div class="d-flex align-items-center mb-2 p-3 bg-white rounded border">
                    <div class="flex-grow-1">
                        <span class="${todo.completed ? 'text-decoration-line-through text-muted' : ''}" 
                              style="font-size: 16px;">
                            ${todo.text}
                        </span>
                    </div>
                    <div class="ms-3">
                        <button class="btn btn-sm btn-outline-danger me-2" onclick="deleteTodo(${todo.id})" 
                                style="width: 35px; height: 35px;">
                            X
                        </button>
                        <button class="btn btn-sm btn-outline-success" onclick="toggleTodo(${todo.id})" 
                                style="width: 35px; height: 35px;">
                            ✓
                        </button>
                    </div>
                </div>
            `).join('');
        }
        
        // Event listeners
        document.getElementById('addBtn').addEventListener('click', addTodo);
        
        document.getElementById('todoInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTodo();
            }
        });
        
        // Initial render
        renderTodos();