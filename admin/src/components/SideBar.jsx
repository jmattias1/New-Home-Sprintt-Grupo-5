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
            class="w-100"
            src="assets/images/logo-DH.png"
            alt="Digital House"
          />
        </div>
      </Link>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item active">
        <Link class="nav-link" to="/">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - DH movies</span>
        </Link>
      </li>

      <hr class="sidebar-divider" />

      <div class="sidebar-heading">Actions</div>

      <li class="nav-item">
        <Link class="nav-link collapsed" to="/">
          <i class="fas fa-fw fa-folder"></i>
          <span>Products</span>
        </Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to="/">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Users</span>
        </Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to="/">
          <i class="fas fa-fw fa-table"></i>
          <span>Categories</span>
        </Link>
      </li>

      <hr class="sidebar-divider d-none d-md-block" />
    </ul>
  );
}
export default SideBar