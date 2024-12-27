<template>
  <header class="bg-dark container-fluid text-center fixed-top">
    <div class="logo-container">
      <!-- Logo obrázok -->
      <img :src="'logo.png'" alt="Logo" style="height: 70px; width: auto;">
      <div class="container">
        <!-- Navigačný panel -->
        <nav class="navbar navbar-expand-lg navbar-dark">
          <!-- Tlačidlo pre skrytie a rozvinutie menu -->
          <button
              class="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Navigačné odkazy -->
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item mx-2">
                <router-link v-if="active === 'domov'" class="nav-link" style="color: rgb(226, 226, 226); font-size: 30px; background-color: rgba(55, 141, 112, 0.897); border-radius: 10px;" to="/">Domov</router-link>
                <router-link v-if="active != 'domov'" class="nav-link" style="color: rgb(226, 226, 226); font-size: 30px" to="/">Domov</router-link>
              </li>
              <li class="nav-item mx-2">
                <router-link v-if="active === 'destinacie'" class="nav-link" style="color: rgb(226, 226, 226); font-size: 30px; background-color: rgba(55, 141, 112, 0.897); border-radius: 10px;" to="/destinacie">Destinácie</router-link>
                <router-link v-if="active != 'destinacie'" class="nav-link" style="color: rgb(226, 226, 226); font-size: 30px;" to="/destinacie">Destinácie</router-link>
              </li>
              <li class="nav-item mx-2">
                <router-link v-if="active === 'sluzby'" class="nav-link" style="color: rgb(226, 226, 226); font-size: 30px; background-color: rgba(55, 141, 112, 0.897); border-radius: 10px;" to="/sluzby">Služby</router-link>
                <router-link v-if="active != 'sluzby'" class="nav-link" style="color: rgb(226, 226, 226); font-size: 30px;" to="/sluzby">Služby</router-link>
              </li>
              <li class="nav-item mx-2">
                <router-link v-if="active === 'kontakt'" class="nav-link" style="color: rgb(226, 226, 226); font-size: 30px; background-color: rgba(55, 141, 112, 0.897); border-radius: 10px;" to="/kontakt">Kontakt</router-link>
                <router-link v-if="active != 'kontakt'" class="nav-link" style="color: rgb(226, 226, 226); font-size: 30px;" to="/kontakt">Kontakt</router-link>
              </li>
              <li class="nav-item mx-2">
                <router-link v-if="active === 'kosik'" class="nav-link" style="color: rgb(226, 226, 226); font-size: 30px; background-color: rgba(55, 141, 112, 0.897); border-radius: 10px;" to="/kosik">Košík</router-link>
                <router-link v-if="active != 'kosik'" class="nav-link" style="color: rgb(226, 226, 226); font-size: 30px;" to="/kosik">Košík</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',
  props: {
    active: {
      type: String,
    }
  }
}
</script>
