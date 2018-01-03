import Ember from 'ember';

export default Ember.Controller.extend({
    focused:false,
    
    actions: {      
     
        submit : function(){
            console.log("sent");
        }
    }
});
