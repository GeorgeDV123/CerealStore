import { AboutForm } from "../componets/AboutForm";
import Container from "react-bootstrap/Container";

export function About() {
  document.body.style.background = "ivory";
  return (
    <>
      <div className="about-img"></div>

      

      <AboutForm />
    </>
  );
}
