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


export default{
    name: 'HelloWorld',
    props: ['msg'],

    methods: {
      submitTask(){
        if(this.task.length === 0) return;

        this.tasks.push({
            name:this.task,
        })
      }
    },

    data(){
        return{
            task: '',
            date: ''
        }
    }

}
</script>


<style scoped>
</style>