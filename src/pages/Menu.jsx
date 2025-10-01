import { useEffect, useState } from 'react';
import ReservationForm from '../components/ReservationForm';

const Menu = () => {
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);

  useEffect(() => {
    document.title = 'La Carte | Saviora';
  }, []);

  const handleReserveDish = (dish) => {
    setSelectedDishes([dish]);
    setShowReservationForm(true);
  };

  return (
    <div>
      <header className="article__header" style={{background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/assets/images/2017/02/carte_cover.jpg) center/cover', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <hgroup style={{textAlign: 'center'}}>
          <h2 className="headline__secondary" style={{fontFamily: 'Herr Von Muellerhoff', fontSize: '3em', color: 'white'}}>Notre</h2>
          <h1 className="headline__primary" style={{fontSize: '4em', fontWeight: 'bold', color: 'white'}}>Carte</h1>
        </hgroup>
      </header>

      <article className="article--page">
        <section className="article__content" style={{padding: '80px 20px'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '50px'}}>
              <h3 style={{fontSize: '2em', marginBottom: '20px', color: '#c59d5f'}}>Nos Spécialités</h3>
              <p style={{fontSize: '1.1em', lineHeight: '1.7'}}>
                Découvrez notre carte qui change au fil des saisons, mettant en valeur les meilleurs produits italiens.
              </p>
            </div>

            <div className="menu-section" style={{marginBottom: '60px', textAlign: 'center'}}>
              <h4 style={{fontSize: '1.8em', marginBottom: '30px', color: '#262526', borderBottom: '2px solid #c59d5f', paddingBottom: '10px', display: 'inline-block'}}>Entrées</h4>
              <div className="menu-items">
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '800px', margin: '0 auto 20px', padding: '15px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'}}>
                  <div style={{textAlign: 'left', flex: 1}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Antipasti du jour / + Jambon de Parme</h5>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                    <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap'}}>18 € / 22 €</span>
                    <button
                      onClick={() => handleReserveDish({name: 'Antipasti du jour', price: 18})}
                      style={{
                        background: '#c59d5f',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '0.9em',
                        fontWeight: '600'
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '800px', margin: '0 auto 20px', padding: '15px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'}}>
                  <div style={{textAlign: 'left', flex: 1}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Parme (IGP 24 Mois)</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>roquette + mozzarella di bufala</p>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                    <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap'}}>16 €</span>
                    <button
                      onClick={() => handleReserveDish({name: 'Parme (IGP 24 Mois)', price: 16})}
                      style={{
                        background: '#c59d5f',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '0.9em',
                        fontWeight: '600'
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Burrata pugliese</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>13 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Bagna Cauda & légumes de saison</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>14 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Rillettes de sardines</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>12 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Assiette de Jambon de Parme</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>(IGP 24 Mois)</p>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>16 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Roquette + parmesan</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>7 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Vitello Tonnato</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>14 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Salade de poulpe</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>15 €</span>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', margin: '40px 0', color: '#c59d5f', fontSize: '1.5em'}}>✻</div>

            <div className="menu-section" style={{marginBottom: '60px', textAlign: 'center'}}>
              <h4 style={{fontSize: '1.8em', marginBottom: '30px', color: '#262526', borderBottom: '2px solid #c59d5f', paddingBottom: '10px', display: 'inline-block'}}>Plats</h4>
              <div className="menu-items">
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '800px', margin: '0 auto 20px', padding: '15px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'}}>
                  <div style={{textAlign: 'left', flex: 1}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Linguine alle vongole</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>(palourdes sauvages de Camargue)</p>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                    <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap'}}>22 €</span>
                    <button
                      onClick={() => handleReserveDish({name: 'Linguine alle vongole', price: 22})}
                      style={{
                        background: '#c59d5f',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '0.9em',
                        fontWeight: '600'
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Vesuvio Crème et parmesan 36 mois d'affinage</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>18 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Scaloppine sauce Cantinetta</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>22 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Carne del giorno</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>22 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Rigatoni all' arrabbiata</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>18 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Risotto del giorno</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>20/22/24 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Pasta del giorno</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>20/22/24/26 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Pesce del giorno</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>21 €</span>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', margin: '40px 0', color: '#c59d5f', fontSize: '1.5em'}}>✻</div>

            <div className="menu-section" style={{marginBottom: '60px', textAlign: 'center'}}>
              <h4 style={{fontSize: '1.8em', marginBottom: '30px', color: '#262526', borderBottom: '2px solid #c59d5f', paddingBottom: '10px', display: 'inline-block'}}>Desserts</h4>
              <div className="menu-items">
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '800px', margin: '0 auto 20px', padding: '15px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'}}>
                  <div style={{textAlign: 'left', flex: 1}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Tiramisu maison</h5>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                    <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap'}}>9 €</span>
                    <button
                      onClick={() => handleReserveDish({name: 'Tiramisu maison', price: 9})}
                      style={{
                        background: '#c59d5f',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '0.9em',
                        fontWeight: '600'
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Panna cotta au coulis de fruits rouges</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>8 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Torta di cioccolato</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>8 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Moelleux à la châtaigne des Cévennes</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>8 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Gorgonzola sélection Luigi Guffanti</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>9 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Pain perdu de panettone</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>(sirop d'érable, cannelle, glace amande)</p>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>9 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Sorbet citron limoncello</h5>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>8 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Vacherin fraise ou noisette</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>(glace, meringue, chantilly)</p>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>8 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Le piémontais</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>(glace noisette, sauce chocolat, amandes grillées, chantilly)</p>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>8 €</span>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', margin: '40px 0', color: '#c59d5f', fontSize: '1.5em'}}>✻</div>

            <div className="menu-section" style={{marginBottom: '60px', textAlign: 'center'}}>
              <h4 style={{fontSize: '1.8em', marginBottom: '30px', color: '#262526', borderBottom: '2px solid #c59d5f', paddingBottom: '10px', display: 'inline-block'}}>Vins & Bière</h4>
              <div className="menu-items">
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Bière Peroni</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>33cl</p>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>4 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Vin blanc Orvieto</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>Classico 2018</p>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>24 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Vin rosé Vallon des Glauges</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>Coteaux d'Aix en Provence 2019</p>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>24 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Vin rouge Lucarelli</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>Primitivo 2018</p>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>26 €</span>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', margin: '40px 0', color: '#c59d5f', fontSize: '1.5em'}}>✻</div>

            <div className="menu-section" style={{textAlign: 'center'}}>
              <h4 style={{fontSize: '1.8em', marginBottom: '30px', color: '#262526', borderBottom: '2px solid #c59d5f', paddingBottom: '10px', display: 'inline-block'}}>Softs</h4>
              <div className="menu-items">
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Coca cola</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>33cl</p>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>2,50 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Ice Tea</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>33cl</p>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>2,50 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Perrier</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>33cl</p>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>2,5 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Coca cola zero</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>33cl</p>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>2,50 €</span>
                </div>
                <div className="menu-item" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '600px', margin: '0 auto 20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <h5 style={{fontSize: '1.1em', marginBottom: '3px'}}>Orangina</h5>
                    <p style={{color: '#666', fontSize: '0.9em', margin: '0'}}>33cl</p>
                  </div>
                  <span style={{color: '#c59d5f', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '20px'}}>2,50 €</span>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', marginTop: '60px', padding: '30px', background: '#f9f9f9', borderRadius: '8px'}}>
              <p style={{fontStyle: 'italic', color: '#666'}}>
                Notre carte évolue au fil des saisons pour vous proposer des produits frais et de qualité.<br />
                N'hésitez pas à demander notre carte complète et nos suggestions du jour.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* Reservation Form Modal */}
      {showReservationForm && (
        <ReservationForm
          selectedDishes={selectedDishes}
          onClose={() => {
            setShowReservationForm(false);
            setSelectedDishes([]);
          }}
        />
      )}
    </div>
  );
};

export default Menu;
