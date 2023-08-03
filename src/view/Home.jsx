import PolaroidsGrid from "../components/PolaroidsGrid";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import Link from "../components/Link";

function Home() {
  return (
    <main>
      <Logo />
      <PolaroidsGrid />
      <Navbar />
      <Link>Sobre a Banda</Link>
    </main>
  )
}

export default Home;