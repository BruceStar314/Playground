import Title from "./react/Title.jsx";
import Footer from "./react/Footer.jsx";
import Container from "./react/Container.jsx";
import Profile from "./react/Profile.jsx";

const App = () => {
    return (
        <div className="flex flex-col h-screen w-screen">
            <Profile/>
            <Title/>
            <Container/>
            <Footer/>
        </div>
    )
}

export default App
