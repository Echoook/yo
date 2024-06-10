<template>
  <div>
    <h1>{{ entity }}</h1>
    <router-link :to="`/${entity}/new`">Create New {{ entity }}</router-link>
    <table>
      <thead>
        <tr>
          <th v-for="field in entityFields" :key="field">{{ field }}</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-for="field in entityFields" :key="field">{{ item[field] }}</td>
          <td>
            <button @click="redirectToEditPage(item.id)">Edit</button>
            <button @click="deleteItem(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'EntityList',
  props: ['entity'],
  data() {
    return {
      items: [],
      entityFields: []
    };
  },
  created() {
    this.setEntityFields();
    this.fetchData();
  },
  methods: {
    setEntityFields() {
      const fields = {
        rooms: ['id', 'room_number', 'room_type', 'room_rate'],
        reservations: ['id', 'reservation_date', 'number_days', 'roomId', 'guestId', 'employeeId', 'restaurantId'],
        employees: ['id', 'first_name', 'last_name'],
        guests: ['id', 'first_name', 'last_name'],
        transports: ['id', 'type', 'price', 'guestId'],
        restaurants: ['id', 'name', 'location']
      };
      this.entityFields = fields[this.entity] || [];
    },
    redirectToEditPage(id) {
      this.$router.push(`/${this.entity}/${id}`);
    },
    async fetchData() {
      try {
        const response = await api.getAll(this.entity);
        this.items = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteItem(id) {
      try {
        await api.delete(this.entity, id);
        this.fetchData();
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
