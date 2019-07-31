import React from "react";

function GameContainer() {
    return (
        <div className="root">
        <div className="container">
            <nav className="nav-bar">
                <ul>
                    <li className="the-name">
                        <a href="<">Clicky Game</a>
                    </li>
                    <li className="to-begin">
                       <a href="<">Click a picture to begin!</a> 
                    </li>
                    <li className="score">
                        <a href="<">"Score:" "0" "| Top Score:" "0"</a>
                    </li>
                </ul>
            </nav>
                <header className="header">
                        <h1 href="<">
                            Clicky Game! 
                        </h1>
                        <h2>
                             Click on an image to earn points, but don't click on any more than once!
                        </h2>
                </header>
                <main className="container">
                    <div role="img" aria-label="click item" class="click-item"></div>
                    <div role="img" aria-label="click item" class="click-item"></div>
                    <div role="img" aria-label="click item" class="click-item"></div>
                    <div role="img" aria-label="click item" class="click-item"></div>
                    <div role="img" aria-label="click item" class="click-item"></div>
                    <div role="img" aria-label="click item" class="click-item"></div>
                </main>
            <footer className="footer">Clicky Game</footer>
        </div>
     </div>
    );
}

export default GameContainer;