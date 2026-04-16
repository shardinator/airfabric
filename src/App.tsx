import './App.css'

function App() {
  return (
    <main className="page" aria-label="AirFabric home">
      <div className="container">
        <header className="hero">
          <img
            className="airfabricLogo"
            src="/images/AirFabric_logo.png"
            alt="AirFabric"
          />

          <h1 className="title">
            Charting the future for data and currency
          </h1>

          <div className="lede">
            <p>
              Built on ideas coming from the blockchain world, AirFabric
              reimagines what it means to store data, make a financial
              transaction and trade with a currency.
            </p>
            <p>
              AirFabric is created with the philosophy that data and economics
              should be reliable and control should be with the end user.
            </p>
          </div>
        </header>

        <section className="products" aria-label="AirFabric layers">
          <article className="card">
            <h2 className="cardTitle">AirStore</h2>
            <p className="cardSubtitle">Data storage layer</p>
            <p className="cardBody cardSoon">More information will be available soon</p>
          </article>

          <article className="card">
            <h2 className="cardTitle">AirSend</h2>
            <p className="cardSubtitle">Financial transaction layer</p>
            <p className="cardBody cardSoon">More information will be available soon</p>
          </article>

          <article className="card">
            <h2 className="cardTitle">AirNote</h2>
            <p className="cardSubtitle">Digital currency layer</p>
            <p className="cardBody cardSoon">More information will be available soon</p>
          </article>
        </section>

        <section className="contact" aria-label="Contact AirFabric">
          <div className="contactInner">
            <div className="contactCopy">
              <h2 className="sectionTitle">Contact</h2>
              <p className="sectionBody">
                Reach out with questions, ideas, or partnership inquiries.
              </p>
            </div>

            <form
              className="form"
              action="https://formcarry.com/s/btVIUJJtKCu"
              method="POST"
            >
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
