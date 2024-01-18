const item = document.querySelector('ul');

const input = document.querySelector('input');

const button = document.querySelector('button');
button.addEventListener('click', () => {
  // alert("You added an item");
  let input_value = input.value;
  input.value = "";

  const li = document.createElement('li');
  const span = document.createElement('span');
  const btn = document.createElement('button');

  btn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(btn);

  span.textContent = input_value;
  btn.textContent = 'Delete';

  item.appendChild(li)
});

input.focus();
