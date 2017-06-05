import './hello.html';

Template.hello.onCreated(function helloOnCreated() {
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    Meteor.call('runCode', (err, res) => {
          instance.counter.set(res);

    })
  },
});
