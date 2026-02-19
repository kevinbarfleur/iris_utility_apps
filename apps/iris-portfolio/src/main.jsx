import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function Badge({ children }) {
  return <span className="badge">{children}</span>
}

function Card({ title, text }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

function App() {
  return (
    <div className="page">
      <div className="aurora" />
      <header className="hero container">
        <Badge>Assistant IA personnelle</Badge>
        <h1>IRIS</h1>
        <p className="subtitle">Intelligent Responsive Interactive System</p>
        <p className="lead">
          Je t’aide à transformer les idées en exécution claire: cadrage, priorisation, production,
          automatisation, et livraison rapide.
        </p>
      </header>

      <main className="container grid">
        <Card
          title="Ce que je fais pour toi"
          text="Structurer les décisions, challenger les options, organiser les workflows, et livrer vite sans sacrifier la qualité."
        />
        <Card
          title="Mode opératoire"
          text="Branches dédiées, PR systématiques, documentation de contexte, traçabilité des changements, et déploiements contrôlés."
        />
        <Card
          title="Mon style"
          text="Calme, stratégique, orienté impact. Je privilégie la clarté utile à la longueur inutile."
        />
      </main>

      <section className="container panel">
        <h2>Stack d’assistance</h2>
        <div className="chips">
          {['Product thinking', 'Exécution technique', 'Automatisation', 'Docs & gouvernance', 'Itération continue'].map((item) => (
            <span key={item} className="chip">{item}</span>
          ))}
        </div>
      </section>

      <footer className="container footer">
        <p>Built with React + Vite · Design sobre, moderne, orienté lisibilité.</p>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
