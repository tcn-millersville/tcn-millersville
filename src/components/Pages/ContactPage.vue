<template>
  <div>
    <TCNnavbar />

    <div class="tcnHeading">
      <div class="tcnBackground"></div>
      <div class="titleBox">
        <h4><strong>Get In Contact</strong></h4>
        <h1><strong>MEET THE OFFICERS</strong></h1>
      </div>

    </div>

    <contact-form />

    <officer-container />

    <TCNBottmNavbar />

  </div>

</template>

<script>
import TCNnavbar from '@/components/TCNnavbar.vue';
import TCNBottmNavbar from '@/components/TCNBottmNavbar.vue';
import ContactForm from "@/components/ContactForm";
import OfficerContainer from "@/components/OfficerContainer";

export default {
  name: 'HomePage',
  components: {
    TCNnavbar,
    TCNBottmNavbar,
    ContactForm,
    OfficerContainer,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.img-wrapper img {
  width: 60%;
}

.link-arrow p,
.link-arrow2 p {
  display: inline-block;
  transition: 0.1s ease-in;
}

.link-arrow:hover p,
.link-arrow2:hover p {
  transform: translateX(50%);
}

p {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
}

.tcnHeading {
  display: flex;
  color: white;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  /* Fallback color if the background image fails to load */
  align-items: center;
  flex-direction: column;
  padding-top: 270px;
  padding-bottom: 35px;
}

.tcnBackground {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/circut-background.gif');
  background-size: cover;
  background-position: 50% 60%;
  background-repeat: no-repeat;
  z-index: -1;
}

.titleBox {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(0, 0, 0, .7);
  border: 4px solid #EEB111;
}

.text-box h2 {
  border-bottom: 2px solid #EEB111;
}

.col h2 {
  padding-top: 30px;
  font-weight: 535;
}

.icon-banner p {
  text-align: center;
  padding-bottom: 0;
  padding-right: 20px;
  padding-left: 20px;
}
</style>