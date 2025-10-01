// Configuration globale pour les emails
export const EMAIL_CONFIG = {
  // Changez cette valeur à true quand vous voulez envoyer de vrais emails
  USE_REAL_EMAIL: false,
  
  // Configuration EmailJS (à remplir quand USE_REAL_EMAIL = true)
  EMAILJS_SERVICE_ID: 'service_xyz123', // Remplacez par votre service ID
  EMAILJS_TEMPLATE_ID: 'template_abc456', // Remplacez par votre template ID  
  EMAILJS_PUBLIC_KEY: 'your_public_key_here', // Remplacez par votre clé publique
  
  // Informations du restaurant
  RESTAURANT_NAME: 'La Cantinetta',
  RESTAURANT_EMAIL: 'contact@lacantinetta.fr'
};