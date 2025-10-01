import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig.js';

// Initialize EmailJS only if real emails are enabled
if (EMAIL_CONFIG.USE_REAL_EMAIL) {
  emailjs.init(EMAIL_CONFIG.EMAILJS_PUBLIC_KEY);
}

export const sendReservationConfirmationEmail = async (reservation) => {
  try {
    const templateParams = {
      to_name: reservation.customer_name,
      to_email: reservation.email,
      restaurant_name: EMAIL_CONFIG.RESTAURANT_NAME,
      reservation_date: new Date(reservation.reservation_date).toLocaleDateString('fr-FR'),
      reservation_time: reservation.reservation_time,
      party_size: reservation.party_size,
      dishes: reservation.dishes?.map(dish => `${dish.name} (${dish.price}€)`).join(', ') || 'Aucun plat présélectionné',
      total_amount: reservation.total_amount || 0,
      special_requests: reservation.special_requests || 'Aucune demande spéciale',
      phone: reservation.phone
    };

    console.log('Sending email with params:', templateParams);

    const response = await emailjs.send(
      EMAIL_CONFIG.EMAILJS_SERVICE_ID,
      EMAIL_CONFIG.EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: error.message };
  }
};

// For demo purposes, we'll use a mock email service that just logs
export const sendReservationConfirmationEmailMock = async (reservation) => {
  try {
    console.log('');
    console.log('🎯 EMAIL DEMO - SIMULATION D\'ENVOI');
    console.log('📧 DESTINATAIRE:', reservation.email);
    console.log('👤 CLIENT:', reservation.customer_name);
    console.log('');
    console.log('📋 CONTENU DE L\'EMAIL:');
    console.log(`
      Cher/Chère ${reservation.customer_name},
      
      Votre réservation à ${EMAIL_CONFIG.RESTAURANT_NAME} a été confirmée !
      
      Détails de votre réservation :
      • Date : ${new Date(reservation.reservation_date).toLocaleDateString('fr-FR')}
      • Heure : ${reservation.reservation_time}
      • Nombre de personnes : ${reservation.party_size}
      • Téléphone : ${reservation.phone}
      ${reservation.dishes?.length > 0 ? `• Plats présélectionnés : ${reservation.dishes.map(dish => `${dish.name} (${dish.price}€)`).join(', ')}` : ''}
      ${reservation.special_requests ? `• Demandes spéciales : ${reservation.special_requests}` : ''}
      
      Nous avons hâte de vous accueillir !
      
      Cordialement,
      L'équipe de ${EMAIL_CONFIG.RESTAURANT_NAME}
    `);
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true, message: 'Email de confirmation envoyé (mode démo)' };
  } catch (error) {
    console.error('Mock email service error:', error);
    return { success: false, error: error.message };
  }
};

// Unified email function that automatically chooses demo or real email
export const sendConfirmationEmail = async (reservation) => {
  console.log('='.repeat(60));
  console.log('📧 SYSTÈME EMAIL ACTIVÉ');
  console.log('='.repeat(60));
  
  if (EMAIL_CONFIG.USE_REAL_EMAIL) {
    console.log('🚀 MODE: Envoi d\'un vrai email via EmailJS...');
    console.log('📧 Service ID:', EMAIL_CONFIG.EMAILJS_SERVICE_ID);
    return await sendReservationConfirmationEmail(reservation);
  } else {
    console.log('🎭 MODE: DEMO - Email affiché dans la console uniquement');
    console.log('💡 Pour activer les vrais emails: changez USE_REAL_EMAIL à true dans src/config/emailConfig.js');
    console.log('-'.repeat(40));
    return await sendReservationConfirmationEmailMock(reservation);
  }
};