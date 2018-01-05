import Ember from 'ember';
import { computed } from '@ember/object';
export default Ember.Component.extend({
    classNameBindings:['class_focused'],
    class_focused :'',
    actions:{

                focus :function(state,val){ 

            if(state){
                this.set('class_focused','focused')
            } else{

               if(val !=""){   
    
                    this.set('class_focused','leftFocused')
                }  else{
                    this.set('class_focused','')
                }

            }
           
         
             
            console.log(state,val);           
                  
        }
    }
});
