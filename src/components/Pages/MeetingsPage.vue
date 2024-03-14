<template>
  <div>
    <TCNnavbar></TCNnavbar>
    <div class="tcnHeading">
      <div class="tcnBackground"></div>
      <div class="titleBox">
        <h4><strong>Meetings Archives</strong></h4>
        <h1><strong>COME TO OUR MEETINGS</strong></h1>
      </div>
    </div>

    <div class="content">
      <div class="content-inner">
        <h1 style="font-size:35px"><strong>The TCN hosts monthly meetings with guest speakers,
          Q&A sessions, refreshments and more for networking
          and socializing with other members.
          <br>
        </strong>
        </h1>

        <div class="row">
          <div class="col">
            <h1 style="font-size:35px"><strong>Meetings Archive</strong></h1>
            <p>
              If you were not able to attend a previous
              TCN meeting or if you are curious to see what TCN meetings are like
            </p>
            <p>Here you can find our archive
              recorded meetings:</p>

            <club-meetings-container />

          </div>
        </div>
      </div>
    </div>

    <TCNBottmNavbar></TCNBottmNavbar>
  </div>

</template>

<script>
import TCNnavbar from '@/components/TCNnavbar.vue';
import TCNBottmNavbar from '@/components/TCNBottmNavbar.vue';
import ClubMeetingsContainer from "@/components/ClubMeetingsContainer.vue";

export default {
  name: 'HomePage',
  components: {
    TCNnavbar,
    TCNBottmNavbar,
    ClubMeetingsContainer,
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 800px) {
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (min-width: 800px) {
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    padding-left: 100px;
    padding-right: 100px;
  }
}

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
  background-image: url('../../assets/killian.jpg');
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

.icon-banner > .row {
  width: 80%;
  align-items: center;
}

.content-inner > .row {
  margin: 50px 0px;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px;
  justify-content: space-evenly;
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

/* block with stripes */
.content {
  display: flex;
  background-color: white;
  background-image: linear-gradient(135deg, #ffffff 41.67%, #dfdfdf 41.67%, #dfdfdf 50%, #ffffff 50%, #ffffff 91.67%, #dfdfdf 91.67%, #dfdfdf 100%);
  background-size: 8.49px 8.49px;
  color: black;
  padding: 50px 30px;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
}

/* The actual content div */
.content-inner {
  background-color: white;
  padding-top: 30px;
  width: 85%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
</style>