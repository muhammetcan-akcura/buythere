import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Buyers from './components/Buyers/index';
import Provide from './components/Provide/index';
import Services from './components/pricing/index';
import Why from './components/Why/index';
import Network from './components/Network/index';
import Clientsay from './components/Clientsay/index';
import Newsletter from './components/Newsletter/Newsletter';
import FAQ from './components/faq/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Provide />
      <Services />
      <Why />
      <Network />
      <Clientsay />
      <Buyers />
      <FAQ />
      <Newsletter />
    </main>
  )
}
