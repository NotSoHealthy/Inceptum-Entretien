# Saviora Restaurant - Admin Dashboard

This project adds an admin dashboard for managing restaurant reservations with Supabase integration.

## Features

### Customer Features
- Browse the restaurant menu
- Select dishes and make reservations
- Provide personal information and special requests
- Receive confirmation of reservation submission

### Admin Features
- View all reservations in a comprehensive dashboard
- Filter reservations by status (pending, confirmed, completed, cancelled)
- Update reservation status
- View detailed reservation information
- Delete reservations
- Real-time statistics dashboard

## Database Setup

### Supabase Configuration

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Run the SQL script from `database/setup.sql` to create the necessary tables

The script will create:
- `reservations` table with all necessary fields
- Indexes for better performance
- Row Level Security policies
- Sample data for testing
- A statistics view for the admin dashboard

### Environment Variables

The Supabase configuration is currently hardcoded in `src/lib/supabase.js`. For production, you should move these to environment variables:

```env
VITE_SUPABASE_URL=https://juhlpbxvodlviusrcnwc.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Usage

### For Customers
1. Visit the "La Carte" page
2. Browse the menu items
3. Click "Réserver" on any dish to start a reservation
4. Fill out the reservation form with your details
5. Submit the reservation

### For Admin
1. Navigate to `/admin` or click "Admin" in the navigation
2. View the dashboard with reservation statistics
3. Use the tabs to filter reservations by status
4. Click on action buttons to:
   - Confirm pending reservations
   - Mark confirmed reservations as completed
   - Cancel reservations
   - View detailed information
   - Delete reservations

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx (updated with admin link)
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   └── ReservationForm.jsx (customer reservation form)
├── context/
│   └── ReservationContext.jsx (reservation state management)
├── lib/
│   └── supabase.js (database connection and helpers)
├── pages/
│   ├── AdminDashboard.jsx (admin interface)
│   ├── Menu.jsx (updated with reservation buttons)
│   └── ... (other existing pages)
└── App.jsx (updated with context provider and admin route)
```

## Database Schema

### Reservations Table

| Field | Type | Description |
|-------|------|-------------|
| id | BIGSERIAL | Primary key |
| customer_name | VARCHAR(255) | Customer's full name |
| customer_email | VARCHAR(255) | Customer's email |
| customer_phone | VARCHAR(20) | Customer's phone (optional) |
| date | DATE | Reservation date |
| time | TIME | Reservation time |
| party_size | INTEGER | Number of people |
| special_requests | TEXT | Special dietary requirements or requests |
| dishes | JSONB | Array of selected dishes with prices |
| total_amount | DECIMAL(10,2) | Total amount for the reservation |
| status | VARCHAR(20) | Status: pending, confirmed, completed, cancelled |
| created_at | TIMESTAMP | When the reservation was created |
| updated_at | TIMESTAMP | When the reservation was last updated |

## API Functions

The `reservationHelpers` object in `src/lib/supabase.js` provides:

- `createReservation(reservation)` - Create a new reservation
- `getAllReservations()` - Get all reservations for admin
- `updateReservationStatus(id, status)` - Update reservation status
- `getReservationsByStatus(status)` - Filter reservations by status
- `deleteReservation(id)` - Delete a reservation

## Styling

The admin dashboard follows the existing design patterns of the restaurant website:
- Uses the same color scheme (#c59d5f for primary actions)
- Responsive design that works on all devices
- Clean, professional interface suitable for restaurant staff
- Status indicators with appropriate colors

## Future Enhancements

- Email notifications to customers when reservation status changes
- SMS notifications for important updates
- Calendar view for reservations
- Table management system
- Inventory management integration
- Reporting and analytics features
- Customer loyalty program integration