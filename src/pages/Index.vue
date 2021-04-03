<template>
  <q-page>
    <div class="row">
      <div class="col-3 q-mx-auto">
        <todo-list
          v-model:title="todoService.todo.title"
          v-model:description="todoService.todo.description"
          :todos="todoService.currentTodos"
          @add:todo="todoService.addTodo"
          @apply:todo="todoService.applyTodo($event)"
          @remove:todo="todoService.removeTodo($event)"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { useTodoService } from 'src/hooks';
import TodoList from 'components/TodoList.vue';

export default defineComponent({
  components: {
    TodoList,
  },

  setup() {
    return {
      todoService: useTodoService(),
    };
  },
});
</script>
