import "./Header.css"

export default function Header() {
    return (
        <header className="main-header">
            <div className="header-content">
                <img src="../src/assets/chef.png" alt="Chef Logo" className="header-logo"/>
                <h1 className="header-title">Chef AI</h1>
            </div>
        </header>
    )
}