import React from "react"
import "./NavBar.css"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";


function NavBar () {
    return (
        <nav class="navbar navbar-expand-lg bg-dark bg-gradient">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><h2>Clover</h2><h6><i>(Clever Clothes)</i></h6></a>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/producto">Producto</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Hombre</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Mujer</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Catalogo</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )


}
export default NavBar;