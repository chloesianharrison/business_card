import "../stylesheets/Info.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Info(){
  return (
    <div className="Info">
      <img src="https://media.licdn.com/dms/image/D4E03AQHBBUK1fPiffA/profile-displayphoto-shrink_400_400/0/1670074759046?e=1723075200&v=beta&t=qZd2apoDfM6NOE-FG7pqxEYA-s_T67mZGUjAGis6xW4" alt="smiling woman" />
      <h1>Chloe Harrison</h1>
      <h3>Full Stack Developer</h3>
      <p>troopl.com/chloe</p>
      <div className="buttons">
      <a href="mailto:chloesian.harrison@live.co.uk" className="email">
          <FontAwesomeIcon icon={faEnvelope} />
          Email
      </a>
      <a href="https://www.linkedin.com/in/chloesian-harrison1/" className="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
      </a>
    </div>
    </div>
  )
};
