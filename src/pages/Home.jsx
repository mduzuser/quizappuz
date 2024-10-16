//components
import {Menu} from '../components/index'
function Home() {
  return (
    <section className='home-container container'>
      <div className='home-content'>
        <h1 className="home-title">
          <span>Salom, bilag'on!</span>
          <span>Siz uchun savolar to'plami...</span>
        </h1>
        <p>Testlarni yechishga tayyormisiz!</p>
      </div>

      <div className='home-nav-list'>
        <Menu/>
      </div>
    </section>
  )
}

export default Home