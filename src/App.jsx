/* Ampliare l'esercizio precedente aggiungendo, nel form, i campi per immagine, contenuto, categoria (select), tags (lista di checkbox) e uno stato per pubblicare o meno l'articolo. Utilizzare un unico oggetto per gestire tutti i dati del form. */
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <AppHeader />
        <AppMain />
      </div>
    </>
  )
}

export default App
