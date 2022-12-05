<script setup lang="ts">
import { computed, reactive, watch, ref } from 'vue';
import { RouterLink} from 'vue-router';
import { isLoading } from '@/stores/session'
import { getUsers, type User} from '@/stores/users'

    const users = ref([] as User[]);
    getUsers().then( x=> users.push(...x.users));

    const user = user();
    const search = ref("");

</script>

<template>
    <div>
        <div class="control container">
            <input class="input" type="text" placeholder="Search" v-model="search"  />
        </div>
        <div class="users">
            <RouterLink v-for="user in users" :key="user.name"
                        class="user" :class="{'is-disabled' : isLoading}"
                        :to="`/user/${user.name}`"
                        v-show="user.name.toLowerCase().includes(search.toLocaleLowerCase())">
                        <div class="user-info">
                            <b>{{user.name}}</b>
                        </div>
            </RouterLink>

        </div>
    </div>
</template>