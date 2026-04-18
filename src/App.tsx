import './App.css'

function App() {
  return (
    <main className="page" aria-label="AirFabric home">
      <div className="container">
        <header className="hero">
          <img className="airfabricLogo" src="/images/AirFabric_logo.png" alt="AirFabric"/>

          <h1 className="title">
            Charting the future of data and currency
          </h1>

          <div className="lede">
            <p>
            AirFabric is a non profit organisation, designing infrastructure for the future of data and currency.
            </p>
            <p>
            AirFabric's free and open source projects, AirStore and AirNote, can be thought of as plumbing on which specific products can be built. 
            </p>
          </div>
        </header>

        <section className="products" aria-label="AirFabric layers">
                  
          <article className="card">
            <h2 className="cardTitle">AirStore</h2>
            <p className="cardSubtitle">AirStore is a data platform for creating an immutable record for actions. 
              This is especially useful for financial transactions and creating a history of actions by robots of the future.</p>
            <p>
              For more information please download our{' '}
              <a
                className="footerLink"
                href="/documents/AirStore%2C%20Early%20Access%20Paper.pdf"
                download="AirStore, Early Access Paper.pdf"
              >
                Early Access Paper
              </a>.
            </p>
          </article>

          <article className="card">            
            <h2 className="cardTitle">AirNote</h2>
            <p className="cardSubtitle">AirNote is a high speed, low cost transaction friendly currency platform.
               It uses the AirStore data platform to enable digital currencies that can be used in the real world.</p>
               <p>
              For more information please download our{' '}
              <a
                className="footerLink"
                href="/documents/AirNote%2C%20Early%20Access%20Paper.pdf"
                download="AirNote, Early Access Paper.pdf"
              >
                Early Access Paper
              </a>.
            </p>               
          </article>

        </section>

        <section className="contact" aria-label="Contact AirFabric">
          <div className="contactInner">
            <div className="contactCopy">
              <h2 className="sectionTitle">Contact</h2>
              <p className="sectionBody">
                Reach out with questions, ideas or partnership inquiries.
              </p>
            </div>

            <form className="form" action="https://formcarry.com/s/btVIUJJtKCu" method="POST">
              <label className="field">

                <input type="hidden" name="whereFrom" value="AirFabric" />
                
                <span className="label">Name</span>
                <input
                  className="input"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="field">
                <span className="label">Email</span>
                <input
                  className="input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="field fieldFull">
                <span className="label">Message</span>
                <textarea
                  className="textarea"
                  name="message"
                  rows={5}
                  required
                />
              </label>

              <button className="button" type="submit">
                Send message
              </button>
            </form>
          </div>
        </section>

        <footer className="footer" aria-label="Site footer">
          <p className="footerLine footerLineStrong">
            A project by{' '}
            <a
              className="footerLink"
              href="https://ankursharda.com"
              target="_blank"
              rel="noreferrer"
            >
              Ankur Sharda
            </a>
          </p>
          <p className="footerLine">© Copyright 2026. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}

export default App
