<template>
  <button @click="action" role="button" style="margin-right: 10px">{{ buttonText }}</button>
</template>

<script>
export default {
  name: "SortingButton",
  props: {
    action: Function,
    buttonText: String,
  },
}
</script>

<style scoped>
button {
  appearance: none;
  background-color: #BBB000;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #FFF;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

button:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

button:hover {
  background-color: #CCA000;
}

button:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

button:active {
  background-color: #CCA000;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}
</style>
