import React, { createContext, useContext, useState, useEffect } from 'react';
import { reservationHelpers } from '../lib/supabase';

const ReservationContext = createContext();

export const useReservations = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservations must be used within a ReservationProvider');
  }
  return context;
};

export const ReservationProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all reservations
  const fetchReservations = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fetchError } = await reservationHelpers.getAllReservations();
      if (fetchError) throw fetchError;
      setReservations(data || []);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching reservations:', err);
    } finally {
      setLoading(false);
    }
  };

  // Create new reservation
  const createReservation = async (reservationData) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: createError } = await reservationHelpers.createReservation(reservationData);
      if (createError) throw createError;
      
      // Update local state
      setReservations(prev => [data[0], ...prev]);
      return { success: true, data: data[0] };
    } catch (err) {
      setError(err.message);
      console.error('Error creating reservation:', err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Update reservation status
  const updateReservationStatus = async (reservationId, status) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: updateError } = await reservationHelpers.updateReservationStatus(reservationId, status);
      if (updateError) throw updateError;
      
      // Update local state
      setReservations(prev => 
        prev.map(reservation => 
          reservation.id === reservationId 
            ? { ...reservation, status } 
            : reservation
        )
      );
      return { success: true, data: data[0] };
    } catch (err) {
      setError(err.message);
      console.error('Error updating reservation:', err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Delete reservation
  const deleteReservation = async (reservationId) => {
    setLoading(true);
    setError(null);
    try {
      const { error: deleteError } = await reservationHelpers.deleteReservation(reservationId);
      if (deleteError) throw deleteError;
      
      // Update local state
      setReservations(prev => prev.filter(reservation => reservation.id !== reservationId));
      return { success: true };
    } catch (err) {
      setError(err.message);
      console.error('Error deleting reservation:', err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Get reservations by status
  const getReservationsByStatus = (status) => {
    return reservations.filter(reservation => reservation.status === status);
  };

  // Statistics
  const getStats = () => {
    const total = reservations.length;
    const pending = reservations.filter(r => r.status === 'pending').length;
    const confirmed = reservations.filter(r => r.status === 'confirmed').length;
    const completed = reservations.filter(r => r.status === 'completed').length;
    const cancelled = reservations.filter(r => r.status === 'cancelled').length;

    return { total, pending, confirmed, completed, cancelled };
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const value = {
    reservations,
    loading,
    error,
    fetchReservations,
    createReservation,
    updateReservationStatus,
    deleteReservation,
    getReservationsByStatus,
    getStats
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};