import FindMeSection from './components/FindMeSection'
import Navigation from './components/Navigation'
import PersonalSection from './components/PersonalSection'
import ProfessionalSection from './components/ProfessionalSection'

function App() {
    return (
        <>
            <Navigation />
            <header className="bg-[url('/hero-svg.svg')] bg-cover bg-top flex flex-col items-center justify-center h-80 md:h-100">
                <div className="bg-[#FEF7E2] border-4 border-[#2D413F] rounded-2xl p-2 md:p-8 mb-4 flex flex-col text-center shadow-lg">
                    <h1 className="text-5xl md:text-7xl font-display">Noah Boothroyd</h1>
                    <h3 className="text-xl md:text-2xl">Fullstack Software Engineer</h3>
                </div>
                <summary className="p-1 md:p-4 md:max-w-200 rounded-lg text-center bg-[#FEF7E2] border-4 border-[#E0DC9A] shadow-md">I'm a full stack engineer with more experience and stronger opinions on the frontend side of things. I've developed complex user interfaces for enterprise software, delivering features end-to-end that delight end-users.</summary>
            </header>
            <ProfessionalSection />
            <PersonalSection />
            <FindMeSection />
            <small className="flex justify-center py-4">
                <a href="https://www.magnific.com/free-vector/flat-design-enchanted-forest-illustration_24712176.htm" className="text-[#728E76] underline font-semibold hover:text-[#728E76]/75 active:text-[#728E76]/75">Hero SVG from Magnific.com</a>
            </small>
        </>
    )
}

export default App
