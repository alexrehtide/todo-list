import { v4 } from 'uuid';
import { ref, computed, reactive } from 'vue';

export function useTodoService() {
  const todos = ref<Todo[]>([]);
  const { todo, reset } = useForm();

  const currentTodos = computed(() =>
    todos.value.filter((todo) => !todo.isDone)
  );

  const addTodo = () => {
    todos.value = todos.value.concat(todo.value);
    reset();
  };

  const applyTodo = (id: string) => {
    todos.value.forEach((todo) => {
      if (todo.id === id) {
        todo.isDone = true;
      }
      return todo;
    });
  };

  const removeTodo = (id: string) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  return reactive({
    todos,
    todo,
    currentTodos,
    addTodo,
    applyTodo,
    removeTodo,
  });
}

function useForm() {
  const createTodo = () => ({
    id: v4(),
    title: '',
    description: '',
    isDone: false,
  });

  const todo = ref<Todo>(createTodo());

  const reset = () => {
    todo.value = createTodo();
  };

  return {
    todo,
    reset,
  };
}

interface Todo {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}
