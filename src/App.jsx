import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import ProblemSection from './components/sections/ProblemSection.jsx'
import SolutionSection from './components/sections/SolutionSection.jsx'
import ExperienceSection from './components/sections/ExperienceSection.jsx'
import PillarsSection from './components/sections/PillarsSection.jsx'
import DifferentSection from './components/sections/DifferentSection.jsx'
import IncludedSection from './components/sections/IncludedSection.jsx'
import EnvironmentSection from './components/sections/EnvironmentSection.jsx'
import OutcomesSection from './components/sections/OutcomesSection.jsx'
import FacilitatorsSection from './components/sections/FacilitatorsSection.jsx'
import InvestmentSection from './components/sections/InvestmentSection.jsx'
import ApplySection from './components/sections/ApplySection.jsx'

export default function App() {
  return (
    <div className="bg-bg text-tx font-body antialiased">
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ExperienceSection />
        <PillarsSection />
        <DifferentSection />
        <IncludedSection />
        <EnvironmentSection />
        <OutcomesSection />
        <FacilitatorsSection />
        <InvestmentSection />
        <ApplySection />
      </main>
      <Footer />
    </div>
  )
}
