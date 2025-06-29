let nextId = 0;

const checkTodo = (indicatorId, entry) => {
	const img = entry.querySelector('img');
	img.src = "./assets/check.png";
	img.style.pointerEvents = 'none';
	img.style.opacity = '0.5';
	
	document.getElementById('todo-list').removeChild(entry);
	document.getElementById('completed-list').appendChild(entry);
	document.getElementById('completed-heading').classList.remove('hidden');
}

const createNewItem = (itemId, value) => {
	const itemList = document.getElementById("todo-list");

	const entry = document.createElement("div");
	entry.classList.add("entry");

	const statusIcon = document.createElement("img");
	statusIcon.id = "indicator_" + itemId;
	statusIcon.src = "./assets/pending.png";
	statusIcon.addEventListener("click", () => checkTodo("indicator_" + itemId, entry));
	entry.append(statusIcon);

	const newItem = document.createElement("span");
	newItem.innerText = value;
	entry.append(newItem);

	itemList.append(entry);
}

const removePlaceholder = () => {
	document.getElementById("empty-placeholder")?.remove();
}

const addTodo = () => {
	const inputField = document.getElementById("todo-input");
	if (inputField.value) {
		createNewItem(nextId, inputField.value);
		removePlaceholder();
		inputField.value = "";
		nextId++;
	}
}

window.addEventListener('load', () => {
	document.getElementById("todo-button").addEventListener("click", addTodo)
});
