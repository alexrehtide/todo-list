<template>
  <div>
    <q-toolbar class="bg-primary text-white q-px-md">
      <q-toolbar-title> Задач в списке: {{ todos.length }} </q-toolbar-title>
    </q-toolbar>

    <q-scroll-area :style="{ height: '300px' }">
      <q-list v-for="todo in todos" :key="todo.id">
        <q-item class="q-px-none">
          <q-item-section side>
            <q-btn
              round
              flat
              icon="delete"
              color="red"
              class="no-border-radius"
              @click="$emit('remove:todo', todo.id)"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ todo.title }}</q-item-label>

            <q-item-label caption>{{ todo.description }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn
              round
              flat
              icon="done"
              color="green"
              class="no-border-radius"
              @click="$emit('apply:todo', todo.id)"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <div class="row">
      <div class="col-10 q-px-md">
        <q-input
          :model-value="title"
          dense
          outlined
          label="Заголовок"
          class="q-mb-sm"
          @update:model-value="$emit('update:title', $event)"
        />
        <q-input
          :model-value="description"
          autogrow
          maxlength="150"
          dense
          outlined
          type="textarea"
          label="Описание"
          @update:model-value="$emit('update:description', $event)"
        />
      </div>

      <div class="col-2 flex items-end justify-end">
        <q-btn
          :disable="!title"
          round
          flat
          icon="add"
          color="primary"
          class="no-border-radius"
          @click="$emit('add:todo')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    }
  },

  emits: [
    'update:title',
    'update:description',
    'add:todo',
    'apply:todo',
    'remove:todo',
  ],
});
</script>
