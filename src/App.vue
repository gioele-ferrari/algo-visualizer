<script setup>
  import { ref } from 'vue';
  import ArrayBox from './components/ArrayBox.vue';

  /**
   * Gli array di riferimento, il primo serve come
   * contenitore di numeri.
   * Il secondo serve invece per tenere traccia dell'array
   * ordinato
   */
  const arrayToSort = ref([5, 10, 1, 7, 9, 4]);
  const arraySorted = ref([]);

  /**
   * L'array tiene traccia degli index ordinati
   */
  const sortedIndex = ref(Array(arrayToSort.value.length).fill(false));
  
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
    }
  };

  const selectionSort = async () => {
    arraySorted.value = arrayToSort.value.slice();

    for (let i = 0; i < arraySorted.value.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arraySorted.value.length; j++) {
        if (arraySorted.value[j] < arraySorted.value[minIndex]) {
          minIndex = j;
        }
      }
      
      if (minIndex !== i) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        let temp = arraySorted.value[i];
        arraySorted.value[i] = arraySorted.value[minIndex];
        arraySorted.value[minIndex] = temp;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      sortedIndex.value[i] = true;
    }
  };

  const fillArray = () => {
    for(var i = 0; i < arrayToSort.value.length - 1; i++) {
      arrayToSort.value[i] = Math.floor(Math.random() * 100);
    }
  };

</script>


<template>
  <div>
    <div class="content-box">
      <button @click="fillArray" class="btn-sort">Fill array</button>
    </div>
    <ArrayBox :displayArray="arrayToSort"></ArrayBox>
    <div class="content-box">
      <button @click="bubbleSort" class="btn-sort">Bubble Sort</button>
      <button @click="selectionSort" class="btn-sort">Selection Sort</button>
    </div>
    <ArrayBox :displayArray="arraySorted" :sortedIndex="sortedIndex"></ArrayBox>
  </div>
</template>

<style scoped>
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
