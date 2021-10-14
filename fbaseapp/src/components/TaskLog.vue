<template>
 <div>
   <flexbox>
   <div>
     <h4>Task's log</h4>
    <table class="table table-bordered table-light mt-7">
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index-1">
          <td>
            <span
              class="pointer noselect"
              @click="changeStatus(index)"
              :class="{
                'text-danger': task.status === 'to-do',
                'text-success': task.status === 'finished',
              }"
            >
              {{ capitalizeFirstChar(task.status) }}
            </span>

          </td>
          <td>
            <span :class="{ 'line-through': task.status === 'Finished' }">
              {{ task.name }}
            </span>
          </td>
          <td class="text-center">
            <span>
              {{ task.date }}
            </span>
          </td>
          <td class="text-center">
            <div @click="deleteTask(index)">
              <span class="fa fa-trash pointer">Delete</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
   </div>
   </flexbox>

  <flexbox>
    <div class="col-4">
        <h4>Add tasks</h4>
      </div>
  </flexbox>
  
  <flexbox>
  <div class="d-flex">
      <input v-model="task" type="text" placeholder="Add task" class="form-control">
      <input v-model="date" type="text" placeholder="Add due date" class="form-control">
      <button @click="submitTask" class="btn btn-warning rounded-0">Add</button>
  </div>
  </flexbox>

 </div>

 
</template>

<script> 


export default{
    name: 'Tasklog',

    props: {
        userData: {
            nsg: String,
        }
    }, 

    data() {
    return {
      task: "",
      editedTask: null,
      statuses: ["to-do", "finished"],

      tasks: [
       

      ],
    };
  },
  methods: {

    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 1) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
    },

    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },

    submitTask() {
      if (this.task.length === 0) return;

      if (this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      } else {
   
        this.tasks.push({
          name: this.task,
          status: "to-do",
          date: this.date
        });
      }
      this.task = "";
    },
  },
};
</script>


<style scoped>
#row{
    margin: 0;
}
.person-settings {
    float: right;
    height: 70px;
    width: auto;

}
.add-new-project {
    float: middle;
    height: 20px;
    width: auto;
}
.add-new-sub-project {
    vertical-align: middle;
    height: 15px;
    width: auto;
}
div {
    border-style: groove;
    border-radius: 5px;
    border-color:azure;
    width: 100%;
}
.header-icon {
    align-items: left;
    height: 300px;
    width: auto;
    margin-left: 70px;
}
flexbox {
    display: flex;
    flex-direction: row;
}
</style>