<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <span class="nav-tab-interval">|</span>
      <router-link to="/about">About</router-link>
      <span class="nav-tab-interval">|</span>
      <router-link to="/json-parse">JsonParse</router-link>
      <span class="nav-tab-interval">|</span>
      <router-link to="/account">Account</router-link>
      <span class="nav-tab-interval">|</span>
      <router-link to="/input-table">InputTable</router-link>
      <span class="nav-tab-interval">|</span>
      <router-link to="/auto-loading">AutoLoading</router-link>
      <span class="nav-tab-interval">|</span>
      <router-link to="/debounce">Debounce</router-link>
      <span class="nav-tab-interval">|</span>
      <router-link to="/debouncets">DebounceTs</router-link>
      <span class="nav-tab-interval">|</span>
      <router-link to="/transition">过渡</router-link>
      <span class="nav-tab-interval">|</span>
      <router-link to="/scroll">Scroll</router-link>
      <span class="nav-tab-interval">|</span>
      <router-link to="/vface">VFAce</router-link>
      <span class="nav-tab-interval">|</span>
      <router-link to="/editor">MyEditor</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  font-size: 20px;
  text-align: left;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .nav-tab-interval {
    padding: 0 10px;
  }
}
</style>
