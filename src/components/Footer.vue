<script setup lang="ts">
</script>

<template>
  <!-- Päta stránky -->
  <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <!-- Odkaz na domov -->
        <li class="nav-item">
          <router-link class="nav-link px-2 text-body-secondary" to="/">
            Domov
          </router-link>
        </li>
        <!-- Odkaz na destinácie -->
        <li class="nav-item">
          <router-link class="nav-link px-2 text-body-secondary" to="/destinacie">
            Destinácie
          </router-link>
        </li>
        <!-- Odkaz na služby -->
        <li class="nav-item">
          <router-link class="nav-link px-2 text-body-secondary" to="/sluzby">
            Služby
          </router-link>
        </li>
        <!-- Odkaz na kontakt -->
        <li class="nav-item">
          <router-link class="nav-link px-2 text-body-secondary" to="/kontakt">
            Kontakt
          </router-link>
        </li>
      </ul>
      <!-- Informácie o copyrighte -->
      <p class="text-center text-body-secondary">© 2025 Vias s.r.o</p>
      <!-- Informácie o vypracovaní -->
      <p class="text-center text-body-secondary" style="font-weight: bold;">Vypracoval Adam Gál</p>
    </footer>
  </div>
</template>

<style scoped>

</style>