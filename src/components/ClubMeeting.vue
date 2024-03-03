<template>

  <div>
    <h1><strong>{{ meetingTitle }}</strong></h1>
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
p {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
}

h1 {
  text-align: center;
  font-size: 200%;
}
</style>