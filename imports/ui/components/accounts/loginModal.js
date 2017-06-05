import './loginModal.html';
import './accounts-override.js';

Template.loginModal.events({
    'submit '(event) {
        $('.ui.modal').modal("toggle");
    }
})