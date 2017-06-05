import { AccountsTemplates } from 'meteor/useraccounts:core';

let hideModal = (error, state) => {
    if(!error)
        $('.ui.modal').modal('hide')
}

AccountsTemplates.configure({
    confirmPassword: true,

    // Hooks
    onSubmitHook: hideModal
});

// Add new fields to users
/*
AccountsTemplates.addFields([
    {
        _id: 'firstName',
        type: 'text',
        displayName: 'First Name',
    }
])
*/
