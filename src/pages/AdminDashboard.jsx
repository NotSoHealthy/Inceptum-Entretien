import React, { useState, useEffect } from 'react';
import { useReservations } from '../context/ReservationContext';

const AdminDashboard = () => {
  const { 
    reservations, 
    loading, 
    error, 
    updateReservationStatus, 
    deleteReservation, 
    getStats,
    fetchReservations 
  } = useReservations();
  
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedReservation, setSelectedReservation] = useState(null);

  useEffect(() => {
    document.title = 'Admin Dashboard | Saviora';
    // Refresh data every 30 seconds
    const interval = setInterval(() => {
      fetchReservations();
    }, 30000);

    return () => clearInterval(interval);
  }, [fetchReservations]);

  const stats = getStats();

  const handleStatusUpdate = async (reservationId, newStatus) => {
    const result = await updateReservationStatus(reservationId, newStatus);
    if (result.success) {
      // Show success message or handle success
      console.log('Status updated successfully');
    }
  };

  const handleDeleteReservation = async (reservationId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette réservation ?')) {
      const result = await deleteReservation(reservationId);
      if (result.success) {
        console.log('Reservation deleted successfully');
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#ffa726';
      case 'confirmed': return '#66bb6a';
      case 'completed': return '#42a5f5';
      case 'cancelled': return '#ef5350';
      default: return '#757575';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'En attente';
      case 'confirmed': return 'Confirmée';
      case 'completed': return 'Terminée';
      case 'cancelled': return 'Annulée';
      default: return status;
    }
  };

  const filteredReservations = reservations.filter(reservation => 
    activeTab === 'all' ? true : reservation.status === activeTab
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('fr-FR');
  };

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.2em', color: '#666' }}>Chargement...</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #c59d5f 0%, #a67c5a 100%)',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3em', marginBottom: '10px', fontFamily: 'Herr Von Muellerhoff' }}>
          Dashboard Admin
        </h1>
        <p style={{ fontSize: '1.1em', opacity: 0.9 }}>
          Gestion des réservations - Restaurant Saviora
        </p>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {error && (
          <div style={{
            background: '#ffebee',
            color: '#d32f2f',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            border: '1px solid #ffcdd2'
          }}>
            Erreur: {error}
          </div>
        )}

        {/* Statistics Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '2.5em', color: '#c59d5f', marginBottom: '10px' }}>
              {stats.total}
            </div>
            <div style={{ fontSize: '1.1em', color: '#666' }}>Total Réservations</div>
          </div>

          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '2.5em', color: '#ffa726', marginBottom: '10px' }}>
              {stats.pending}
            </div>
            <div style={{ fontSize: '1.1em', color: '#666' }}>En attente</div>
          </div>

          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '2.5em', color: '#66bb6a', marginBottom: '10px' }}>
              {stats.confirmed}
            </div>
            <div style={{ fontSize: '1.1em', color: '#666' }}>Confirmées</div>
          </div>

          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '2.5em', color: '#42a5f5', marginBottom: '10px' }}>
              {stats.completed}
            </div>
            <div style={{ fontSize: '1.1em', color: '#666' }}>Terminées</div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{
          background: 'white',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            borderBottom: '1px solid #eee',
            background: '#fafafa'
          }}>
            {[
              { key: 'pending', label: 'En attente', count: stats.pending },
              { key: 'confirmed', label: 'Confirmées', count: stats.confirmed },
              { key: 'completed', label: 'Terminées', count: stats.completed },
              { key: 'cancelled', label: 'Annulées', count: stats.cancelled },
              { key: 'all', label: 'Toutes', count: stats.total }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  flex: 1,
                  padding: '15px 10px',
                  border: 'none',
                  background: activeTab === tab.key ? '#c59d5f' : 'transparent',
                  color: activeTab === tab.key ? 'white' : '#666',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: activeTab === tab.key ? '600' : 'normal',
                  transition: 'all 0.3s ease'
                }}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Reservations List */}
          <div style={{ padding: '20px' }}>
            {filteredReservations.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '40px',
                color: '#666'
              }}>
                <div style={{ fontSize: '3em', marginBottom: '20px', opacity: 0.3 }}>📅</div>
                <p>Aucune réservation {activeTab !== 'all' ? `${getStatusText(activeTab).toLowerCase()}` : ''}</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '15px' }}>
                {filteredReservations.map(reservation => (
                  <div
                    key={reservation.id}
                    style={{
                      border: '1px solid #eee',
                      borderRadius: '8px',
                      padding: '20px',
                      background: '#fafafa',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: '20px',
                      alignItems: 'start'
                    }}>
                      <div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px',
                          marginBottom: '15px'
                        }}>
                          <div>
                            <h3 style={{ margin: '0 0 5px 0', color: '#262526' }}>
                              {reservation.customer_name}
                            </h3>
                            <div style={{ color: '#666', fontSize: '0.9em' }}>
                              {reservation.customer_email}
                              {reservation.customer_phone && ` • ${reservation.customer_phone}`}
                            </div>
                          </div>
                          <div
                            style={{
                              background: getStatusColor(reservation.status),
                              color: 'white',
                              padding: '5px 12px',
                              borderRadius: '20px',
                              fontSize: '0.8em',
                              fontWeight: '600'
                            }}
                          >
                            {getStatusText(reservation.status)}
                          </div>
                        </div>

                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                          gap: '15px',
                          marginBottom: '15px'
                        }}>
                          <div>
                            <strong>Date & Heure:</strong><br />
                            {formatDate(reservation.date)} à {reservation.time}
                          </div>
                          <div>
                            <strong>Personnes:</strong> {reservation.party_size}
                          </div>
                          <div>
                            <strong>Montant:</strong> {reservation.total_amount} €
                          </div>
                          <div>
                            <strong>Créée le:</strong><br />
                            {formatDateTime(reservation.created_at)}
                          </div>
                        </div>

                        {reservation.dishes && reservation.dishes.length > 0 && (
                          <div style={{ marginBottom: '15px' }}>
                            <strong>Plats commandés:</strong>
                            <div style={{ marginTop: '8px' }}>
                              {reservation.dishes.map((dish, index) => (
                                <span
                                  key={index}
                                  style={{
                                    display: 'inline-block',
                                    background: '#e3f2fd',
                                    color: '#1976d2',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '0.8em',
                                    margin: '2px 5px 2px 0'
                                  }}
                                >
                                  {dish.name} ({dish.price}€)
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {reservation.special_requests && (
                          <div style={{ marginBottom: '15px' }}>
                            <strong>Demandes spéciales:</strong><br />
                            <em style={{ color: '#666' }}>{reservation.special_requests}</em>
                          </div>
                        )}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {reservation.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleStatusUpdate(reservation.id, 'confirmed')}
                              style={{
                                background: '#66bb6a',
                                color: 'white',
                                border: 'none',
                                padding: '8px 16px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '0.9em'
                              }}
                            >
                              Confirmer
                            </button>
                            <button
                              onClick={() => handleStatusUpdate(reservation.id, 'cancelled')}
                              style={{
                                background: '#ef5350',
                                color: 'white',
                                border: 'none',
                                padding: '8px 16px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '0.9em'
                              }}
                            >
                              Annuler
                            </button>
                          </>
                        )}
                        
                        {reservation.status === 'confirmed' && (
                          <button
                            onClick={() => handleStatusUpdate(reservation.id, 'completed')}
                            style={{
                              background: '#42a5f5',
                              color: 'white',
                              border: 'none',
                              padding: '8px 16px',
                              borderRadius: '5px',
                              cursor: 'pointer',
                              fontSize: '0.9em'
                            }}
                          >
                            Marquer terminé
                          </button>
                        )}

                        <button
                          onClick={() => setSelectedReservation(reservation)}
                          style={{
                            background: 'transparent',
                            color: '#666',
                            border: '1px solid #ddd',
                            padding: '8px 16px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '0.9em'
                          }}
                        >
                          Détails
                        </button>

                        <button
                          onClick={() => handleDeleteReservation(reservation.id)}
                          style={{
                            background: 'transparent',
                            color: '#ef5350',
                            border: '1px solid #ef5350',
                            padding: '8px 16px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '0.9em'
                          }}
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reservation Details Modal */}
      {selectedReservation && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '10px',
            maxWidth: '600px',
            width: '90%',
            maxHeight: '80vh',
            overflow: 'auto'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <h3>Détails de la réservation</h3>
              <button
                onClick={() => setSelectedReservation(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer'
                }}
              >
                ×
              </button>
            </div>

            <div style={{ display: 'grid', gap: '15px' }}>
              <div><strong>ID:</strong> {selectedReservation.id}</div>
              <div><strong>Nom:</strong> {selectedReservation.customer_name}</div>
              <div><strong>Email:</strong> {selectedReservation.customer_email}</div>
              <div><strong>Téléphone:</strong> {selectedReservation.customer_phone || 'Non renseigné'}</div>
              <div><strong>Date:</strong> {formatDate(selectedReservation.date)}</div>
              <div><strong>Heure:</strong> {selectedReservation.time}</div>
              <div><strong>Nombre de personnes:</strong> {selectedReservation.party_size}</div>
              <div><strong>Montant total:</strong> {selectedReservation.total_amount} €</div>
              <div><strong>Statut:</strong> 
                <span style={{
                  color: getStatusColor(selectedReservation.status),
                  fontWeight: '600',
                  marginLeft: '10px'
                }}>
                  {getStatusText(selectedReservation.status)}
                </span>
              </div>
              <div><strong>Créée le:</strong> {formatDateTime(selectedReservation.created_at)}</div>
              
              {selectedReservation.dishes && selectedReservation.dishes.length > 0 && (
                <div>
                  <strong>Plats commandés:</strong>
                  <ul style={{ marginTop: '10px' }}>
                    {selectedReservation.dishes.map((dish, index) => (
                      <li key={index} style={{ marginBottom: '5px' }}>
                        {dish.name} - {dish.price} €
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedReservation.special_requests && (
                <div>
                  <strong>Demandes spéciales:</strong>
                  <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#666' }}>
                    {selectedReservation.special_requests}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;