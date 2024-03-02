<template>
  <div>

    <div style="margin-bottom: 10px">
      <button @click="newest" role="button" style="margin-right: 10px">Newest</button>
      <button @click="oldest" role="button" style="margin-right: 10px">Oldest</button>
<!--      <button @click="recent" role="button" style="margin-right: 10px">Most Recent</button>-->
    </div>

    <ClubMeeting
        v-for="meeting in meetingDisplay"
        :key="meeting.title"
        :meeting-title="meeting.title"
        :meeting-description="meeting.description"
        :video-source="getEmbedUrl(meeting.videoId)"
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
      clubMeetings: [
        {
          title: "[2/27/2024] TCN Internship Workshop",
          description: "TCN presentation on internships: Join the TCN officers as they give a presentation on the importance of internships and how to secure one. They provide information on the application process, tips for standing out in a competitive market, and the benefits of gaining real-world experience.",
          videoId: "JEohDxCb888",
          value: 8,
        },
        {
          title: "[2/22/2024] Deloitte Presentation - Katelyn Baker and Others",
          description: "Katelyn Baker is a Talent Acquisition Specialist from Deloitte. She will share an overview of the company and some key insights into recruitment!",
          videoId: "kAWHrVic19c",
          value: 7,
        },
        {
          title: "[2/20/2024] Interview Workshop - Kevin Workman",
          description: "Special Guest Kevin Workman: Kevin is a great resource for tackling job interviews in computer science. He is a Google software engineer with years of experience and shares valuable insights and tips on how to handle interviews and what to expect when applying for jobs!",
          videoId: "LxkLepYLd4Q",
          value: 6,
        },
        {
          title: "[1/30/2024] Dr. Hogg's Guide To Graduate School",
          description: "Ever wondered what it takes to get into graduate school? Curious about choosing the right program or the purpose of grad school? Join us for a deep dive into the world of graduate education with Dr. Hogg.",
          videoId: "V9F8LmBtN_k",
          value: 5,
        },
        {
          title: "[10/03/2023] TCN Resume Workshop",
          description: "Have you wanted to make a great resume but are not sure where to start? That's where we come in! The President (Mitchell Harrison) and Vice President (Justin Stevens) of TCN did a resume workshop on what to put, resources to use, advice for juniors and seniors, and more.",
          videoId: "zhW3dusNU54",
          value: 4,
        },
        {
          title: "[10/27/2022] Julie Gardner - WebFX",
          description: "Julie Gardner is a Talent Acquisition Specialist from WebFX, a digital marketing agency and web/software development company with many locations, including Harrisburg, PA. She shared an overview of the company, and answered questions about the recruitment process.",
          videoId: "2sUZs50PbK8",
          value: 3,
        },
        {
          title: "[3/25/2022] Chris Carney - Crafting a Great Resume",
          description: "Chris Carney is a Software Development Engineer at Amazon and a professional resume critic. During this Zoom meeting, Chris shared with us a wealth of tips / insider knowledge on making a resume perfect for industry, such as formatting, do's & don'ts, what hiring managers are looking for, and more.",
          videoId: "AQXmNPADHZ4",
          value: 2,
        },
        {
          title: "[03/04/2022] Richard Abel and Hallie Lupinski - Deloitte",
          description: "Deloitte is an international service provider of financial advisory, consulting, auditing, and more. In this Zoom meeting, recruiters Richard Abel and Hallie Lupinski gave us an overview of what to look forward to in an interview, industry trends, and held a Q&A for students.",
          videoId: "APC5P8Iw3GM",
          value: 1,
        },
        {
          title: "[2/18/2022] Guest Speaker: Lea Eller",
          description: "Lea Eller is a Cyber Defense Infrastructure Engineer from Penn State Health & College of Medicine, and a Millersville alumni. In her presentation, she spoke about her journey through her career in the rapidly growing field of Cyber Security and gave career advice for prospecting students. Fun fact: Lea was also the founder and first president of the Cyber Defense Organization (CDO) at Millersville University!",
          videoId: "mhK9TEG7TlE",
          value: 0,
        },
      ],
      meetingDisplay: [],
    };
  },
  methods: {
    getEmbedUrl(videoId) {
      return `${this.rootURL + videoId}`;
    },
    newest() {
      this.meetingDisplay = this.clubMeetings.sort((a, b) => b.value - a.value);
    },
    oldest() {
      this.meetingDisplay = this.clubMeetings.sort((a, b) => a.value - b.value);
    },
    recent() {
      this.newest();
      this.meetingDisplay = this.meetingDisplay.slice(0, 3);
    },
  },
  mounted() {
    this.meetingDisplay = this.clubMeetings;
  },
}
</script>

<style scoped>
button {
 appearance: none;
 background-color: #BBB000;
 border: 1px solid rgba(27, 31, 35, .15);
 border-radius: 6px;
 box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
 box-sizing: border-box;
 color: #FFF;
 cursor: pointer;
 display: inline-block;
 font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
 font-size: 14px;
 font-weight: 600;
 line-height: 20px;
 padding: 6px 16px;
 position: relative;
 text-align: center;
 text-decoration: none;
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 vertical-align: middle;
 white-space: nowrap;
}

button:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

button:hover {
  background-color: #CCA000;
}

button:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

button:active {
  background-color: #CCA000;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}
</style>