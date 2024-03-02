<template>
  <div>

    <ClubMeeting
        meeting-title="[2/27/2024] TCN Internship Workshop"
        meeting-description="TCN presentation on internships: Join the TCN officers as they give a presentation on the importance of internships and how to secure one.
          They provide information on the application process, tips for standing out in a competitive market, and the benefits of gaining real-world experience."
        :video-source="getEmbedUrl('JEohDxCb888')"
    />

    <br>

    <ClubMeeting
        meeting-title="[2/22/2024] Deloitte Presentation - Katelyn Baker and Others"
        meeting-description="Katelyn Baker is a Talent Acquisition Specialist from Deloitte.
          She will share an overview of the company and some key insights into recruitment!"
        :video-source="getEmbedUrl('kAWHrVic19c')"
    />

    <br>

    <ClubMeeting
        meeting-title="[2/20/2024] Interview Workshop - Kevin Workman"
        meeting-description="Special Guest Kevin Workman:
          Kevin is a great resource for tackling job interviews in computer science.
            He is a Google software engineer with years of experience and shares valuable insights and tips on how to handle interviews and what to expect when applying for jobs!"
        :video-source="getEmbedUrl('LxkLepYLd4Q')"
    />

    <br>

    <ClubMeeting
        meeting-title="[1/30/2024] Dr. Hogg's Guide To Graduate School"
        meeting-description="Ever wondered what it takes to get into graduate school?
          Curious about choosing the right program or the purpose of grad school?
          Join us for a deep dive into the world of graduate education with Dr. Hogg."
        :video-source="getEmbedUrl('V9F8LmBtN_k')"
    />

    <br>

    <ClubMeeting
        meeting-title="[10/03/2023] TCN Resume Workshop"
        meeting-description="Have you wanted to make a great resume but are not sure where to start? That's where we come in! The
                    President (Mitchell Harrison) and Vice President (Justin Stevens) of TCN did a resume workshop on what
                    to put, resources to use, advice for juniors and seniors, and more."
        :video-source="embedUrl5"
    />

    <br>

    <ClubMeeting
        meeting-title="[10/27/2022] Julie Gardner - WebFX"
        meeting-description="Julie Gardner is a Talent Acquisition Specialist from WebFX, a digital marketing agency and web/software
          development company with many locations, including Harrisburg, PA. She shared an overview of the
          company, and answered questions about the recruitment process."
        :video-source="embedUrl"
    />

    <br>

    <ClubMeeting
        meeting-title="[3/25/2022] Chris Carney - Crafting a Great Resume"
        meeting-description="Chris Carney is a Software Development Engineer at Amazon and a professional resume critic. During this
                    Zoom meeting, Chris shared with us a wealth of tips / insider knowledge on making a resume perfect for
                    industry, such as formatting, do's & don'ts, what hiring managers are looking for, and more."
        :video-source="embedUrl2"
    />

    <br>

    <ClubMeeting
        meeting-title="[03/04/2022] Richard Abel and Hallie Lupinski - Deloitte"
        meeting-description="Deloitte is an international service provider of financial advisory, consulting, auditing, and more. In
                    this Zoom meeting, recruiters Richard Abel and Hallie Lupinski gave us an overview of what to look forward to
                    in an interview, industry trends, and held a Q&A for students."
        :video-source="embedUrl3"
    />

    <br>

    <ClubMeeting
        meeting-title="[2/18/2022] Guest Speaker: Lea Eller"
        meeting-description="Lea Eller is a Cyber Defense Infrastructure Engineer from Penn State Health & College of Medicine, and a
                    Millersville alumni. In her presentation, she spoke about her journey through her career in the rapidly
                    growing field of Cyber Security and gave career advice for prospecting students. Fun fact: Lea was also the
                    founder and first president of the Cyber Defense Organization (CDO) at Millersville University!"
        :video-source="embedUrl4"
    />

  </div>
</template>

<script>
import ClubMeeting from "@/components/ClubMeeting.vue";

export default {
  name: "ClubMeetingsContainer",
  components: {
    ClubMeeting,
  },
  data() {
    return {
      rootURL: 'https://www.youtube.com/embed/',
      videoId: '2sUZs50PbK8',
      videoId2: 'AQXmNPADHZ4',
      videoId3: 'APC5P8Iw3GM',
      videoId4: 'mhK9TEG7TlE',
      videoId5: 'zhW3dusNU54',
    };
  },
  computed: {
    embedUrl() {
      return `${this.rootURL + this.videoId}`;
    },
    embedUrl2() {
      return `${this.rootURL + this.videoId2}`;
    },
    embedUrl3() {
      return `${this.rootURL + this.videoId3}`;
    },
    embedUrl4() {
      return `${this.rootURL + this.videoId4}`;
    },
    embedUrl5() {
      return `${this.rootURL + this.videoId5}`;
    },
  },
  methods: {
    getEmbedUrl(videoId) {
      return `${this.rootURL + videoId}`;
    },
  }
}
</script>

<style scoped>

</style>