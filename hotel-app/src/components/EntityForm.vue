<template>
  <div>
    <h1>{{ entity }} Form</h1>
    <form @submit.prevent="handleSubmit">
      <div v-for="field in entityFields" :key="field">
        <label :for="field">{{ field }}</label>
        <input v-model="formData[field]" :id="field" :name="field" />
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'EntityForm',
  props: ['entity', 'id'],
  data() {
    return {
      formData: {},
      entityFields: []
    };
  },
  created() {
    this.setEntityFields();
    if (this.id && this.id != 'new') {
      this.fetchData();
    } else {
      this.initializeForm();
    }
  },
  methods: {
    setEntityFields() {
      const fields = {
        rooms: ['room_number', 'room_type', 'room_rate'],
        reservations: ['reservation_date', 'number_days', 'roomId', 'guestId', 'employeeId', 'restaurantId'],
        employees: ['first_name', 'last_name'],
        guests: ['first_name', 'last_name'],
        transports: ['type', 'price', 'guestId'],
        restaurants: ['name', 'location']
      };
      this.entityFields = fields[this.entity] || [];
    },
    initializeForm() {
      this.entityFields.forEach(field => {
        this.formData[field] = '';
      });
    },
    async fetchData() {
      try {
        const response = await api.get(this.entity, this.id);
        this.formData = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async handleSubmit() {
      try {
        if (isNaN(this.id)) {
          await api.create(this.entity, this.formData);
        } else {
          await api.update(this.entity, this.id, this.formData);
        }
        this.$router.push(`/${this.entity}`);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
