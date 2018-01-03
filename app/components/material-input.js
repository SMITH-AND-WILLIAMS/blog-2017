import Ember from 'ember';

export default Ember.Component.extend({

    class_focused :'',
    actions:{
        // focus :function(state){
        //     (state) ? this.set('class_focused','focus') : this.set('class_focused','')
        // },
                focus :function(state,val){ 
            // //set focused true or false
            if(state){
                this.set('class_focused','focused')
            } else{
                   //if not focused anymore but input not empty
               if(val !=""){   
    
                    this.set('class_focused','focused')
                }  else{
                    this.set('class_focused','')
                }

            }
           
         
             
            console.log(state,val);           
                  
        }
    }
});
