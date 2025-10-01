const Footer = () => {
  return (
    <footer className="site-footer border-waves">
      <div className="container" style={{maxWidth: '1250px'}}>
        <div className="site-footer__content" style={{padding: '40px 0'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', textAlign: 'center', marginBottom: '30px'}}>
            <div className="footer-section">
              <h4 style={{color: '#c59d5f', marginBottom: '15px', fontSize: '1.2em', fontFamily: 'Source Sans Pro'}}>Adresse</h4>
              <p style={{lineHeight: '1.8', color: '#ccc'}}>
                20 rue Mohammed V<br />
                Les Berges du Lac<br />
                Tunisie
              </p>
            </div>
            
            <div className="footer-section">
              <h4 style={{color: '#c59d5f', marginBottom: '15px', fontSize: '1.2em', fontFamily: 'Source Sans Pro'}}>Contact</h4>
              <p style={{lineHeight: '1.8', color: '#ccc'}}>
                <a href="tel:25485695" style={{color: '#ccc', textDecoration: 'none', display: 'block', marginBottom: '8px'}}>
                  📞 25 485 695
                </a>
                <a href="mailto:reservation@saviora.tn" style={{color: '#ccc', textDecoration: 'none', display: 'block'}}>
                  ✉️ reservation@saviora.tn
                </a>
              </p>
            </div>
            
            <div className="footer-section">
              <h4 style={{color: '#c59d5f', marginBottom: '15px', fontSize: '1.2em', fontFamily: 'Source Sans Pro'}}>Horaires</h4>
              <p style={{lineHeight: '1.8', color: '#ccc'}}>
                Mardi - Samedi<br />
                12h00 - 14h30<br />
                19h30 - 22h30
              </p>
            </div>
          </div>
          
          <div className="footer-bottom" style={{borderTop: '1px solid #333', paddingTop: '20px'}}>
            <p style={{color: '#999', fontSize: '0.9em'}}>&copy; {new Date().getFullYear()} Saviora - Restaurant Italien - Les Berges du Lac</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
