import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import BackButton from "../containers/BackButton";

const Informations = (props) => {
  return (
    <>
      <overlay>
        <h1>INFORMATIONS</h1>
        <h2>CONTACT</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a href="tel:+3286400302">086/40.03.02</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:efacfferrieres@gmail.com">
              efacfferrieres@gmail.com
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} />{" "} Pré du Fa 7, 4190
            Ferrières
          </li>
          <p>Direction : Laetitia Fabry</p>
        </ul>

        <h2>INFOS PRATIQUES</h2>

        <h3>Garderie</h3>
        <ul>
          <li>6h45- 8h30 / 16h-18h (lun.-mar.-jeu-ven.)</li>
          <li>6h45-8h30 / 12h-16h (mercredi)</li>
        </ul>

        <h3>Horaire des cours</h3>
        <ul>
          <li>Maternelle : 8h50-12h05 / 13h55- 15h35 </li>
          <li>Primaire : 8h50-12h35 / 13h55-15h35 </li>
          <li>Le mercredi jusque 11h45</li>
        </ul>

        <h2>DECOUVREZ AUSSI...</h2>

        <h3>
          <a
            href="https://www.facebook.com/%C3%89cole-fondamentale-autonome-de-la-FWB-de-Ferri%C3%A8res-107940584190921/?ref=page_internal"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Notre page Facebook
          </a>
        </h3>

        <h3>
          <a
            href="http://ecff.over-blog.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notre blog
          </a>
        </h3>
      </overlay>
      <BackButton />
    </>
  );
};

export default Informations;
