import NavBar from "./react/NavBar.jsx";
import ButtonArea from "./react/ButtonArea.jsx";
import Hero from "./react/Hero.jsx";
import Footer from "./react/Footer.jsx";
const App = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="h-[80vh] w-[22vw] bg-[hsl(0,0%,100%)]">
                <NavBar/>
                <ButtonArea/>
                <Hero/>
                <Footer/>
            </div>
        </div>
    )
}

export default App
