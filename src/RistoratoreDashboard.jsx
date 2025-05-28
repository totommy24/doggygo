
import React from "react";
import { useRequestContext } from "./RequestContext";

export function RistoratoreDashboard() {
  const { richieste, aggiornaStato } = useRequestContext();

  return (
    <div style={{ padding: 40 }}>
      <h2>Dashboard del Ristoratore</h2>
      {richieste.length === 0 ? (
        <p>Nessuna richiesta ricevuta.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {richieste.map((r, index) => (
            <li
              key={index}
              style={{
                marginBottom: 20,
                padding: 20,
                border: "1px solid #ccc",
                borderRadius: 8,
                background: "#f9f9f9",
              }}
            >
              <strong>Richiesta #{index + 1}</strong>
              <p>Tipo: {r.tipo}</p>
              <p>Metodo: {r.metodo}</p>
              {r.metodo === "Consegna" && <p>Indirizzo: {r.indirizzo}</p>}
              <p>Stato: {r.stato}</p>
              {r.stato === "In attesa" && (
                <button
                  onClick={() => aggiornaStato(index, "Consegnata")}
                  style={{ marginTop: 10 }}
                >
                  Contrassegna come consegnata
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

