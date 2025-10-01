import { useEffect, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact | Saviora';
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div>
      <header className="article__header" style={{background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/assets/images/2014/05/contact.jpg) center/cover', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <hgroup style={{textAlign: 'center', color: 'white'}}>
          <h2 className="headline__secondary" style={{fontFamily: 'Herr Von Muellerhoff', fontSize: '3em'}}>Nous</h2>
          <h1 className="headline__primary" style={{fontSize: '4em', fontWeight: 'bold', color: 'white'}}>Contacter</h1>
        </hgroup>
      </header>

      <article className="article--page">
        <section className="article__content" style={{padding: '80px 20px'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div className="grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px'}}>
              <div>
                <h3 style={{fontSize: '2em', marginBottom: '30px', color: '#c59d5f'}}>Informations</h3>
                
                <div style={{marginBottom: '30px'}}>
                  <h4 style={{fontSize: '1.3em', marginBottom: '10px', color: '#262526'}}>Adresse</h4>
                  <p style={{lineHeight: '1.7', color: '#666'}}>
                    20 rue Mohammed V<br />
                    13006 Les Berges du Lac<br />
                    Tunisie
                  </p>
                </div>

                <div style={{marginBottom: '30px'}}>
                  <h4 style={{fontSize: '1.3em', marginBottom: '10px', color: '#262526'}}>Téléphone</h4>
                  <p style={{lineHeight: '1.7'}}>
                    <a href="tel:25485695" style={{color: '#c59d5f', textDecoration: 'none'}}>25 485 695</a>
                  </p>
                </div>

                <div style={{marginBottom: '30px'}}>
                  <h4 style={{fontSize: '1.3em', marginBottom: '10px', color: '#262526'}}>Horaires</h4>
                    <p style={{lineHeight: '1.7', color: '#666'}}>
                      Tous les jours<br />
                      11h00 - 02h00
                    </p>
                </div>

                <div style={{marginTop: '40px'}}>
                  <a 
                    href="https://www.google.fr/maps/place/La+Cantinetta/@43.2953777,5.3802804,17z/data=!3m1!4b1!4m5!3m4!1s0x12c9c0bcbca8ba41:0xdc872278e543a6ff!8m2!3d43.2953777!4d5.3824744" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{display: 'inline-block', padding: '15px 30px', background: '#c59d5f', color: 'white', textDecoration: 'none', borderRadius: '4px', fontSize: '1.1em'}}
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>

              <div>
                <h3 style={{fontSize: '2em', marginBottom: '30px', color: '#c59d5f'}}>Envoyez-nous un message</h3>
                
                {submitted && (
                  <div style={{padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '4px', marginBottom: '20px'}}>
                    Message envoyé avec succès ! Nous vous répondrons bientôt.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div style={{marginBottom: '20px'}}>
                    <label style={{display: 'block', marginBottom: '8px', color: '#262526'}}>
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1em'}}
                    />
                  </div>

                  <div style={{marginBottom: '20px'}}>
                    <label style={{display: 'block', marginBottom: '8px', color: '#262526'}}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1em'}}
                    />
                  </div>

                  <div style={{marginBottom: '20px'}}>
                    <label style={{display: 'block', marginBottom: '8px', color: '#262526'}}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      style={{width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1em', resize: 'vertical'}}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{padding: '15px 40px', background: '#c59d5f', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1.1em', cursor: 'pointer', transition: 'background 0.3s'}}
                    onMouseOver={(e) => e.target.style.background = '#a8885a'}
                    onMouseOut={(e) => e.target.style.background = '#c59d5f'}
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Contact;
