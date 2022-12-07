<script setup lang="ts">

import { ref } from 'vue';
import {useRoute, useRouter} from "vue-router";

const email = ref('');
const password = ref ('');
const name= ref('');
const handle= ref('');

const route = useRoute();
const router= useRouter();

const user = ref({} as User);
const isNew = ref(route.params.name=='new')

</script>
<template>
    <div>
   
    </div>
</template>

<style scoped>
</style>