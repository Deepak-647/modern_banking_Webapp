import styles from "./style"
import { Billing, Business,CardDeal,Clients,Hero,
  CTA, Footer ,Navbar,Stats,Testimonials } from "./components"


const App = () =>  
    (
    <div className='bg-primary w-full overflow-hidden'>
<div className={`${styles.padding} ${styles.flexCenter}`}>
<div className={`${styles.boxWidth}`}>
  <Navbar/>
</div>
</div>

<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
<div className={`${styles.boxWidth} text-white`}>
  <Hero/>
<Stats/>
 
<Business/>
<Billing/>
<CardDeal/>
<Testimonials/>
<Clients/>
<CTA/>
<Footer/>
</div>
</div>
    </div>
  )
 

export default App