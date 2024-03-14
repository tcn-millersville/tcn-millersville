<template>
    <div>
        <TCNnavbar></TCNnavbar>
        <div class="tcnHeading">
            <div class="tcnBackground-JobFair"></div>
            <div class="titleBox">
                <h1><strong>LATEST COMPUTER SCIENCE JOB FAIR</strong></h1>
                <h2>Spring 2024</h2>
<!--                <h3>More Information Coming Soon</h3>-->
                <h3>Wednesday, March 13th</h3>
                <h4>3:30-4:30PM</h4>
                <h3>SMC Multi-Purpose Room</h3>
            </div>

        </div>

        <div class="content">
            <div class="content-inner">
<!--                <h2><strong>Explore Local Careers in Computer Science</strong></h2>-->

<!--                <p>-->
<!--                    TCN's Computer Science Job Fair will be back this year during the spring 2024 semester!-->
<!--                    All students pursuing a computer science, IT, math, or related degree are encouraged to attend.-->
<!--                    <br>-->
<!--                    Attendees will be able to network with industry professionals and discover exciting career-->
<!--                    opportunities.-->
<!--                    This event is an ideal platform for students looking for summer internships, part-time, or full-time positions.-->
<!--                    We recommend you bring a copy of your resume.-->
<!--                </p>-->

<!--                <h2><strong>Location</strong></h2>-->
<!--                <p>The fair will take place in the <a href="https://www.millersville.edu/smc/">Student Memorial Center</a>-->
<!--                    , Reighard Multi-purpose Room on Millersville's campus. </p>-->
<!--                <p>Companies attending will be given guest parking passes which can be used to park anywhere on campus in-->
<!--                    parking-->
<!--                    spots marked with <strong>white</strong> lines. The most accessible parking lot is on <a-->
<!--                        href="https://goo.gl/maps/oj8i1Xf3cCy5CWDe7">James Street</a>.-->
<!--                </p>-->
<!--                <div class="location-wrapper row">-->

<!--                    <div class="col">-->
<!--                        <img src="@/assets/smc.jpg" alt="Millersville University Student Memorial Center Building">-->
<!--                    </div>-->
<!--                    <div class="col">-->
<!--                        <iframe-->
<!--                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.5461082014826!2d-76.3561320846168!3d39.996247579416234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c625fac40fdf71%3A0xe7d065fe36ff1cab!2sStudent%20Memorial%20Center!5e0!3m2!1sen!2suk!4v1690051441067!5m2!1sen!2suk"-->
<!--                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"-->
<!--                            referrerpolicy="no-referrer-when-downgrade"></iframe>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <h2><strong>Companies: Reserve Your Table!</strong></h2>-->

<!--                <p>We welcome any companies that are looking to hire Millersville students for internships or full-time work -->
<!--                    after graduation in a tech role. Each company is provided with a 6 ft. table, 2-3 chairs, and a black tablecloth. Also, -->
<!--                    there is no fee to attend!-->
<!--                </p>-->
<!--                <p>For more information, or to reserve a table, please reach out to our president, -->
<!--                    Mitchell Harrison: <a href="mailto:mdharri2@millersville.edu">mdharri2@millersville.edu</a>-->
<!--                </p>-->

<!--                <p><strong>Can't make the fair?</strong> We are always looking to collaborate with companies! Let us know if you'd like to-->
<!--                sponsor one of our meetings or share your open positions with us. </p>-->

                <h1 style="font-size:35px"><strong>Job Fairs Archive</strong></h1>
                <p style="text-align: center; padding-left: 100px; padding-right: 100px;">Here you can find our archive
                  of previous job fairs:</p>

                <hr>

                <h3><strong>Spring 2024 Job Fair</strong></h3>

                <p>We are incredibly grateful to all of the companies that participated in our second job fair in Spring
                  2024!
                </p>
                <div class="logos">
                  <img src="@/assets/job_fair/company-logos/cargas.png" alt="Cargas Company Logo">
                  <img src="@/assets/job_fair/company-logos/dataforma.png" alt="Dataforma Company Logo">
                  <img src="@/assets/job_fair/company-logos/john_hopkins.png" alt="John Hopkins Applied Physics Lab Company Logo">
                </div>
                <!-- Have company logos here -->


                <div class="container my-4">
                  <div class="row">
                    <div class="col-md-4" v-for="(image, index) in images2024" :key="index">
                      <img :src="image.src" class="img-fluid mb-3" alt="Image">
                    </div>
                  </div>
                </div>

                <hr>

                <h3><strong>Spring 2023 Job Fair</strong></h3>

                <p>We are incredibly grateful to all of the companies that participated in our first job fair in Spring
                    2023!
                </p>
                <div class="logos">
                    <img src="@/assets/job_fair/company-logos/cargas.png" alt="Cargas Company Logo">
                    <img src="@/assets/job_fair/company-logos/dataforma.png" alt="Dataforma Company Logo">
                    <img src="@/assets/job_fair/company-logos/deloitte.png" alt="Deloitte Company Logo">
                    <img src="@/assets/job_fair/company-logos/quub.jpeg" alt="Quub Company Logo">
                    <img src="@/assets/job_fair/company-logos/seisan.png" alt="Seisan Company Logo">
                </div>
                <!-- Have company logos here -->


                <div class="container my-4">
                    <div class="row">
                        <div class="col-md-4" v-for="(image, index) in images2023" :key="index">
                            <img :src="image.src" class="img-fluid mb-3" alt="Image">
                        </div>
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
export default {
    name: 'JobFairPage',
    components: {
        TCNnavbar,
        TCNBottmNavbar
    },
    data() {
        return {
            images2023: [
                { src: require('@/assets/job_fair/spring2023/jobfair-1-min-p-500.jpg') },
                { src: require('@/assets/job_fair/spring2023/jobfair-2-min-p-500.jpg') },
                { src: require('@/assets/job_fair/spring2023/jobfair-3-min-p-500.jpg') },
                { src: require('@/assets/job_fair/spring2023/jobfair-4-min-p-500.jpg') },
                { src: require('@/assets/job_fair/spring2023/jobfair-5-min-p-500.jpg') },
                { src: require('@/assets/job_fair/spring2023/jobfair-6-min.jpg') },
                { src: require('@/assets/job_fair/spring2023/jobfair-7-min.jpg') },
                { src: require('@/assets/job_fair/spring2023/jobfair-8-min.jpg') },
                { src: require('@/assets/job_fair/spring2023/jobfair-9-min.jpg') },
            ],
            images2024: [
                { src: require('@/assets/job_fair/spring2024/jobfair-1.jpg') },
                { src: require('@/assets/job_fair/spring2024/jobfair-2.jpg') },
                { src: require('@/assets/job_fair/spring2024/jobfair-3.jpg') },
                { src: require('@/assets/job_fair/spring2024/jobfair-4.jpg') },
                { src: require('@/assets/job_fair/spring2024/jobfair-5.jpg') },
                { src: require('@/assets/job_fair/spring2024/jobfair-6.jpg') },
            ]
        };
    }
};

</script>

<style scoped>

hr {
    border: 1px solid #EEB111;
    width: 75%;
    margin-bottom: 20px;
}

.container {
    margin-top: 20px;
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

.tcnBackground-JobFair {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('@/assets/job_fair/spring2023/jobfair-9-min.jpg');
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

.content {
    display: flex;
    flex-direction: column;
    background-color: white;
    background-image: linear-gradient(135deg, #ffffff 41.67%, #dfdfdf 41.67%, #dfdfdf 50%, #ffffff 50%, #ffffff 91.67%, #dfdfdf 91.67%, #dfdfdf 100%);
    background-size: 8.49px 8.49px;
    color: black;
    padding: 50px 30px;
    text-align: center;
    align-items: center;
}

.content-inner {
    background-color: white;
    padding-top: 30px;
    width: 85%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.content-inner h1 {
    border-bottom: 2px solid #EEB111;
}

.logos img {
    max-height: 50px;
    margin-right: 15px;
}

/* Add custom CSS to space out the images and add a new line between rows */
.row {
    margin-bottom: 20px;
}
</style>