<template>
  <div>
    <h1>Welcome to the Hotel Management System</h1>
    <nav>
      <router-link to="/rooms">Rooms</router-link>
      <router-link to="/reservations">Reservations</router-link>
      <router-link to="/employees">Employees</router-link>
      <router-link to="/guests">Guests</router-link>
      <router-link to="/transports">Transports</router-link>
      <router-link to="/restaurants">Restaurants</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style>
nav a {
  margin-right: 15px;
}
</style>
