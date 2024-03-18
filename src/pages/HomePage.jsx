import { motion } from "framer-motion"
import GetRecommended from "../components/GetRecommended"
import Header from "../components/Header"
import { Fragment } from "react"


const HomePage = () => {
    const bodyVariants = {
        hidden: {opacity: 0, y:-100},
        visible: {opacity:1, y:0, transition:{delay: 0.5, duration:2} }
      }
  return (
    <Fragment>
    <motion.div initial="hidden"
      animate="visible" variants={bodyVariants}>
         <Header/>
      <GetRecommended/>
    </motion.div>
    </Fragment>
  )
}

export default HomePage