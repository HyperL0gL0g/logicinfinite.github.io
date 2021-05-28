//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineer",
    cardImage: "assets/images/mediamelonLogo.png",
    place: "Mediamelon,Inc",
    time: "(June, 2021 - present)",
    desp: "<li>Working in the Video/SDK/Backend team developing fast, reliable, multiplatform API's.</li> <li>Actively participating in the  entire SDLC ,starting from planning to deployment.</li><li>Developing software for various platforms like mobile, web, set-top-box and smartTV.</li>",
  },
  {
    title: "Software Engineer Intern",
    cardImage: "assets/images/mediamelonLogo.png",
    place: "Mediamelon,Inc",
    time: "(Feb - May, 2021)",
    desp: "<li>Learnt about Video Streaming, OTT and other video streaming architecture.</li><li>Worked with ADS(both serverside and external).</li><li>Developed a C++ simulator to mimic the player behaviour which in-turn speeded up the testing process.</li>",
  },
  {
    title: ".NET Developer Intern",
    cardImage: "assets/images/capgemini.jpg",
    place: "Capgemini",
    time: "(Nov, 20 - Jan, 21)",
    desp:"<li>Learnt about .NET architecture and was introduced to C#.</li><li>Worked on WPF's and built GUI's for tracking employeee attendance system.</li>",
  },
  {
    title: "Android Development and Networking Intern",
    cardImage: "assets/images/wbsedcl.jpg",
    place: "WBSEDCL",
    time: "(Mar - July, 19)",
    desp:"<li>Got hands-on experience on various technologies like firewalls, fallback protocols, database design and querying,  emergency database rollback support.</li><li>Worked with the app development team in developing the Vidyut Sahayogi app.</li><li>Learnt about various network configurations and tools used by the company.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "",
    cardImage: "assets/images/experience-page/1.jpg",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "30 DaysofFlutter",
    cardImage: "assets/images/experience-page/5.jpg",
    description:
      "Helping beginners from their first steps in Flutter to building fully functional cross-platform applications.",
  },
  {
    title: "Garuda Hacks",
    cardImage: "assets/images/experience-page/6.jpg",
    description:
      "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 100px;width:100px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "Google APEC app challenge'20",
    image: "assets/images/apec.jpg",
    time: "08/2020 - 10/2020",
    desp: "<li>Won the Google APEC app challenge'20.We were among the five winning teams out of 200 teams that participated.</li><hr/><li>Our team developed a mobile application service to enable contactless checkin for the tourism industry catering to the post COVID-19 situation, mainy in the South Asian countries.</li>",
  },
  {
    title: "Stanford TreeHacks'21",
    image: "assets/images/tree.jpg",
    time: "01/2021 - 02/2021",
    desp: "<li>One of the few students selected internationally for Stanford TreeHacks'21 - the annual hackathon of Stanford University,California.</li><hr/><li>Our team developed a  peer-to-peer messaging service that works without any internet connectivity, using only bluetooth services.</li>",
  },
  {
    title: "KIIT Codeventure'21",
    image: "assets/images/kiitfest.jpg",
    time: "16/12/2019 - 18/12/2019",
    desp: "<li>Won the annual coding event of KIIT, organised by the School of Computer Engineering.</li><hr /><li>Our team of 2, managed to win the competiton with over 500 participants in total.</li>",
  },
  {
    title: "HackerEarth CodeArena",
    image: "assets/images/code.jpg",
    time: "10/2020 - 12/2020",
    desp: "<li>Was at the top of the Rankings Leaderboard for 8 weeks in a row.</li><hr /><li>CodeArena is a 1v1 coding battleground which has a leaderboard based on the number of duels won.</li>",
  },
  {
    title: "ICDCIT PIC'21",
    image: "assets/images/icdcit.jpg",
    time: "01/2021- 02/2021",
    desp: "<li>My project was selected as one of the 20 most innovative projects of 2020 by the PIC(Project Innovation Contest) board.</li><hr/><li>My paper was published in the official ICDCIT year book.</li>",
  },
  {
    title: "Top JAVA Author",
    image: "assets/images/dev.png",
    time: "08/2019 - 09/2019",
    desp: "<li>Two of my blogs were featured in the dev.to articles of the week.</li><hr/><li>Achieved the Java Top Author badge for being the most viewed blog in Java</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
