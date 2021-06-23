// Step 1 -> create variables `form`, `opisList`, `button`, `input`
    // to target the form, unordered list, button and input.
    var form = document.querySelector('form');
    var opisList = document.querySelector('ul');
    var button = document.querySelector('button');
    var input = document.getElementById('gas-form');

    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        gasSelector(input.value);
        input.value = "";//by this we will clear out input value for next time
    });

    // Step 3 -> create a gasSelector function that creates 'li' elements with the text user provides
    
    var gasSelector = (text) => {

        var todo = document.createElement('li');
        todo.textContent = text;
        opisList.appendChild(todo);
    }
    
    // Step 4 -> attach an event listener to the `clear all` button listening for
    // a user click.
      button.addEventListener('click', () => {
          //remove all from the list <li>
            while (opisList.firstChild) {
            opisList.removeChild(opisList.firstChild);
            }
      });