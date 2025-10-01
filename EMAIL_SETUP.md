# 📧 Configuration Email - La Cantinetta

## 🎯 État Actuel

✅ **Email automatique configuré et fonctionnel**  
🎭 **Mode démo actif** (emails affichés dans la console)  
🔄 **Passage en mode production simple**

## 🚀 Test Immédiat

### 1. Tester le système actuel

1. Ouvrez `http://localhost:5174`
2. **F12** → Onglet **Console**
3. Allez au **Menu** → Réservez un plat
4. Allez au **Dashboard Admin**
5. **Confirmez** la réservation
6. 🎉 **Voir l'email dans la console !**

## ⚡ Activer les Vrais Emails (EmailJS)

### Étape 1: Compte EmailJS

1. ➡️ [EmailJS.com](https://www.emailjs.com/) (gratuit)
2. Créez votre service (Gmail/Outlook)
3. Créez votre template

### Étape 2: Template Recommandé

```
Sujet: ✅ Confirmation - Réservation {{restaurant_name}}

Bonjour {{to_name}},

🎉 Excellente nouvelle ! Votre réservation est confirmée.

📋 VOS DÉTAILS DE RÉSERVATION
• 📅 Date : {{reservation_date}}
• ⏰ Heure : {{reservation_time}}
• 👥 Personnes : {{party_size}}
• 📞 Contact : {{phone}}
{{#if dishes}}• 🍽️ Plats : {{dishes}}{{/if}}
{{#if special_requests}}• 💬 Notes : {{special_requests}}{{/if}}

À très bientôt chez {{restaurant_name}} !

L'équipe {{restaurant_name}}
```

### Étape 3: Configuration (2 minutes)

Éditez `src/config/emailConfig.js` :

```javascript
export const EMAIL_CONFIG = {
  USE_REAL_EMAIL: true, // ← Changez ça !
  EMAILJS_SERVICE_ID: "service_xxxxxxx",
  EMAILJS_TEMPLATE_ID: "template_xxxxxxx",
  EMAILJS_PUBLIC_KEY: "votre_clé_publique",
  RESTAURANT_NAME: "La Cantinetta",
};
```

## 📊 Variables du Template

| Variable           | Description      | Exemple                  |
| ------------------ | ---------------- | ------------------------ |
| `to_name`          | Nom du client    | "Jean Dupont"            |
| `to_email`         | Email client     | "jean@email.com"         |
| `restaurant_name`  | Nom restaurant   | "La Cantinetta"          |
| `reservation_date` | Date réservation | "01/10/2025"             |
| `reservation_time` | Heure            | "19:30"                  |
| `party_size`       | Nb personnes     | "4"                      |
| `phone`            | Téléphone        | "06 12 34 56 78"         |
| `dishes`           | Plats choisis    | "Pizza Margherita (12€)" |
| `special_requests` | Demandes         | "Allergie aux noix"      |

## 🔧 Fonctionnalités

- ✅ **Envoi automatique** à la confirmation
- ✅ **Feedback visuel** dans le dashboard
- ✅ **Mode démo/production** switchable
- ✅ **Gestion d'erreurs** robuste
- ✅ **Console de debug** intégrée

## 🐛 Dépannage

**Emails pas reçus ?**

- Vérifiez les spams/indésirables
- Confirmez les IDs EmailJS
- Regardez la console (F12)

**Mode démo coincé ?**

- `USE_REAL_EMAIL: false` → `true`
- Rechargez la page

## 📈 Limites EmailJS Gratuit

- 200 emails/mois gratuits
- Upgrade payant disponible
