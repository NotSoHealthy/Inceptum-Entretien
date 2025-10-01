import React, { useState } from "react";
import { useReservations } from "../context/ReservationContext";

const ReservationForm = ({ selectedDishes = [], onClose }) => {
  const { createReservation, loading } = useReservations();
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    date: "",
    time: "",
    partySize: 2,
    specialRequests: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTotal = () => {
    return selectedDishes.reduce((total, dish) => total + dish.price, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.customerName ||
      !formData.customerEmail ||
      !formData.date ||
      !formData.time
    ) {
      setError("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const reservationData = {
      ...formData,
      dishes: selectedDishes,
      totalAmount: calculateTotal(),
    };

    const result = await createReservation(reservationData);

    if (result.success) {
      setSuccess(true);
      setTimeout(() => {
        if (onClose) onClose();
      }, 2000);
    } else {
      setError(result.error || "Erreur lors de la création de la réservation");
    }
  };

  if (success) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "10px",
            textAlign: "center",
            maxWidth: "400px",
            margin: "20px",
          }}
        >
          <div
            style={{ color: "#c59d5f", fontSize: "3em", marginBottom: "20px" }}
          >
            ✓
          </div>
          <h3 style={{ color: "#262526", marginBottom: "15px" }}>
            Réservation Confirmée!
          </h3>
          <p style={{ color: "#666" }}>
            Votre réservation a été envoyée avec succès. Nous vous contacterons
            bientôt pour la confirmer.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        overflow: "auto",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          maxWidth: "600px",
          width: "90%",
          margin: "20px",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <h3 style={{ color: "#262526", margin: 0 }}>Réserver une Table</h3>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#666",
            }}
          >
            ×
          </button>
        </div>

        {selectedDishes.length > 0 && (
          <div
            style={{
              marginBottom: "30px",
              padding: "20px",
              background: "#f9f9f9",
              borderRadius: "8px",
            }}
          >
            <h4 style={{ color: "#c59d5f", marginBottom: "15px" }}>
              Plats Sélectionnés
            </h4>
            {selectedDishes.map((dish, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <span>{dish.name}</span>
                <span style={{ color: "#c59d5f", fontWeight: "600" }}>
                  {dish.price} €
                </span>
              </div>
            ))}
            <div
              style={{
                borderTop: "1px solid #ddd",
                paddingTop: "10px",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                }}
              >
                <span>Total:</span>
                <span style={{ color: "#c59d5f" }}>{calculateTotal()} €</span>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid", gap: "20px" }}>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "600",
                }}
              >
                Nom complet *
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "600",
                }}
              >
                Email *
              </label>
              <input
                type="email"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "600",
                }}
              >
                Téléphone
              </label>
              <input
                type="tel"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "600",
                  }}
                >
                  Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "16px",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "600",
                  }}
                >
                  Heure *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "16px",
                  }}
                >
                  <option value="">Choisir l'heure</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "600",
                }}
              >
                Nombre de personnes
              </label>
              <select
                name="partySize"
                value={formData.partySize}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} personne{num > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "600",
                }}
              >
                Demandes spéciales
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows="3"
                placeholder="Allergies, préférences de table, etc."
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                  resize: "vertical",
                }}
              />
            </div>
          </div>

          {error && (
            <div
              style={{
                color: "#d32f2f",
                background: "#ffebee",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "20px",
              }}
            >
              {error}
            </div>
          )}

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "15px",
              justifyContent: "flex-end",
            }}
          >
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: "12px 24px",
                border: "1px solid #ddd",
                background: "white",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "12px 24px",
                background: loading ? "#ccc" : "#c59d5f",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: loading ? "not-allowed" : "pointer",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              {loading ? "Envoi..." : "Confirmer la Réservation"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
