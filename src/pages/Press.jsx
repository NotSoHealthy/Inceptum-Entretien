import { useEffect } from 'react';

const Press = () => {
  useEffect(() => {
    document.title = 'Presse | Saviora';
  }, []);

  return (
    <div>
      <header className="article__header" style={{background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/assets/images/2017/02/on_parle_de_nous.jpg) center/cover', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <hgroup style={{textAlign: 'center', color: 'white'}}>
          <h2 className="headline__secondary" style={{fontFamily: 'Herr Von Muellerhoff', fontSize: '3em'}}>On parle</h2>
          <h1 className="headline__primary" style={{fontSize: '4em', fontWeight: 'bold'}}>de nous</h1>
        </hgroup>
      </header>

      <article className="article--page">
        <section className="article__content" style={{padding: '80px 20px'}}>
          <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '60px'}}>
              <p style={{fontSize: '1.2em', color: '#666', lineHeight: '1.7'}}>
                Découvrez ce que la presse dit de Saviora
              </p>
            </div>

            <div className="grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px'}}>
              <div className="press-card" style={{padding: '30px', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                <h3 style={{fontSize: '1.5em', marginBottom: '15px', color: '#c59d5f'}}>Elle Magazine</h3>
                <p style={{color: '#999', fontSize: '0.9em', marginBottom: '15px'}}>Mars 2021</p>
                <p style={{lineHeight: '1.7', color: '#666'}}>
                  "Une adresse incontournable du cours Julien. Saviora propose une cuisine italienne authentique et généreuse qui ravit les papilles."
                </p>
              </div>

              <div className="press-card" style={{padding: '30px', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                <h3 style={{fontSize: '1.5em', marginBottom: '15px', color: '#c59d5f'}}>Gault & Millau</h3>
                <p style={{color: '#999', fontSize: '0.9em', marginBottom: '15px'}}>2021</p>
                <p style={{lineHeight: '1.7', color: '#666'}}>
                  "Le chef Pierre-Antoine signe une carte qui évolue au fil des saisons, mettant en valeur les meilleurs produits italiens."
                </p>
              </div>

              <div className="press-card" style={{padding: '30px', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                <h3 style={{fontSize: '1.5em', marginBottom: '15px', color: '#c59d5f'}}>L'Officiel des Loisirs</h3>
                <p style={{color: '#999', fontSize: '0.9em', marginBottom: '15px'}}>2021</p>
                <p style={{lineHeight: '1.7', color: '#666'}}>
                  "Un bistrot italien comme on les aime, avec une ambiance chaleureuse et des plats qui sentent bon le soleil."
                </p>
              </div>

              <div className="press-card" style={{padding: '30px', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                <h3 style={{fontSize: '1.5em', marginBottom: '15px', color: '#c59d5f'}}>Cuisine & Vins de France</h3>
                <p style={{color: '#999', fontSize: '0.9em', marginBottom: '15px'}}>2021</p>
                <p style={{lineHeight: '1.7', color: '#666'}}>
                  "Des produits d'exception, une cuisine respectueuse des traditions italiennes et une générosité toute méridionale."
                </p>
              </div>

              <div className="press-card" style={{padding: '30px', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                <h3 style={{fontSize: '1.5em', marginBottom: '15px', color: '#c59d5f'}}>USB Magazine</h3>
                <p style={{color: '#999', fontSize: '0.9em', marginBottom: '15px'}}>2021</p>
                <p style={{lineHeight: '1.7', color: '#666'}}>
                  "Saviora, c'est l'Italie à Les Berges du Lac. Une cuisine authentique qui fait voyager."
                </p>
              </div>

              <div className="press-card" style={{padding: '30px', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                <h3 style={{fontSize: '1.5em', marginBottom: '15px', color: '#c59d5f'}}>Un Café et l'Addition</h3>
                <p style={{color: '#999', fontSize: '0.9em', marginBottom: '15px'}}>2021</p>
                <p style={{lineHeight: '1.7', color: '#666'}}>
                  "Une valeur sûre de la gastronomie marseillaise, où l'on vient et revient pour la qualité constante des plats."
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Press;
