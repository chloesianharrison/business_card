import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import "../stylesheets/Footer.css"

export default function Footer(){
  return (
    <div className="Footer">
      <a href="https://github.com/chloesianharrison">
        <FontAwesomeIcon icon={faSquareGithub} />
      </a>
      <a href="https://www.instagram.com/chloesiani/">
        <FontAwesomeIcon icon={faSquareInstagram} />
      </a>
    </div>

  )
};
