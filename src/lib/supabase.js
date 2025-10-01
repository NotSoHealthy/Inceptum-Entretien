import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://juhlpbxvodlviusrcnwc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1aGxwYnh2b2Rsdml1c3JjbndjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMDYyNTcsImV4cCI6MjA3NDg4MjI1N30.-PCwxm2Mhg-869IrNAofYLwW9x6JJF4IF_OFKKrBoC4'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database helpers
export const reservationHelpers = {
  // Create a new reservation
  async createReservation(reservation) {
    const { data, error } = await supabase
      .from('reservations')
      .insert([
        {
          customer_name: reservation.customerName,
          customer_email: reservation.customerEmail,
          customer_phone: reservation.customerPhone,
          date: reservation.date,
          time: reservation.time,
          party_size: reservation.partySize,
          special_requests: reservation.specialRequests,
          dishes: reservation.dishes, // JSON array of ordered dishes
          total_amount: reservation.totalAmount,
          status: 'pending' // pending, confirmed, completed, cancelled
        }
      ])
      .select()

    return { data, error }
  },

  // Get all reservations for admin
  async getAllReservations() {
    const { data, error } = await supabase
      .from('reservations')
      .select('*')
      .order('created_at', { ascending: false })

    return { data, error }
  },

  // Update reservation status
  async updateReservationStatus(reservationId, status) {
    const { data, error } = await supabase
      .from('reservations')
      .update({ status })
      .eq('id', reservationId)
      .select()

    return { data, error }
  },

  // Get reservations by status
  async getReservationsByStatus(status) {
    const { data, error } = await supabase
      .from('reservations')
      .select('*')
      .eq('status', status)
      .order('created_at', { ascending: false })

    return { data, error }
  },

  // Delete reservation
  async deleteReservation(reservationId) {
    const { data, error } = await supabase
      .from('reservations')
      .delete()
      .eq('id', reservationId)

    return { data, error }
  }
}