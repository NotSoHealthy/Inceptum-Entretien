import { useEffect, useState } from "react";
import ReservationForm from "../components/ReservationForm";

const Menu = () => {
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);

  useEffect(() => {
    document.title = "La Carte | Saviora";
  }, []);

  const handleReserveDish = (dish) => {
    setSelectedDishes([dish]);
    setShowReservationForm(true);
  };

  return (
    <div>
      <header
        className="article__header"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/assets/images/2017/02/carte_cover.jpg) center/cover",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <hgroup style={{ textAlign: "center" }}>
          <h2
            className="headline__secondary"
            style={{
              fontFamily: "Herr Von Muellerhoff",
              fontSize: "3em",
              color: "white",
            }}
          >
            Notre
          </h2>
          <h1
            className="headline__primary"
            style={{ fontSize: "4em", fontWeight: "bold", color: "white" }}
          >
            Carte
          </h1>
        </hgroup>
      </header>

      <article className="article--page">
        <section className="article__content" style={{ padding: "80px 20px" }}>
          <div
            className="container"
            style={{ maxWidth: "1000px", margin: "0 auto" }}
          >
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <h3
                style={{
                  fontSize: "2em",
                  marginBottom: "20px",
                  color: "#c59d5f",
                }}
              >
                Nos Spécialités
              </h3>
              <p style={{ fontSize: "1.1em", lineHeight: "1.7" }}>
                Découvrez notre carte qui change au fil des saisons, mettant en
                valeur les meilleurs produits italiens.
              </p>
            </div>

            <div
              className="menu-section"
              style={{ marginBottom: "60px", textAlign: "center" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                  marginBottom: "30px",
                }}
              >
                <img
                  src="/assets/images/2014/05/food1-1024x685.jpg"
                  alt="Entrées"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <h4
                  style={{
                    fontSize: "1.8em",
                    color: "#262526",
                    borderBottom: "2px solid #c59d5f",
                    paddingBottom: "10px",
                    display: "inline-block",
                  }}
                >
                  Entrées
                </h4>
                <img
                  src="/assets/images/2014/05/food2-1024x685.jpg"
                  alt="Entrées"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="menu-items">
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Antipasti du jour / + Jambon de Parme
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      18 € / 22 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Antipasti du jour",
                          price: 18,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Parme (IGP 24 Mois)
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      roquette + mozzarella di bufala
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      16 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Parme (IGP 24 Mois)",
                          price: 16,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Burrata pugliese
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      13 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Burrata pugliese",
                          price: 13,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Bagna Cauda & légumes de saison
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      14 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Bagna Cauda & légumes de saison",
                          price: 14,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Rillettes de sardines
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      12 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Rillettes de sardines",
                          price: 12,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Assiette de Jambon de Parme
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      (IGP 24 Mois)
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      16 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Assiette de Jambon de Parme",
                          price: 16,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Roquette + parmesan
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      7 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Roquette + parmesan",
                          price: 7,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Vitello Tonnato
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      14 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Vitello Tonnato",
                          price: 14,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Salade de poulpe
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      15 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Salade de poulpe",
                          price: 15,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                margin: "40px 0",
                color: "#c59d5f",
                fontSize: "1.5em",
              }}
            >
              ✻
            </div>

            <div
              className="menu-section"
              style={{ marginBottom: "60px", textAlign: "center" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                  marginBottom: "30px",
                }}
              >
                <img
                  src="/assets/images/2014/05/food3-1024x685.jpg"
                  alt="Plats"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <h4
                  style={{
                    fontSize: "1.8em",
                    color: "#262526",
                    borderBottom: "2px solid #c59d5f",
                    paddingBottom: "10px",
                    display: "inline-block",
                  }}
                >
                  Plats
                </h4>
                <img
                  src="/assets/images/2014/05/la-cantinetta-2048x1351.jpg"
                  alt="Plats"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="menu-items">
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Linguine alle vongole
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      (palourdes sauvages de Camargue)
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      22 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Linguine alle vongole",
                          price: 22,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Vesuvio Crème et parmesan 36 mois d'affinage
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      18 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Vesuvio Crème et parmesan",
                          price: 18,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Scaloppine sauce Cantinetta
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      22 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Scaloppine sauce Cantinetta",
                          price: 22,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Carne del giorno
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      22 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Carne del giorno",
                          price: 22,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Rigatoni all' arrabbiata
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      18 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Rigatoni all' arrabbiata",
                          price: 18,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Risotto del giorno
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      20/22/24 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Risotto del giorno",
                          price: 20,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Pasta del giorno
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      20/22/24/26 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Pasta del giorno",
                          price: 20,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Pesce del giorno
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      21 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Pesce del giorno",
                          price: 21,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                margin: "40px 0",
                color: "#c59d5f",
                fontSize: "1.5em",
              }}
            >
              ✻
            </div>

            <div
              className="menu-section"
              style={{ marginBottom: "60px", textAlign: "center" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                  marginBottom: "30px",
                }}
              >
                <img
                  src="/assets/images/2014/05/specialites.jpg"
                  alt="Desserts"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <h4
                  style={{
                    fontSize: "1.8em",
                    color: "#262526",
                    borderBottom: "2px solid #c59d5f",
                    paddingBottom: "10px",
                    display: "inline-block",
                  }}
                >
                  Desserts
                </h4>
                <img
                  src="/assets/images/2014/05/carte.jpg"
                  alt="Desserts"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="menu-items">
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Tiramisu maison
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      9 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({ name: "Tiramisu maison", price: 9 })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Panna cotta au coulis de fruits rouges
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      8 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Panna cotta au coulis de fruits rouges",
                          price: 8,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Torta di cioccolato
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      8 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Torta di cioccolato",
                          price: 8,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Moelleux à la châtaigne des Cévennes
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      8 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Moelleux à la châtaigne des Cévennes",
                          price: 8,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      fontSize: "2em",
                      opacity: "0.1",
                      color: "#c59d5f",
                    }}
                  >
                    🧀
                  </div>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Gorgonzola sélection Luigi Guffanti
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      9 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Gorgonzola sélection Luigi Guffanti",
                          price: 9,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      fontSize: "2em",
                      opacity: "0.1",
                      color: "#c59d5f",
                    }}
                  >
                    🍞
                  </div>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Pain perdu de panettone
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      (sirop d'érable, cannelle, glace amande)
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      9 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Pain perdu de panettone",
                          price: 9,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      fontSize: "2em",
                      opacity: "0.1",
                      color: "#c59d5f",
                    }}
                  >
                    🍋
                  </div>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Sorbet citron limoncello
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      8 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Sorbet citron limoncello",
                          price: 8,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      fontSize: "2em",
                      opacity: "0.1",
                      color: "#c59d5f",
                    }}
                  >
                    🍓
                  </div>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Vacherin fraise ou noisette
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      (glace, meringue, chantilly)
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      8 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Vacherin fraise ou noisette",
                          price: 8,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      fontSize: "2em",
                      opacity: "0.1",
                      color: "#c59d5f",
                    }}
                  >
                    🍨
                  </div>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Le piémontais
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      (glace noisette, sauce chocolat, amandes grillées,
                      chantilly)
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      8 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({ name: "Le piémontais", price: 8 })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                margin: "40px 0",
                color: "#c59d5f",
                fontSize: "1.5em",
              }}
            >
              ✻
            </div>

            <div
              className="menu-section"
              style={{ marginBottom: "60px", textAlign: "center" }}
            >
              <h4
                style={{
                  fontSize: "1.8em",
                  marginBottom: "30px",
                  color: "#262526",
                  borderBottom: "2px solid #c59d5f",
                  paddingBottom: "10px",
                  display: "inline-block",
                }}
              >
                Vins & Bière
              </h4>
              <div className="menu-items">
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      fontSize: "2em",
                      opacity: "0.1",
                      color: "#c59d5f",
                    }}
                  >
                    🍺
                  </div>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Bière Peroni
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      33cl
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      4 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({ name: "Bière Peroni", price: 4 })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      fontSize: "2em",
                      opacity: "0.1",
                      color: "#c59d5f",
                    }}
                  >
                    🥂
                  </div>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Vin blanc Orvieto
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      Classico 2018
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      24 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Vin blanc Orvieto",
                          price: 24,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      fontSize: "2em",
                      opacity: "0.1",
                      color: "#c59d5f",
                    }}
                  >
                    🌹
                  </div>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Vin rosé Vallon des Glauges
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      Coteaux d'Aix en Provence 2019
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      24 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Vin rosé Vallon des Glauges",
                          price: 24,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto 20px",
                    padding: "15px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      fontSize: "2em",
                      opacity: "0.1",
                      color: "#c59d5f",
                    }}
                  >
                    🍷
                  </div>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Vin rouge Lucarelli
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      Primitivo 2018
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c59d5f",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      26 €
                    </span>
                    <button
                      onClick={() =>
                        handleReserveDish({
                          name: "Vin rouge Lucarelli",
                          price: 26,
                        })
                      }
                      style={{
                        background: "#c59d5f",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        fontWeight: "600",
                      }}
                    >
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                margin: "40px 0",
                color: "#c59d5f",
                fontSize: "1.5em",
              }}
            >
              ✻
            </div>

            <div className="menu-section" style={{ textAlign: "center" }}>
              <h4
                style={{
                  fontSize: "1.8em",
                  marginBottom: "30px",
                  color: "#262526",
                  borderBottom: "2px solid #c59d5f",
                  paddingBottom: "10px",
                  display: "inline-block",
                }}
              >
                Softs
              </h4>
              <div className="menu-items">
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    maxWidth: "600px",
                    margin: "0 auto 20px",
                  }}
                >
                  <div style={{ textAlign: "left" }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Coca cola
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      33cl
                    </p>
                  </div>
                  <span
                    style={{
                      color: "#c59d5f",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      marginLeft: "20px",
                    }}
                  >
                    2,50 €
                  </span>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    maxWidth: "600px",
                    margin: "0 auto 20px",
                  }}
                >
                  <div style={{ textAlign: "left" }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Ice Tea
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      33cl
                    </p>
                  </div>
                  <span
                    style={{
                      color: "#c59d5f",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      marginLeft: "20px",
                    }}
                  >
                    2,50 €
                  </span>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    maxWidth: "600px",
                    margin: "0 auto 20px",
                  }}
                >
                  <div style={{ textAlign: "left" }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Perrier
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      33cl
                    </p>
                  </div>
                  <span
                    style={{
                      color: "#c59d5f",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      marginLeft: "20px",
                    }}
                  >
                    2,5 €
                  </span>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    maxWidth: "600px",
                    margin: "0 auto 20px",
                  }}
                >
                  <div style={{ textAlign: "left" }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Coca cola zero
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      33cl
                    </p>
                  </div>
                  <span
                    style={{
                      color: "#c59d5f",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      marginLeft: "20px",
                    }}
                  >
                    2,50 €
                  </span>
                </div>
                <div
                  className="menu-item"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    maxWidth: "600px",
                    margin: "0 auto 20px",
                  }}
                >
                  <div style={{ textAlign: "left" }}>
                    <h5 style={{ fontSize: "1.1em", marginBottom: "3px" }}>
                      Orangina
                    </h5>
                    <p
                      style={{ color: "#666", fontSize: "0.9em", margin: "0" }}
                    >
                      33cl
                    </p>
                  </div>
                  <span
                    style={{
                      color: "#c59d5f",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      marginLeft: "20px",
                    }}
                  >
                    2,50 €
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                marginTop: "60px",
                padding: "30px",
                background: "#f9f9f9",
                borderRadius: "8px",
              }}
            >
              <p style={{ fontStyle: "italic", color: "#666" }}>
                Notre carte évolue au fil des saisons pour vous proposer des
                produits frais et de qualité.
                <br />
                N'hésitez pas à demander notre carte complète et nos suggestions
                du jour.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* Reservation Form Modal */}
      {showReservationForm && (
        <ReservationForm
          selectedDishes={selectedDishes}
          onClose={() => {
            setShowReservationForm(false);
            setSelectedDishes([]);
          }}
        />
      )}
    </div>
  );
};

export default Menu;
