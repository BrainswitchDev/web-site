/* Add here all your JS customizations */

var App = {
    init: function(){        
        this.myRootRef = new Firebase('https://web-site-brainswitch.firebaseio.com/');
    },
    save: function (item) {
        this.myRootRef.child("users").child(item.Id).set(item);   
    }
};           