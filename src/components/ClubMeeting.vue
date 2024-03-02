<template>

  <div>
    <h1 style="text-align: center; font-size: 200%"><strong>{{ meetingTitle }}</strong></h1>
    <div class="video-container">
      <iframe width="600" height="400" :src="videoSource" allowfullscreen></iframe>
    </div>
    <p style="text-align: center; padding-left: 300px; padding-right: 300px;">
      {{ meetingDescription }}
    </p>
  </div>

</template>

<script>
  export default {
    name: "ClubMeeting",
    props: {
      meetingTitle: String,
      meetingDescription: String,
      videoSource: String
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