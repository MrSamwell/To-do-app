


new Vue({el:"#app",
data:{
    id: 0,
    inputTodo:'',
    todos: [],
    showInput: false
},
methods:{
        openInput: function(){
            this.showInput = !this.showInput; 
            setTimeout(() => {
             this.$refs.inputdo.focus();
            }, 0);
        },
        addTodo: function() {
           
            
            
            if(this.inputTodo){
            let newTodo ={
                id: this.todos.length ,
                checked: false,
                text: this.inputTodo
            }
           // this.todos.push(newTodo);
           this.todos.push(newTodo);
           localStorage.setItem("todos", JSON.stringify(this.todos))
           this.inputTodo = '';
           this.showInput = !this.showInput;
        }


    
     
    
    },
    alteraChecked: function(i) {
        this.todos[i].checked = !this.todos[i].checked
        localStorage.setItem("todos", JSON.stringify(this.todos))
    },

    deleteTodo: function(i) {
            removerPorId(this.todos, i);
            
            localStorage.setItem("todos", JSON.stringify(this.todos));

            function removerPorId(array, id) {
                var result = array.filter(function(el) {
                  return el.id == id;
                });
                  
                for(var elemento of result){
                  var index = array.indexOf(elemento);    
                  array.splice(index, 1);
                }
              }
    }
    
},
   mounted: function() {
        
       if(JSON.parse(localStorage.getItem('todos')) === null){
           localStorage.setItem('todos', '');
       }
       this.todos = JSON.parse(localStorage.getItem('todos'));
       console.log("I am working");
   }

})
