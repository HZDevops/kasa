import "./About.css";
import Banner from "../../components/Banner/Banner";
import BannerImageAbout from "../../assets/BannerImageAbout.png";
import DropDown from "../../components/DropDown/DropDown";

function About() {
  return (
    <div className="kasa-about">
      <Banner image={BannerImageAbout} title="" />
      <div className="about-dropdown">
        <DropDown
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <DropDown
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <DropDown
          title="Service"
          description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. Nhésitez pas à nous contacter si vous avez la moindre question."
        />
        <DropDown
          title="Responsabilité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à lhôte quau locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}

export default About;
