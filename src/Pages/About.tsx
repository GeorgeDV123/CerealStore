import { AboutForm } from "../Componets/AboutForm";
import Container from "react-bootstrap/Container";

export function About() {
  return (
    <>
      <div className="about-img" aria-label="Bowls of cereal"></div>

      <Container className="w-75 mb-5">
        <section>
          <span className="h-box">
            <h1 className="h-text">About</h1>
          </span>
          <p style={{ textAlign: "justify" }}>
            Our cereals are the best you will find anywhere, Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Ut blandit congue elit sit
            amet rutrum. Suspendisse in arcu ac nisl pharetra elementum vel at
            eros. In aliquam erat velit, eu mattis elit interdum sed. Integer
            tempus massa fermentum, mattis ex eget, maximus nibh.
            <br />
            <br />
            Nulla semper fringilla urna, in laoreet purus viverra vitae. Nullam
            vitae ipsum feugiat, tincidunt tellus id, venenatis enim. Nulla
            fringilla malesuada velit quis tristique. In hac habitasse platea
            dictumst. Praesent at sem nisl. Mauris fringilla, ligula sit amet
            dignissim porta, odio ante lacinia dolor, sit amet luctus ipsum
            tortor ut odio. Nullam vitae ipsum feugiat, tincidunt tellus id,
            venenatis enim. Nulla fringilla malesuada velit quis tristique. In
            hac habitasse platea dictumst. Praesent at sem nisl. Mauris
            fringilla, ligula sit amet dignissim porta, odio ante lacinia dolor,
            sit amet luctus ipsum tortor ut odio.
          </p>
        </section>
      </Container>

      <AboutForm />
    </>
  );
}
