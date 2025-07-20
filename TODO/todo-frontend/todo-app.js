(function() {
    let listArray = [];
        listName = '';

    /** Создаём и возвращаем заголовок приложения */
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    /** Создаём и возвращаем форму для создания дела */
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название своего дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        /** Disabled для кнопки по умолчанию, чтобы при запуске приложения кнопка была неактивной */
        button.disabled = true;

        /** Устанавливаем атрибут 'disabled' для кнопки 'Добавить' при пустом поле ввода */
        input.addEventListener('input', function() {
            if (input.value !== '') {
                button.disabled = false;
            } else {
                button.disabled = true;
            }
        })
        
        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        }
    }

    /** Создаём и возвращаем список элементов */
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    /** Создаём дело - элемент списка */
    function createTodoItem(obj) {        
        let item = document.createElement('li');

        /** Кнопки помещаем в элемент, который красиво покажет их в одной группе */
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        /** Устанавливаем стили для элемента списка, а также для размещения кнопок
            в его правой части с помощью flex */
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = obj.name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        if (obj.done == true) item.classList.add('list-group-item-success');

        doneButton.addEventListener('click', function() {
            item.classList.toggle('list-group-item-success');
            for (const listItem of listArray) {
                if (listItem.id == obj.id)  listItem.done = !listItem.done; // done true/false дело по id
            }

            saveList(listArray, listName);

        });

        deleteButton.addEventListener('click', function() {
            if(confirm('Вы уверены?')) {
                item.remove();
            }
            for (i = 0; i < listArray.length; i++) {
                if (listArray[i].id == obj.id) listArray.splice(i,1); // удалить дело по id
            }

            saveList(listArray, listName);

        });

        /* Вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок */
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        /** Приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия */
        return {
            item,
            doneButton,
            deleteButton,
        };
    }

    function getNewID(arr) {
        let max = 0;
        for (const item of arr) {
            if(item.id > max) max = item.id;
        }
        return max + 1;
    }

    function saveList(arr, keyName) {
        localStorage.setItem(keyName, JSON.stringify(arr)); // сохраняем список дел по пользователю
    }


    // 11.4
    async function loadTodoItems() {
        const response = await fetch('http://localhost:3000/api/todos');
        const data = await response.json();
        console.log(data);
    }

    async function createTodoItemJson() {
        const response = fetch('http://localhost:3000/api/todos', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: 'Сходить за хлебом',
                owner: 'Сергей'
            })
        })
        const data = await response.json();
        console.log(data);
    }
    async function getTodoItem() {
        const response = await fetch('http://localhost:3000/api/todos/1731150785931');
        const data = await response.json();
        console.log(data);
    }
    async function markTodoAsDone() {
        const response = await fetch('http://localhost:3000/api/todos/1731150785931', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ done: true })
        })
        const data = await response.json();
        console.log(data);
    }
    async function deleteTodoItem() {
        const response = await fetch('http://localhost:3000/api/todos/1731150785931', {
            method: 'DELETE',
        })
        const data = await response.json();
        console.log(data);
    }

    //=================================================================

    /** Приложение */
    function createTodoApp(container, title = 'Список дел', keyName) {
        // 11.4
        // loadTodoItems();
        // createTodoItemJson();
        // getTodoItem();
        // markTodoAsDone();
        // deleteTodoItem();
        //==============================================================

        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        listName = keyName; //Делаем имя списка глобальным, т.к. нужно, чтобы оно было доступно везде

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        let localData = localStorage.getItem(listName);

        if (localData !== null && localData !== '') listArray = JSON.parse(localData); // читаем сохранённый список дел

        for (const itemList of listArray) {
            let todoItem = createTodoItem(itemList);
            todoList.append(todoItem.item);         
        }

        /** Браузер создаёт событие submit на форме по нажатию на Enter или на кнопку создания дела */
        todoItemForm.form.addEventListener('submit', function(e) {
            /** Эта строчка необходима, чтобы предотвратить стандартное действие браузера
                в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы */
            e.preventDefault();

            /** Игнорируем создание элемента, если пользователь ничего не ввёл в поле */
            if (!todoItemForm.input.value) {
                return;
            }

            let newItem = {
                id: getNewID(listArray),
                name: todoItemForm.input.value,
                done: false
            };
            
            let todoItem = createTodoItem(newItem);
            
            /* Добавляем обработчики на кнопки */
            
            listArray.push(newItem);

            saveList(listArray, listName);

            //создаём и добавляем в список новое дело с названием из поля для ввода
            todoList.append(todoItem.item);

            // обнуляем значение в поле, чтобы не пришлось его стирать вручную
            todoItemForm.input.value = '';

            // устанавливаем disabled для кнопки после очистки поля
            todoItemForm.button.disabled = true;
        }) 

        // Временные кнопки для урока
        // let serverBtnGroup = document.createElement('div');
        // let loadBtn = document.createElement('button');
        // let createBtn = document.createElement('button');
        // let getBtn = document.createElement('button');
        // let markBtn = document.createElement('button');
        // let deleteBtn = document.createElement('button');

    }

    window.createTodoApp = createTodoApp;
})();