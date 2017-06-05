import { Template } from 'meteor/templating';

import './accounts-override.html';

Template['override-atPwdFormBtn'].replaces('atPwdFormBtn')
Template['override-atForm'].replaces('atForm')
Template['override-atPwdForm'].replaces('atPwdForm')
Template['override-atInput'].replaces('atInput')

Template['override-atTextInput'].replaces('atTextInput')

Template.atForm.helpers({
  any: function (a, b, c) {
    return a || b || c ? true : false;
  }
});