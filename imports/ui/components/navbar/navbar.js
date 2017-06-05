import './navbar.html';

Template.navbar.events({
    'click .open-login'(event) {
        event.preventDefault();
        $('.ui.modal').modal("toggle");
    },
    'click .logout'(event) {
        Meteor.logout();
    }
})