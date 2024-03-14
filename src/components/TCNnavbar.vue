<template>
  <div>
    <nav class="navbar">
      <!-- Hamburger Icon for Small Screens -->
      <div class="hamburger-menu" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <!-- Navigation Links -->
      <ul class="navbar-list" :class="{ 'show-menu': isMenuOpen }">
        <router-link style="text-decoration: none; color: inherit;" to="/" @click="closeMenu">
          <li class="navbar-item clickable">HOME</li>
        </router-link>
        <router-link style="text-decoration: none; color: inherit;" to="/MeetingsPage" @click="closeMenu">
          <li class="navbar-item clickable">MEETINGS</li>
        </router-link>
        <li class="navbar-item"></li>
        <li class="navbar-item">
          <router-link to="/"><img src="../assets/logo/MU_TCN-logo-min-p-500.png" width="250%"></router-link>
        </li>
        <li class="navbar-item"></li>
        <router-link style="text-decoration: none; color: inherit;" to="/JobFairPage" @click="closeMenu">
          <li class="navbar-item clickable">JOB FAIRS</li>
        </router-link>
        <router-link style="text-decoration: none; color: inherit;" to="/ContactPage" @click="closeMenu">
          <li class="navbar-item clickable">CONTACT</li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'TCNnavbar',

  data() {
    return {
      isMenuOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },

};

</script >
<style>
body {
  margin: 0;
  padding: 0;
}

.navbar {
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 !important;

}

.navbar-list {
  display: flex;
  list-style: none;
  margin: auto;
  justify-content: right;
  align-items: center;
}

.navbar-item {
  text-decoration: none;
  padding: 30px 35px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 1.7px;
  position: relative;
  /* Added */

}

.navbar-item.clickable:hover {
  color: black;
  background-color: #EEB111;

}


.navbar-item img {
  position: absolute;
  /* Added */
  top: 120%;
  /* Added */
  left: 50%;
  /* Added */
  transform: translate(-50%, -50%);
  /* Added */
  z-index: 1;
  /* Added z-index property */

}

.navbar::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: #EEB111;

}

@media screen and (max-width: 900px) {
  .navbar-list {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    background-color: black;
  }

  .navbar-list.show-menu {
    display: flex;
  }

  .navbar-item {
    text-align: center;
    padding: 15px;
  }

  .hamburger-menu {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 2;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
    transition: 0.4s;
  }

  .show-menu .bar:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .show-menu .bar:nth-child(2) {
    opacity: 0;
  }

  .show-menu .bar:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
}

</style>