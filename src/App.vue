<template>
  <div id="app">
    <p>
      Go to <a href="#/checkout-details">checkout details</a><br/>
      Go to <a href="#/ticket-details">ticket details</a>
    </p>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>
