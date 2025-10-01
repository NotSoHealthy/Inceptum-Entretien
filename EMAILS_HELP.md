# 🚨 URGENT: Comment Voir les Emails Maintenant

## Le problème : Vous ne recevez pas d'emails dans votre boîte mail

**RAISON :** Le système est en mode DEMO (test) - il ne peut pas encore envoyer de vrais emails.

## ✅ SOLUTION IMMÉDIATE : Voir les emails de démo

### Étapes à suivre MAINTENANT :

1. **Allez sur votre navigateur** : `http://localhost:5174`

2. **Ouvrez la Console** (IMPORTANT!) :

   - Appuyez sur `F12` sur votre clavier
   - Cliquez sur l'onglet "Console"
   - Laissez cette fenêtre ouverte

3. **Créez une réservation** :

   - Cliquez sur "Menu"
   - Choisissez un plat
   - Cliquez "Réserver"
   - Remplissez le formulaire avec votre email
   - Validez

4. **Allez au Dashboard Admin** :

   - Cliquez sur "Admin" dans le menu
   - Vous verrez votre réservation "En attente"

5. **Confirmez la réservation** :
   - Cliquez sur le bouton vert "Confirmer"
   - **REGARDEZ LA CONSOLE !**

### Ce que vous verrez dans la console :

```
============================================================
📧 SYSTÈME EMAIL ACTIVÉ
============================================================
🎭 MODE: DEMO - Email affiché dans la console uniquement
💡 Pour activer les vrais emails: changez USE_REAL_EMAIL à true
----------------------------------------

🎯 EMAIL DEMO - SIMULATION D'ENVOI
📧 DESTINATAIRE: votre@email.com
👤 CLIENT: Votre Nom

📋 CONTENU DE L'EMAIL:
Cher/Chère Votre Nom,

Votre réservation à La Cantinetta a été confirmée !

Détails de votre réservation :
• Date : 01/10/2025
• Heure : 19:30
• Nombre de personnes : 2
• Téléphone : 0612345678
• Plats présélectionnés : Pizza Margherita (12€)

Nous avons hâte de vous accueillir !

Cordialement,
L'équipe de La Cantinetta
```

## 🚀 Pour Envoyer de VRAIS Emails Plus Tard

Si vous voulez que les clients reçoivent vraiment les emails :

1. Créez un compte gratuit sur [EmailJS.com](https://emailjs.com)
2. Configurez votre service email (Gmail, Outlook...)
3. Modifiez le fichier `src/config/emailConfig.js`
4. Changez `USE_REAL_EMAIL: false` à `USE_REAL_EMAIL: true`

## ❗ IMPORTANT

Le système fonctionne parfaitement ! Les emails sont créés et affichés dans la console. C'est normal en mode développement.
