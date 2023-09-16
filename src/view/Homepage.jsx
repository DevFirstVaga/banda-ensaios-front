import Home from "../components/Home"
import Links from "../components/Links";
import { motion } from "framer-motion";

function Homepage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Home/>
      <Links />
    </motion.div>
  )
}

export default Homepage;