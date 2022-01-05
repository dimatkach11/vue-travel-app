<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">Travel App</router-link>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarText"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/brazil">Brazil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/hawaii">Hawaii</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/jamaica">Jamaica</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/panama">Panama</router-link>
          </li>
        </ul>
        <a
          href="https://vueschool.io/courses/vue-router-for-everyone"
          class="nav-link"
          target="_blank"
          ><span class="navbar-text"> Video Courses </span></a
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

.nav-item .router-link-exact-active-dima {
  color: #42b983;
}

.navbar-nav .nav-link:focus,
.navbar-nav .nav-link:hover {
  color: #42b983;
}
</style>
