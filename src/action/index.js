export const addContact = (contact) => {
    alert( `You work - ${contact.companyName} company`);
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}