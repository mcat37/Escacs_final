<header>
    <div id="mySidenav" class="sidenav">
    <a class="closebtn" onclick="closeNav()">&times;</a>
        <h1>Chess Game</h1>
        <nav id="menu">
                <a href="playS.php"><button id="classic">Classic</button></a>
                <a href="blitz.php"><button id="blitz">Blitz</button></a>
                <a href="logout.php"><button id="logout">Tanca sesió</button></a>
                <!-- <audio src="#" autoplay loop muted></audio>
                <button id="headset" class="muted"></button> -->
        </nav>  
        <div id="theme">
            <div class="toggle-switch">
                <label class="switch-label">
                    <input type="checkbox" id="checkbox" class="checkbox">
                    <span class="slider"></span>
                </label>
            </div> 
        </div> 
        <!-- test para cambiar apariencia del tablero -->
        <!-- <div id="chess-theme">
            <div class="chessboard-theme">
                <label class="switch-radio">
                    <input type="radio" id="radio" class="radio">
                    <span class="standar-chess">standard</span>
                    <input type="radio" id="radio" class="radio">
                    <span class="blue-chess">blue</span>
                    <input type="radio" id="radio" class="radio">
                    <span class="mono-chess">monocromatic</span>
                    <input type="radio" id="radio" class="radio">
                    <span class="wood-chess">wood</span>
                </label>
            </div> 
        </div> -->
    </div>
    <div onclick="openNav()"><button type="button">MENU</div></button>
</header>