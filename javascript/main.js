
Vue.component('todo', {
   props: ['todos'],
    template: ' <div class="todo-card"><label class="container"> <input type="checkbox" v-model="todos.checked" v-on:click="alteraChecked(todos.id)"><span class="checkmark"></span><span class="card-text">{{todos.text}}</span></label></div>'
        
            
    

})

new Vue({el:"#app",
data:{
    id: 0,
    inputTodo:'',
    todos: []
},
methods:{
        
        addTodo: function() {
           
            alert(this.todos)
            
            if(this.inputTodo){
            let newTodo ={
                id: this.todos.length ,
                checked: false,
                text: this.inputTodo
            }
           // this.todos.push(newTodo);
           this.todos.push(newTodo);
           localStorage.setItem("todos", JSON.stringify(this.todos))
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
