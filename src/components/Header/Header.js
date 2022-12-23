import "./header.css"

import { NavLink, Link, useParams } from "react-router-dom";
import { useState } from "react";
import { lang } from "../../lang/lang"

const Header = ({setTheme, setTil, til}) => {


    return <header >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
     <h1>
     <Link className="logo text-decoration-none" to="/">{lang[til].hdr.logo}</Link>
      </h1> 
      <div className="select-wrap d-flex">

<select className="form-select select" aria-label="Default select example" onChange={(e) => setTheme(e.target.value)}>
  <option value="light" selected>{lang[til].hdr.light}</option>
  <option value="dark">{lang[til].hdr.dark}</option>
</select>

     <select defaultValue={til} className="form-select select  me-5" aria-label="Default select example" onChange={(evt) => setTil(evt.target.value)}>
  <option value="en">En</option>
  <option value="uz">Uz</option>
  <option value="ru">Ru</option>
</select>

      </div>
      </div>
        </div>
      </header>
  }

  export default Header;