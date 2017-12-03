import Ember from 'ember';

export default Ember.Controller.extend({
    focused:false,
    
    actions: {      
        
        focus(state,val,name) {
            // //set focused true or false
            this.set('focused', state);
            //if not focused anymore but input not empty
             if(!state && val !=""){
                //force state
                state=true;
                this.set('focused', state);
            }  
            console.log(state,name);           
                  
        },
        submit : function(){
            console.log("sent");
        }
    }
});
