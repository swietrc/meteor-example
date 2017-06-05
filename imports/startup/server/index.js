// Import server startup through a single index entry point

import './fixtures.js';
import './register-api.js';


// Load exec
  var Future = Npm.require("fibers/future");

  var exec = Npm.require("child_process").exec;
 
  // Server methods
  Meteor.methods({
    runCode: function () {
      // This method call won't return immediately, it will wait for the
      // asynchronous code to finish, so we call unblock to allow this client
      // to queue other method calls (see Meteor docs)
      this.unblock();
      var future=new Future();
      var command="find .";
      exec(command,function(error,stdout,stderr){
        if(error){
          console.log(error);
          throw new Meteor.Error(500,command+" failed");
        }
        future.return(stdout.toString());
      });
      return future.wait();
    }
  });
