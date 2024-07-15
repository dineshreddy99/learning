document.getElementById('add-task').addEventListener('click', function() {
    var taskText = document.getElementById('new-task').value;
    if (taskText) {
        var li = document.createElement('li');
        li.textContent = taskText;

        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(removeButton);
        document.getElementById('task-list').appendChild(li);

        document.getElementById('new-task').value = '';
    }
});
