import React from 'react'
import {Link} from "react-router-dom";
function SideBar() {
  return (
    <ul
      class="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        class="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div class="sidebar-brand-icon">
          <img
            
            style={{ width: "70px" }}
            src="/images/logo2.jpg"
            alt="Digital House"
          />
        </div>
      </Link>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item active">
        <Link class="nav-link" to="/">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - New Home</span>
        </Link>
      </li>

      <hr class="sidebar-divider" />

      <div class="sidebar-heading"></div>

      <li class="nav-item">
        <Link class="nav-link collapsed" to="/products">
          <i class="fas fa-fw fa-folder"></i>
          <span>Products</span>
        </Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to="/users">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Users</span>
        </Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to="/categories">
          <i class="fas fa-fw fa-table"></i>
          <span>Categories</span>
        </Link>
      </li>

      <hr class="sidebar-divider d-none d-md-block" />
    </ul>
  );
}
export default SideBar