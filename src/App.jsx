import './App.css'
import React from 'react'

/* Array de cidades que deve ser utilizado na atividade */
const cities = [
  {
    id: 1,
    country: "BRA",
    city: "São Paulo",
    population: "12.396.372",
    color: "#A440E2"
  },
  {
    id: 2,
    country: "AR",
    city: "Buenos Aires",
    population: "2.890.151",
    color: "#4b2a9e"
  },
  {
    id: 3,
    country: "BRA",
    city: "Rio de Janeiro",
    population: "6.775.561",
    color: "#470F69"
  },
  {
    id: 4,
    country: "AR",
    city: "La Plata",
    population: "643.133",
    color: "#14aa78"
  },
  {
    id: 5,
    country: "BRA",
    city: "Brasília",
    population: "3.094.325",
    color: "#97198B"
  },
  {
    id: 6,
    country: "BRA",
    city: "Salvador",
    population: "2.900.319",
    color: "#6550ED"
  },

  {
    id: 7,
    country: "BRA",
    city: "Fortaleza",
    population: "2.703.391",
    color: "#2E15D0"
  },
  {
    id: 8,
    country: "AR",
    city: "Córdoba",
    population: "1.317.298",
    color: "#ED3D48"
  },
  {
    id: 9,
    country: "AR",
    city: "Rosário",
    population: "1.193.605",
    color: "#DA0C19"
  },
  {
    id: 10,
    country: "AR",
    city: "Mendoza",
    population: "1.200.000",
    color: "#9105dd"
  }
];

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <div className="distribucion-contenido-card">
          {cities.filter(ciudad => ciudad.country.includes("AR")).map((ciudad) => {
            return (
              <div className="card-espacio" style={{ backgroundColor: (ciudad.color) }}>
                <li key={ciudad.id}>
                  <p>Id: {ciudad.id}</p>
                  <h3 style={{ fontWeight: (ciudad.country == "AR" ? 900 : 100) }}>Ciudad: {ciudad.city}</h3>
                  <p style={{ fontSize: (ciudad.country == "AR" ? 20 : 40) }}>Pais: {ciudad.country == "AR" ? "Argentina" : "Brasil"}</p>
                  <p>Poblacion: {ciudad.population}</p>
                  <p>Color: {ciudad.color}</p>
                </li>
              </div>
            );
          }
          )
          }
        </div>
      </React.Fragment>
    </div>
  )
}
export default App