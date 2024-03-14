<template>

  <div>
    <h1><strong>{{ meetingTitle }}</strong></h1>
    <div class="video-container">
      <iframe class="responsive-iframe" :src="videoSource" allowfullscreen></iframe>
    </div>
    <p class="meeting-description">
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

@media (max-width: 800px) {
  .responsive-iframe {
    width: 100%;
    height: 300px;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
  }
}

@media (min-width: 800px) {
  .responsive-iframe {
    width: 600px;
    height: 400px;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  }
}

@media (max-width: 1500px) {
  .meeting-description {
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (min-width: 1500px) {
  .meeting-description {
    text-align: center;
    padding-left: 300px;
    padding-right: 300px;
  }
}

h1 {
  text-align: center;
  font-size: 200%;
}
</style>