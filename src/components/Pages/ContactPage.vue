<template>
  <div>
    <TCNnavbar></TCNnavbar>
    <div class="tcnHeading">
      <div class="tcnBackground"></div>
      <div class="titleBox">
        <h4><strong>Get In Contact</strong></h4>
        <h1><strong>MEET THE OFFICERS</strong></h1>
      </div>

    </div>

    <div class="content">
      <div class="content-inner">
        <h1 style="font-size:35px"><strong>Want to get in Contact with Us? <br>
          Use the below submission form!</strong></h1>

        <div class="row">
          <div class="col">
            <div>

              <form method="post" action="https://forms.un-static.com/forms/10146f17ad4811e2b6189db350acad6968ce8c22">
                <div class="form-group row">
                  <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputName" placeholder="Please enter your name">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputMessage" class="col-sm-2 col-form-label">Message</label>
                  <div class="col-sm-10">
                    <textarea name="inputMessage" cols="40" rows="8" class="form-control"></textarea>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-2"></div>
                  <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary submit-btn">Send</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-inner">
        <h1 style="font-size:35px"><strong>Meet the Officers! <br>
        </strong></h1>

        <div class="row">

          <officer-card
            officer-name="Mitchell Harrison"
            officer-title="President"
            officer-email="mdharri2@millersville.edu"
            officer-linked-in="https://www.linkedin.com/in/mitchell-harrison-9570b5253/"
            officer-photo="mitchell-photo.jpg"
          />

          <officer-card
              officer-name="Justin Stevens"
              officer-title="Vice President"
              officer-email="jmsteve1@millersville.edu"
              officer-linked-in="https://www.linkedin.com/in/justin-stevens-77546021b/"
              officer-photo="justin-photo.jpg"
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

    <TCNBottmNavbar></TCNBottmNavbar>

  </div>

</template>

<script>
import TCNnavbar from '@/components/TCNnavbar.vue';
import TCNBottmNavbar from '@/components/TCNBottmNavbar.vue';
import OfficerCard from "@/components/OfficerCard";

export default {
  name: 'HomePage',
  components: {
    TCNnavbar,
    TCNBottmNavbar,
    OfficerCard,
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
  background-image: url('../../assets/circut-background.gif');
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

.submit-btn {
  width: 150px;
}
</style>