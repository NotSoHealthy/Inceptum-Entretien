import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = 'Saviora | Les Berges du Lac';
  }, []);

  return (
    <div>
      <header className="article__header article__header--page full-height" style={{background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/assets/images/2014/05/la-cantinetta-2048x1351.jpg') center/cover`, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="flexbox">
          <div className="flexbox__item" style={{textAlign: 'center', color: 'white'}}>
            <hgroup className="article__headline">
              <h2 className="headline__secondary" style={{fontFamily: 'Herr Von Muellerhoff', fontSize: '5em', marginBottom: '10px'}}>Bienvenue</h2>
              <h1 className="headline__primary" style={{fontSize: '4em', fontWeight: 'bold', margin: '20px 0'}}>Saviora</h1>
              <div className="headline__description">
                <div className="separator">
                  <span style={{fontSize: '2em'}}></span>
                </div>
                
                <h6 style={{marginTop: '20px', fontSize: '1.2em'}}>
                  <a href="https://www.google.fr/maps/place/La+Cantinetta" target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'none'}}>
                    20 rue Mohammed V - Les Berges du Lac<br />
                    tel : 25 485 695
                  </a>
                </h6>
              </div>
            </hgroup>
          </div>
        </div>
      </header>

      <article className="article--page">
        <section className="article__content" style={{padding: '80px 20px'}}>
          <div className="container" style={{maxWidth: '1250px', margin: '0 auto'}}>
            <div className="grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px'}}>
              <div>
                <hgroup className="article__headline" style={{textAlign: 'center', marginBottom: '30px'}}>
                  <h2 className="headline__secondary" style={{fontFamily: 'Herr Von Muellerhoff', fontSize: '2.5em', color: '#c59d5f'}}>L'esprit</h2>
                  <h1 className="headline__primary" style={{fontSize: '2em', marginTop: '10px'}}>du lieu</h1>
                </hgroup>
                <div className="separator" style={{textAlign: 'center', margin: '20px 20px', color: '#c59d5f', fontSize: '1.5em'}}></div>
                <p style={{ textAlign: 'center', lineHeight: '1.7,', margin: '20px'}}>
                  Ouvert en 2006 à Les Berges du Lac, Saviora est un Bistrot Italien dont la carte est inspirée par notre passion et notre goût pour la délicieuse cuisine des régions transalpines. Depuis le début, nous sommes restés fidèles à nos principes : aller dans les meilleures trattoria du pays de Pasolini et vous proposer, en fonction des saisons, la quintessence des produits d'artisans, dans des assiettes orchestrées par notre Chef Pierre-Antoine.
                </p>
              </div>
              <div style={{textAlign: 'center'}}>
                <img src="/assets/images/2014/05/esprit_du_lieu-1024x685.jpg" alt="L'esprit du lieu" style={{maxWidth: '100%', height: 'auto', borderRadius: '8px'}} />
              </div>
            </div>
          </div>
        </section>

        <section className="article__content" style={{padding: '80px 20px', background: '#f9f9f9'}}>
          <div className="container" style={{maxWidth: '1250px', margin: '0 auto'}}>
            <hgroup style={{textAlign: 'center', marginBottom: '50px'}}>
              <h2 className="headline__secondary" style={{fontFamily: 'Herr Von Muellerhoff', fontSize: '2.5em', color: '#c59d5f'}}>Dans</h2>
              <h1 className="headline__primary" style={{fontSize: '2em', marginTop: '10px'}}>les assiettes</h1>
            </hgroup>
            <div className="grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', textAlign: 'center'}}>
              <div>
                <Link to="/carte#entrees" style={{display: 'block', cursor: 'pointer'}}>
                  <img
                    src="/assets/images/2014/05/food1-1024x685.jpg"
                    alt="Nos plats"
                    style={{maxWidth: '100%', borderRadius: '8px', marginBottom: '15px', transition: 'transform 0.3s ease, opacity 0.3s ease'}}
                    onMouseOver={(e) => {e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.opacity = '0.9';}}
                    onMouseOut={(e) => {e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1';}}
                  />
                </Link>
                <p>La base, c'est le produit bien sûr, mais aussi des femmes et des hommes qui le respectent.</p>
              </div>
              <div>
                <Link to="/carte#plats" style={{display: 'block', cursor: 'pointer'}}>
                  <img
                    src="/assets/images/2014/05/food2-1024x685.jpg"
                    alt="Nos spécialités"
                    style={{maxWidth: '100%', borderRadius: '8px', marginBottom: '15px', transition: 'transform 0.3s ease, opacity 0.3s ease'}}
                    onMouseOver={(e) => {e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.opacity = '0.9';}}
                    onMouseOut={(e) => {e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1';}}
                  />
                </Link>
                <p>L'hiver, direction le nord de l'Italie : ambiance ragù, viandes braisées, polenta, risotti, pappardelle. L'été retour vers le Sud : ambiance coquillages et crustacés.</p>
              </div>
              <div>
                <Link to="/carte#desserts" style={{display: 'block', cursor: 'pointer'}}>
                  <img
                    src="/assets/images/2014/05/food3-1024x685.jpg"
                    alt="Notre passion"
                    style={{maxWidth: '100%', borderRadius: '8px', marginBottom: '15px', transition: 'transform 0.3s ease, opacity 0.3s ease'}}
                    onMouseOver={(e) => {e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.opacity = '0.9';}}
                    onMouseOut={(e) => {e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1';}}
                  />
                </Link>
                <p>Et puis, l'accent et la générosité du Midi, ça fait la différence !</p>
              </div>
            </div>
          </div>
        </section>
        <section className="reviews-section" style={{padding: '100px 20px', background: '#fafafa'}}>
  <div className="container" style={{maxWidth: '1100px', margin: '0 auto', textAlign: 'center'}}>
    <hgroup style={{marginBottom: '60px'}}>
      <h2 className="headline__secondary" style={{fontFamily: 'Herr Von Muellerhoff', fontSize: '3em', color: '#c59d5f'}}>Ce que disent</h2>
      <h1 className="headline__primary" style={{fontSize: '2.5em', marginTop: '10px', fontWeight: 'bold'}}>Nos Clients</h1>
      <div className="separator" style={{margin: '20px auto', width: '60px', height: '3px', backgroundColor: '#c59d5f', borderRadius: '2px'}}></div>
    </hgroup>

    <div className="grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px'}}>
      
      <div style={{
        background: '#fff',
        padding: '40px 30px',
        borderRadius: '12px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
      }}>
        <p style={{fontStyle: 'italic', marginBottom: '20px', fontSize: '1.1em', color: '#555'}}>"Un restaurant magnifique avec une ambiance chaleureuse et des plats savoureux !"</p>
        <h5 style={{fontWeight: 'bold', color: '#c59d5f'}}>— Marie D.</h5>
      </div>

      <div style={{
        background: '#fff',
        padding: '40px 30px',
        borderRadius: '12px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
      }}>
        <p style={{fontStyle: 'italic', marginBottom: '20px', fontSize: '1.1em', color: '#555'}}>"Les meilleures pâtes que j’ai mangées à Tunis, service impeccable !"</p>
        <h5 style={{fontWeight: 'bold', color: '#c59d5f'}}>— Karim B.</h5>
      </div>

      <div style={{
        background: '#fff',
        padding: '40px 30px',
        borderRadius: '12px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
      }}>
        <p style={{fontStyle: 'italic', marginBottom: '20px', fontSize: '1.1em', color: '#555'}}>"Une expérience culinaire exceptionnelle, on reviendra très vite."</p>
        <h5 style={{fontWeight: 'bold', color: '#c59d5f'}}>— Sophie L.</h5>
      </div>

    </div>
  </div>
</section>


        <section className="map-section" style={{padding: '0', margin: '0'}}>
          <div style={{width: '100%', height: '450px'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.8236897524395!2d5.380280476453994!3d43.29537777112843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0bcbca8ba41%3A0xdc872278e543a6ff!2sLa%20Cantinetta!5e0!3m2!1sen!2sfr!4v1234567890123!5m2!1sen!2sfr"
              width="100%"
              height="450"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location de Saviora"
            ></iframe>
          </div>
        </section>
        <section className="reservation-section" style={{padding: '100px 20px', background: '#fff'}}>
  <div className="container" style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
    <hgroup style={{marginBottom: '40px'}}>
      <h2 className="headline__secondary" style={{fontFamily: 'Herr Von Muellerhoff', fontSize: '3em', color: '#c59d5f'}}>Réservez</h2>
      <h1 className="headline__primary" style={{fontSize: '2em', marginTop: '10px', fontWeight: 'bold'}}>Votre Table</h1>
      <div className="separator" style={{margin: '20px auto', width: '60px', height: '3px', backgroundColor: '#c59d5f', borderRadius: '2px'}}></div>
    </hgroup>

    <form style={{display: 'grid', gap: '20px', textAlign: 'left'}}>
      {/* Name */}
      <div>
        <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Nom complet</label>
        <input type="text" name="name" placeholder="Votre nom" required 
          style={{width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc'}} />
      </div>

      {/* Email */}
      <div>
        <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Email</label>
        <input type="email" name="email" placeholder="Votre email" required 
          style={{width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc'}} />
      </div>

      {/* Date */}
      <div>
        <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Date</label>
        <input type="date" name="date" required 
          style={{width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc'}} />
      </div>

      {/* Time */}
      <div>
        <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Heure</label>
        <input type="time" name="time" required 
          style={{width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc'}} />
      </div>

      {/* Submit */}
      <div style={{textAlign: 'center'}}>
        <button type="submit" 
          style={{
            backgroundColor: '#c59d5f',
            color: '#fff',
            padding: '12px 30px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.1em',
            transition: 'background 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a37e3b'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#c59d5f'}
        >
          Réserver
        </button>
      </div>
    </form>
  </div>
</section>


      </article>
    </div>
  );
};

export default Home;
