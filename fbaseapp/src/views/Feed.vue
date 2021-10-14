<template>
    <div class="kast1">
        <header>
            <div>
                <a href='#'><img src="@/assets/plance.png" class="header-icon"></a>
                <a href='#'><img src="@/assets/person-fill.svg" class="person-settings"></a>
            </div>
        </header>


        <body>
            <flexbox>
            <div class="calendar">
                <flexbox><calendar></calendar></flexbox>
            </div>
            <div class="today">
                <h4>Today's tasks</h4>
                    <div class="todayIn">
                        <h6>You don't have any tasks yet</h6>
                    </div>
            </div>   
            </flexbox>

        
        <div class="workspaceName">
            <div class="feed">
                <task-log></task-log>
            </div>
        </div>
    


    </body>
    </div>
</template>

<script setup>
import calendar from '@/components/Calendar.vue'
import { getAuth, onAuthStateChanged} from 'firebase/auth'
import { useRouter } from 'vue-router'
import { onBeforeUnmount } from 'vue'
const router = useRouter()
const auth = getAuth()
const authListener = onAuthStateChanged(auth, function(user) {
    if (!user) { // not logged in
        alert('you must be logged in to view this. redirecting to the home page')
        router.push('/')
    }
})
onBeforeUnmount(() => {
    authListener()
})
</script>

<script>
import AddTask from '../components/AddTask.vue'
import TaskLog from '../components/TaskLog.vue'
export default {
    name: 'Feed',
    components: {
        AddTask,
        TaskLog
    }
}
</script>

<style scoped>
.kast1 {
    width: 100%;
    margin-left: 5%;
}
.calendar{
    width: 100%;
    margin-left: 0%;
    box-shadow: none;
}
.person-settings {
    float: right;
    height: 70px;
    width: auto;
}
.today {
    box-shadow: none;
    border-radius: 5px;
    background-color: #fae1ddd3;
    border-color:azure;
}
.todayIn{
    box-shadow: none;
    border-radius: 5px;
    background-color: #c0c0c0d3;
    border-color:azure;
}
.workspaceName {
    box-shadow: none;
    border-radius: 5px;
    background-color: #fae1ddd3;
    border-color:azure;
}
.projectName {
    box-shadow: none;
    border-radius: 5px;
    background-color: #c0c0c0d3;
    border-color:azure;
}
.subProjectName {
    box-shadow: none;
    border-radius: 5px;
    background-color: #e4e4e4d3;
    border-color:azure;
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
    /*border-style: groove;*/
    box-shadow: 0 4px 5px 0 rgba(169,169,169), 0 3px 15px 0 rgba(169,169,169);
    border-radius: 10px;
    border-color:azure;
    width: 100%;
}
.header-icon {
    align-items: left;
    height: 100px;
    margin-left: 1%;
}
</style>