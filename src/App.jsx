import './App.css'
import data from './assets/data_vitor'
import Card from './components/Card/Card'
import Header from './components/Header/Header'

function App() {
  const cards = data.map((item) => {
    return (
      <>
        <Card
          key={item.title}
          {...item}
        />
        <hr />
      </>
    )
  })
  return (
    <div className='main-page-element'>
      <Header />
      {cards}
    </div>
  )
}

export default App
