<template>
  <div class="content">
    <div class="content-inner">
      <h1 style="font-size:35px">
        <strong> Meet the Officers!</strong>
      </h1>

      <div class="row">

        <officer-card
            officer-name="Tristan Rush"
            officer-title="President"
            officer-email="tjrush@millersville.edu"
            officer-linked-in="https://www.linkedin.com/in/tristanjrush/"
            officer-photo="Tristan-photo.png"
        />

        <officer-card
            officer-name="Zac Tawfick"
            officer-title="Vice President"
            officer-email="zctawfic@millersville.edu"
            officer-linked-in="https://www.linkedin.com/in/zac-tawfick/"
            officer-photo="Zac-photo.jpg"
        />

      </div>

      <div class="row">

        <officer-card
            officer-name="Jonathan Rivera"
            officer-title="Treasurer"
            officer-email="jjriver1@millersville.edu"
            officer-linked-in="https://www.linkedin.com/in/jonathan-rivera-2a0625212/"
            officer-photo="Jon-photo.jpg"
        />

        <officer-card
            officer-name="Tessa Hughes"
            officer-title="Secretary"
            officer-email="tmhughe1@millersville.edu"
            officer-linked-in="#"
            officer-photo="tess-photo.png"
        />

      </div>

    </div>
  </div>
</template>

<script>
import OfficerCard from "@/components/OfficerCard.vue";

export default {
  name: "OfficerContainer",
  components: {
    OfficerCard
  }
}
</script>

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

.icon-banner > .row {
  width: 80%;
  align-items: center;
}

.content-inner > .row {
  margin: 50px 0px;
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