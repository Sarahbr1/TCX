import "./styles/index.css";
import Landing from "./pages/Landing";
import InscriptionSuite from "./pages/InscriptionSuite";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import SideBarRouting from "../routes/SideBarRouting";
import InfosPersonelles from "./pages/InfosPersonelles";
import MiniSideBarRouting from "../routes/MiniSideBarRouting";
import Securite from "./pages/Securite";
import DashBoard from "./pages/DashBoard";
import RDVCard from "./components/RDVCard";
import AddPatient from "./pages/AddPatient";
import DossierMedical from "./pages/DossierMedical";

function App() {
  return (
    <Landing />
  );
}

export default App;
