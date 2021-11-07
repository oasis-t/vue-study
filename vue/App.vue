<template>
    <div class="demo">
            <h2>{{msg}}</h2>
            <button @click="btnClick">Click me!</button>
            <h2>{{count}}</h2>
    </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "Hello world",
      count: 0,
    }
  },
  methods: {
    btnClick() {
      this.count++;
    },
  },
}
</script>

<style lang="">
    .demo{
        background-color: aqua;
    }
</style>