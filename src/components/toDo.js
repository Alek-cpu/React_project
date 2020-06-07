const toDo = () => {
    const mainCheckbox = document.getElementById('#checkbox');
    const childCheckbox = document.getElementById('child');

    const checkAllSelected = () => {
        if (mainCheckbox.checked) {
            childCheckbox.forEach((checkbox) => {
                checkbox.checked = true;
            });
        }
        else {
            childCheckbox.forEach((checkbox) => {
                checkbox.checked = false;
            });
        }
    };

    mainCheckbox.addEventListener('change', checkAllSelected);
}

export default toDo;