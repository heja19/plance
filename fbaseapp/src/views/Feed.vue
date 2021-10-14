<template>
    <div>
        <header>
            <div class="col-sm-10">
                <a href='#'><img src="@/assets/plance.png" class="header-icon"></a>
                <a href='#'><img src="@/assets/person-fill.svg" class="person-settings"></a>
                
            <flexbox><calendar></calendar></flexbox>
            </div>
        </header>
        <body>
            <flexbox>
            <div class="col-4">
            <div>
                <h4>Today's tasks</h4>
                    <div>
                        <h6>You don't have any tasks yet</h6>
                    </div>
            </div>
            <div>
                <h4>Today's tasks</h4>
                    <div>
                        <h6>You don't have any tasks yet</h6>
                    </div>
            </div>
        </div>
        </flexbox>
        <flexbox>
        <div>
            <h4>Workspace name</h4>
            <div>
                <h5><a href='#'><img src="@/assets/plus-circle.svg" class="add-new-project"></a>Add new project</h5>
                    <div>
                        <h6><a href='#'><img src="@/assets/plus-circle.svg" class="add-new-sub-project"></a>Add new sub-project</h6>
                    </div>
            </div>
        </div>
        </flexbox>
        <flexbox>
        <div>
            <h4>Workspace name</h4>
            <div>
                <h5><a href='#'><img src="@/assets/plus-circle.svg" class="add-new-project"></a>Add new project</h5>
                    <div>
                        <h6><a href='#'><img src="@/assets/plus-circle.svg" class="add-new-sub-project"></a>Add new sub-project</h6>
                    </div>
            </div>
        </div>
        </flexbox>
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
    /*border-style: groove;*/
    box-shadow: 0 4px 5px 0 rgba(169,169,169), 0 3px 15px 0 rgba(169,169,169);
    /*border-radius: 5px;*/
    border-color:azure;
    width: 100%;
}
.header-icon {
    align-items: left;
    height: 300px;
    width: auto;
    margin-left: 70px;
}
/*flexbox {
    display: flex;
    flex-direction: row;
}*/
</style>