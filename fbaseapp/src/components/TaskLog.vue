<template>
 <div>
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col" style="width: 120px">Status</th>
          <th scope="col" class="text-center">Due Date</th>
          <th scope="col" class="text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task,index) in tasks" :key="index-1">
          <td>
            {{task.status}}
          </td>
          <td>
            {{task.name}}
          </td>
          <td class="text-center">
            {{task.date}}
          </td>
          <td class="text-center">
            <add-input> :msg="task" </add-input>
          </td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script> 

import AddTask from '../components/AddTask.vue'
export default{
    name: 'HelloWorld',
    props: {
        msg: String
    },

    components: {
      'add-input' : AddTask
    },
    
    data(){
      return{
        tasks: [
          {
            name:'Jalutan koera',
            status: '+',
            date:'12.10.2021'
          },
          {
            name:'Ei jaluta koera',
            status: '+',
            date:'13.10.2021'
          }
        ]
      }
    },
    
    methods: {
      submitTask(){
        if(this.task === 0) return;

        this.tasks.push({
            name: this.task,
            status: 'to-do'
        })
      }
    }

}
</script>



<style scoped>
</style>