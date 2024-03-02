<template>
  <div class="col">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="card">
      <img :src="require(`@/assets/${officerPhoto}`)" :alt="officerName" style="width:100%">
      <h2> {{ officerName }} </h2>
      <p class="card-title"> {{ officerTitle }} </p>
      <p><a :href="officerEmail">{{ officerEmail }}</a></p>
      <p><a :href="officerLinkedIn"><i class="fa fa-linkedin"></i></a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfficerCard",
  props: {
    officerName: String,
    officerTitle: String,
    officerEmail: String,
    officerLinkedIn: String,
    officerPhoto: String
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

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}

.card-title {
  color: grey;
  font-size: 18px;
}

</style>