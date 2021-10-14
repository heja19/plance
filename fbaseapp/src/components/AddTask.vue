<template>
    <div>
        <div class="d-flex">
            <input v-model="task" type="text" placeholder="Add task" class="form-control">
            <input v-model="date" type="text" placeholder="Add due date" class="form-control">
            <button @click="submitTask" class="btn btn-warning rounded-0">Add</button>
        </div>
    </div>
</template>

<script> 
import TaskLog from './TaskLog.vue';


export default {
  components: {
    TaskLog
  },
  data() {
    return {
      users: [
        {
          id: 'task',
          name: 'date',
          email: '13.10.2021'
        },
        {
          id: 'task',
          name: 'date',
          email: '14.10.2021'
        },
      ]
    };
  }
};

</script>


<style scoped>
</style>