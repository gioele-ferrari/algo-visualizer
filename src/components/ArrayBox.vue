<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        displayArray: {
            type: Array,
            required: true
        },
        sortedIndex: {
            type: Array,
            required: false
        }
    });

</script>

<template>
    <div class="content-box">
        <div 
            class="index-box"
            v-for="(value, index) in props.displayArray"
            :key="index"
            :class="{ 'completed' : props.sortedIndex && props.sortedIndex[index] }">
                {{ value }}
        </div>
    </div>
</template>

<style scoped>
    .index-box {
        width: 50px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 10px;

        color: #FFF;
        background-color: #464646;
        box-shadow: #383838 0px 10px 0px 0px;
    }

    .completed {
        background-color: #588157;
        box-shadow: #436243 0px 10px 0px 0px;
    }
</style>