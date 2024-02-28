<script setup>
  import { ref } from 'vue';
  import ArrayBox from './components/ArrayBox.vue';

  const arrayToSort = ref([5, 10, 1, 7, 9, 4]);
  const arraySorted = ref([]);

  const sortedIndex = ref(Array(arrayToSort.value.length).fill(false));

  const activeLength = ref(arrayToSort.value.length);
  
  const bubbleSort = async() => {
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
      sortedIndex.value[arraySorted.value.length - i - 1] = true;
      activeLength.value--;
    }
  };

  const insertionSort = async () => {
  arraySorted.value = arrayToSort.value.slice();

  for (let i = 1; i < arraySorted.value.length; i++) {
    let key = arraySorted.value[i];
    let j = i - 1;

    while (j >= 0 && arraySorted.value[j] > key) {
      arraySorted.value[j + 1] = arraySorted.value[j];
      j = j - 1;
    }
    sortedIndex.value[j + 1] = key;
    await new Promise(resolve => setTimeout(resolve, 1000));
    isSorted.value[i - 1] = true;
    activeLength.value--;
  }
};

</script>


<template>
  <div>
    <ArrayBox :displayArray="arrayToSort"></ArrayBox>
    <div class="content-box">
      <button @click="bubbleSort" class="btn-sort">Bubble Sort</button>
      <button @click="insertionSort" class="btn-sort">Insertion Sort</button>
    </div>
    <ArrayBox :displayArray="arraySorted" :sortedIndex="sortedIndex"></ArrayBox>
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
