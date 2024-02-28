<script setup>
import { ref } from 'vue';

const arrayToSort = ref([5, 10, 1, 7, 9, 4]);
const arraySorted = ref([]);
const isClicked = ref(false);

const activeLength = ref(arrayToSort.value.length);

async function sortArray() {
  isClicked.value = true;
  arraySorted.value = arrayToSort.value.slice();

  for (let i = 0; i < arraySorted.value.length - 1; i++) {
    for (let j = 0; j < arraySorted.value.length - i - 1; j++) {
      if (arraySorted.value[j] > arraySorted.value[j + 1]) {
        let temp = arraySorted.value[j];
        arraySorted.value[j] = arraySorted.value[j + 1];
        arraySorted.value[j + 1] = temp;
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    activeLength.value--;
  }
}
</script>


<template>
  <div>
    <div class="content-box">
      <div class="index-box" v-for="(value, index) in arrayToSort" :key="index">{{ value }}</div>
    </div>
    <div class="content-box">
      <button @click="sortArray" class="btn-sort">Clicca per ordinare</button>
    </div>
    <div v-if="isClicked">
      <div class="content-box">
        <div 
          class="index-box"             
          :class="{ 'completed': index >= activeLength }"
          v-for="(value, index) in arraySorted" :key="index">
            {{ value }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .content-box {
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
  }

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

  button {
  padding: 17px 40px;
  border-radius: 10px;
  border: 0;
  background-color: #464646;
  letter-spacing: 1.5px;
  font-size: 15px;
  transition: all 0.3s ease;
  box-shadow: #383838 0px 10px 0px 0px;
  color: #FFF;
  cursor: pointer;
}

button:active {
  background-color: #464646;
  /*50, 168, 80*/
  box-shadow: #383838 0px 0px 0px 0px;
  transform: translateY(5px);
  transition: 200ms;
}
</style>
