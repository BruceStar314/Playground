
const NavBar = () => {
        return (
            <div>
                <div className="flex items-center h-[5vh] w-full gap-2"> 
                <img src="Images/Logo.png" alt="Logo" />
                <input type="text" placeholder="Search Experience" className="text-[hsl(0,0%,0%)] border border-[hsl(0,10%,0%)] text-align-center"/>
                </div>
                <hr />
            </div>
        )
}

export default NavBar
