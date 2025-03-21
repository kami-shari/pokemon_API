export default function AboutUsPage() {
  return (
    <div className="rainbow-border">
    <section>
      <h2>About us</h2>
      <div className="line"></div>
      <p>
        We are three coding bootcamp students from three different cities in
        Germany, and we came together to build a Pokémon encyclopedia search
        website for the world.
        <br />
        <br />
        On this website, you can search for all 1,302 Pokémon and listen to
        their original cry sounds on the detail page. Furthermore, you can visit
        the types page to explore different Pokémon characters and categorize
        them into various groups.
      </p>
      <div className="line"></div>
      <div className="person-cards">
        <article className="card Personen">
          <img
            className="person-image"
            src="/team-pictures/kami.png"
            alt="Kami"
          />
          <h3>Kami</h3>
          <p>
            “I’m Kami from Cologne, and I enjoy creating innovative apps and
            websites. Have fun using the Pokémon app!”
          </p>
          <h4>Contact:</h4>
          <a href="https://github.com/kami-shari">Github</a>
        </article>

        <article className="card Personen">
          <img
            className="person-image"
            src="/team-pictures/christian.png"
            alt="Christian"
          />
          <h3>Christian</h3>
          <p>
            “Hello, I’m Christian from Dresden. I'm a software developer with 10
            years of experience. I enjoy discovering new technologies and using
            them in different projects.”
          </p>
          <h4>Contact:</h4>
          <a href="https://github.com/ChrstianH">Github</a>
        </article>

        <article className="card Personen">
          <img
            className="person-image"
            src="/team-pictures/anne.png"
            alt="Anne"
          />
          <h3>Anne</h3>
          <p>
            “Hi, I’m Anne, I’m from Kiel and I’m a true Northern light. With
            creative background knowledge from my past as a media designer, I
            love giving websites the final touch.”
          </p>
          <h4>Contact:</h4>
          <a href="https://github.com/Anne-SophieNehls">Github</a>
          <a href="https://www.linkedin.com/in/anne-sophie-nehls-89ba671b7/">
            LinkedIn
          </a>
        </article>
      </div>
      
    </section>
    </div>

  );
}
