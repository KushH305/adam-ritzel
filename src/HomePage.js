import React from 'react';
import './CSS/HomePage.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.png';
import image6 from './images/image6.jpg';

function HomePage() {
  // Define data using arrays
  const accomplishments = [
    "+ 5 years as the Director of Architecture",
    "Lead the St. Jude Children's Care App Development",
    "Author of the Article Integrations Are Everything",
    "Recipient of 4 Badges from Credly!!",
    "Legendary Tennis Player.. jk.. right?!"
  ];



  const thankYouMessages = [
    { message: "It's hard for me to accept that you're leaving us! :( I've loved working with you so much, so I consider every interaction a favorite, but one that holds a special place in my heart is PALM SPRINGS... because how can it not? Playing Pacman and tennis, witnessing the Flo-Ride show with both horror and amazement. What a great time. But really, thank you for all the guidance, laughs, the sanity checks, the hard work in building the Digital team into what it is today. It won't be the same without you. <3", author: "- Gabriella Baiamonte" },
    { message: "Adam is like my little brother who acts like my big brother <3. Always the first to jump in and call bulls***, there to open a door & take the boxes/catering/etc out of my hands, proactive to do the grunt work like refilling coffee and sodas, there cleaning someone else's dishes left in the sink, honest.. very honest.. too honest XD, speaks with passion and pereseverance, gracious while the first to give the shirt off his back, genuine and dear friend, always & forver reminds me of Yosemite Sam. Cheers to your next chapter.. stay connected dear friend!", author: "- Brandi Gallagher-Taylor" },
    { message: "I didn't get to work with Adam as long as I hoped I would, but in the time I did get to work with him, he was always so patient with me. As I am a newer employee, Adam never hesitated to help me learn and explain things to me. I am grateful for what I was able to learn from him, and I'm glad I was able to work on Tech Strategy with him!", author: "- Liz Rogliano" },
    { message: "Adam continues to open up client opportunities on his way out. We are so appreciative. I always make sure I have headphones for Adam calls in case my minor is listening...", author: "- Amy Drooker" },
    { message: "Good luck on your next adventure. I'll miss you saying what everyone is thinking in meetings, and getting to pick your brain about food spots all over the country!", author: "- Staci Powell" },
    { message: "Congratulations and best wishes as you embark on this new chapter in your career. I am sad to see you go but also excited for the incredible opportunities that lie ahead for you. Wishing you all the best! Please keep in touch!", author: "- Manju Palakkat"},
    { message: "Hey Adam, it's been great working with you on and off over the years. Thanks for starting the Sales Engineering team in the former ASL and putting together the estimate spreadsheets that so many of us have come to know and ... (ahem) love.. While I didn't get a chance to work directly with you on that team, your influence was felt by the whole team while I was there and your efforts opened up career opportunities that I had never before considered. Good luck in your next adventure, and hopefully we'll see you again at DAHO or elsewhere.", author: "- Nathaniel Bruening"},
    { message: "Adam taught me a lot about the power of candid conversation. He helped me by giving to me and helping me give to others candid feedback. More importantly, he helped create the Digital organization achieve success by being relentlessly unwilling to make compromises about talent and customer outcomes.", author: "- Daniel McCown"},
    { message: "Even after Adam leaves - he'll be in the DNA of our team: one of the best at telling a customer what they need to hear (not always what they want to hear) and instilling that honesty in all of us. He's also an NYC-level food snob in STL. Truly a pleasure working with you and we'll miss you!", author: "- Chris Infanti"},
    { message: "Since I joined Digital in 2019, Adam set an example by creating a culture in the Digital Tech team that enabled us to tackle challenging problems while having fun. I've always felt supported and challenged to executre to the best of my ability while growing my skills. We've had to reinvent ourselves multiple times & took on larger and more difficult projects, and we'll have to continue using the skills Adam helped us hone as we move forward.", author: "- Mike Sullivan"},
    { message: "I hate Adam. He's the meanest man ever, always taking every chance he can to throw dirt on my name, and I will never trust him. Why don't you love me? I have feelings too.", author: "- Microsoft Teams" },
    { message: "Adam hopefully our relationship has gotten stronger over the years. I swear I'm trying. I just added new updates to better myself for you. Hopefully in the future you'll come to love me just as the way I love you.", author: "- Slack"},
    { message: "We only met briefly during our 'Meet The Dig Tech Team' but your vibes were immaculate. Very nice, open to help, and I wish I could've worked with you! Good luck in your new role!!", author: "- Riddhi Chaudhari"},
    { message: "It was great meeting you during the 'Tech Meet and Greet'. Your enthusiasm and openness were contagious. I hope to collaborate with you someday. Best of luck in your future endeavors!", author: "- Prachi Kadam"},
    { message: "Your dynamic presence and eagerness to help were truly commendable. Wishing you all the best in your new role! I hope to work with you someday. Thank you for everything!", author: "- Max Coronado"},
    { message: "It was super fun seeing you talk about your hobbies and you really made the digital tech seem like a great place to work. It sucks your leaving but you're going to do great at your next role!!", author: "- Kristen Wang"},
    { message: "You are my role model.", author: "- Cliff Lin"},
    { message: "Instant cool factor. Adam's transparent love for hating windows & teams and dropping f-bombs, along with his brilliant and down to earth reputation, was glaring. We would've been fast friends.", author: "- Gracie Kiser"},
    { message: "I was amazed and blown away by Adam's beauty. What shook me more was his innate ability to make people feel at home, laugh, and still be very knowledgeable in his field. Wish I could've picked his brain a lot more. He really left at the worst time possible.", author: "- Kush Havinal"}
  ];

  const images = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
    { src: image4, alt: "Image 4"},
    { src: image5, alt: "Image 5"},
    { src: image6, alt: "Image 6"}
  ];

  return (
    <div className="app">
      <div className="content">

        <div className="text-content">
          
          <h1 className="title">A Monument to Adam Ritzel</h1>

          <div className="section">
            <h2 className="farewell-title">Accomplishments:</h2>
            <ul>
              {accomplishments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h2 className="farewell-title">What You Mean To Us!</h2>
            <div className="thank-you-grid">
              {thankYouMessages.map((message, index) => (
                <div key={index} className="thank-you-card">
                  <p>{message.message}</p>
                  <p className="author">{message.author}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h1 className="farewell-title">Priceless Memories</h1>
            <div className="images">
              <Carousel>
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

        <div className="footer">
          <p>Made by: 2024 Digital Intern Team</p>
        </div>

        </div>

      </div>
    </div>
  );
}

export default HomePage;
