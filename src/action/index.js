export const addContact = (contact) => {
    // contact = prompt(`Введите Имя`);
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}