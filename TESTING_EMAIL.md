# Test des Emails de Confirmation

## État Actuel (Mode Démo)

Le système utilise actuellement un service d'email de démonstration qui affiche les emails dans la console du navigateur au lieu de les envoyer réellement.

## Comment tester maintenant :

1. **Ouvrez votre navigateur sur** `http://localhost:5174`
2. **Ouvrez la console du navigateur** (F12 → onglet Console)
3. **Allez au Dashboard Admin** (cliquez sur "Admin" dans le menu)
4. **Créez une nouvelle réservation** (allez d'abord au menu, réservez un plat)
5. **Revenez au Dashboard Admin**
6. **Confirmez la réservation** (bouton "Confirmer")
7. **Regardez dans la console** - vous verrez l'email qui aurait été envoyé

## Ce que vous verrez dans la console :

```
📧 EMAIL SENT TO: client@example.com
📧 EMAIL CONTENT:
Cher/Chère John Doe,

Votre réservation à La Cantinetta a été confirmée !

Détails de votre réservation :
• Date : 01/10/2025
• Heure : 19:30
• Nombre de personnes : 4
...
```

## Solutions pour envoyer de vrais emails :

### Option 1: EmailJS (Recommandé - Gratuit)

- Voir le fichier `EMAIL_SETUP.md` pour les instructions complètes
- Service gratuit jusqu'à 200 emails/mois
- Configuration simple

### Option 2: Service d'email personnalisé

- Intégration avec votre fournisseur d'email existant
- Plus de contrôle mais plus complexe

### Option 3: Backend avec service email

- Nodemailer + serveur backend
- Solution la plus professionnelle

## Erreurs CSS (Non critiques)

Les erreurs que vous voyez concernant `style.css.map` sont des avertissements pour des fichiers de mappage source manquants. Elles n'affectent pas le fonctionnement de l'application et peuvent être ignorées.
