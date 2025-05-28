import React, { useState } from "react";

export default function DoggyGoRequest() {
  const [tipo, setTipo] = useState("");
  const [metodo, setMetodo] = useState("");
  const [indirizzo, setIndirizzo] = useState("");
  const [inviato, setInviato] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Richiesta inviata:", { tipo, metodo, indirizzo });
    setInviato(true);
  };

  return (
    <div style={{ padding: 40, maxWidth: 500, margin: "0 auto" }}>
      <h2>Richiedi la Doggy Bag</h2>
      {inviato ? (
        <p style={{ marginTop: 20, fontWeight: "bold", color: "green" }}>
          ✅ La tua richiesta è stata inviata in modo discreto al ristorante.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Cosa vuoi portare via?
            <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
              <option value="">Seleziona</option>
              <option value="Cibo">Cibo</option>
              <option value="Bevande">Bevande</option>
              <option value="Entrambi">Entrambi</option>
            </select>
          </label>
          <br /><br />
          <label>
            Come vuoi riceverla?
            <select value={metodo} onChange={(e) => setMetodo(e.target.value)} required>
              <option value="">Seleziona</option>
              <option value="Ritiro">Ritiro alla cassa</option>
              <option value="Consegna">Invio a casa</option>
            </select>
          </label>
          <br /><br />
          {metodo === "Consegna" && (
            <>
              <label>
                Indirizzo per la consegna:
                <input
                  type="text"
                  value={indirizzo}
                  onChange={(e) => setIndirizzo(e.target.value)}
                  required
                />
              </label>
              <br /><br />
            </>
          )}
          <button type="submit" style={{ padding: "8px 20px" }}>
            Invia richiesta in modo discreto
          </button>
        </form>
      )}
    </div>
  );
}
