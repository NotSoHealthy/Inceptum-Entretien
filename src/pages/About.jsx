import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = "L'esprit | Saviora";
  }, []);

  return (
    <div>
      <header className="article__header" style={{background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/assets/images/2014/06/esprit_du_lieu_cover.jpg) center/cover', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <hgroup style={{textAlign: 'center', color: 'white'}}>
          <h2 className="headline__secondary" style={{fontFamily: 'Herr Von Muellerhoff', fontSize: '3em'}}>L'</h2>
          <h1 className="headline__primary" style={{fontSize: '4em', fontWeight: 'bold', color: 'white'}}>Esprit</h1>
        </hgroup>
      </header>

      <article className="article--page">
        <section className="article__content" style={{padding: '80px 20px'}}>
          <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
            <div className="grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center'}}>
              <div>
                <h3 style={{fontSize: '2em', marginBottom: '30px', color: '#c59d5f'}}>Notre Histoire</h3>
                <p style={{marginBottom: '20px', lineHeight: '1.7'}}>
                  Ouvert en 2006 à Les Berges du Lac, Saviora est un Bistrot Italien dont la carte est inspirée par notre passion et notre goût pour la délicieuse cuisine des régions transalpines.
                </p>
                <p style={{marginBottom: '20px', lineHeight: '1.7'}}>
                  Depuis le début, nous sommes restés fidèles à nos principes : aller dans les meilleures trattoria du pays de Pasolini et vous proposer, en fonction des saisons, la quintessence des produits d'artisans, dans des assiettes orchestrées par notre Chef Pierre-Antoine.
                </p>
                <p style={{lineHeight: '1.7'}}>
                  Notre philosophie est simple : respecter le produit, respecter les saisons, et partager notre passion pour la cuisine italienne authentique avec générosité et convivialité.
                </p>
              </div>
              <div style={{textAlign: 'center'}}>
                <img src="/assets/images/saviora.png" alt="Notre restaurant" style={{maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}} />
              </div>
            </div>

            <div style={{marginTop: '80px', textAlign: 'center'}}>
              <h3 style={{fontSize: '2em', marginBottom: '30px', color: '#c59d5f'}}>Notre Cuisine</h3>
              <div className="grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '40px'}}>
                <div style={{padding: '0', background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}}>
                  <img src="/assets/images/produit-exceptions.png" alt="Produits d'Exception" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
                  <div style={{padding: '30px'}}>
                    <h4 style={{fontSize: '1.5em', marginBottom: '15px', color: '#262526'}}>Produits d'Exception</h4>
                    <p style={{lineHeight: '1.7', color: '#666'}}>
                      Nous sélectionnons rigoureusement nos produits auprès d'artisans italiens et locaux pour garantir la meilleure qualité.
                    </p>
                  </div>
                </div>
                <div style={{padding: '0', background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}}>
                  <img src="/assets/images/cuisine-de-saison.png" alt="Cuisine de Saison" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
                  <div style={{padding: '30px'}}>
                    <h4 style={{fontSize: '1.5em', marginBottom: '15px', color: '#262526'}}>Cuisine de Saison</h4>
                    <p style={{lineHeight: '1.7', color: '#666'}}>
                      Notre carte évolue au fil des saisons, du Nord de l'Italie en hiver aux saveurs du Sud en été.
                    </p>
                  </div>
                </div>
                <div style={{padding: '0', background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}}>
                  <img src="/assets/images/passion-italienne.png" alt="Passion Italienne" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
                  <div style={{padding: '30px'}}>
                    <h4 style={{fontSize: '1.5em', marginBottom: '15px', color: '#262526'}}>Passion Italienne</h4>
                    <p style={{lineHeight: '1.7', color: '#666'}}>
                      Chaque plat est préparé avec amour et passion, dans le respect des traditions culinaires italiennes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{marginTop: '80px', padding: '50px', background: 'linear-gradient(135deg, #c59d5f 0%, #a8885a 100%)', borderRadius: '8px', color: 'white', textAlign: 'center'}}>
              <h3 style={{fontSize: '2em', marginBottom: '20px'}}>L'accent et la générosité du Midi</h3>
              <p style={{fontSize: '1.2em', lineHeight: '1.7'}}>
                C'est ça qui fait la différence !
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default About;
