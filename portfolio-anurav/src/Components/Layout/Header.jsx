import "./Header.scss"

const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="name-header">
                    Anurav.dev
                </div>
                <div className="sections-header">
                    <div className="section">
                        <a>
                            Home
                        </a>
                    </div>
                    <div className="section">
                        <a>
                            About
                        </a>
                    </div>
                    <div className="section">
                        <a>
                            Projects
                        </a>
                    </div>
                    <div className="section">
                        <a>
                            Contract
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header;