<template>
  <q-page class="flex">

    <div class="q-pa-md">

      <div>
        <div sm="6" md="4" lg="3">
          <q-form @submit.prevent="submitForm">
            <q-input v-model="form.name" label="Name" type="text" placeholder="Enter your name" required />
            <q-input v-model="form.email" label="Email" type="email" placeholder="Enter your email" required />
            <q-input v-model="form.password" label="Password" type="password" placeholder="Enter your password"
              required />
            <q-btn type="submit" label="Submit" color="primary" />
          </q-form>
        </div>
        <div sm="6" md="4" lg="3">
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>email</th>
                  <th>password</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.password }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      form: {
        name: "Ali",
        email: "ali@gmail.com",
        password: "123123123"
      },

      users: [
        { id: 1, name: "John Doe", password: 32, email: "john@example.com" },
        { id: 2, name: "Jane Doe", password: 28, email: "jane@example.com" },
        { id: 3, name: "Jim Smith", password: 45, email: "jim@example.com" }
      ]
    };
  },
  methods: {
    submitForm() {
      // Perform form validation
      if (!this.form.name || !this.form.email || !this.form.password) {
        return;
      }
      this.AddEmployee();

    },

    AddEmployee() {

      this.users.push(this.form)
      const obj = {
        'id': this.users.id,
        'name': this.users.name,
        'email': this.users.email,
      }
      this.users.sort(function (a, b) {

        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });



    }
  }

})




</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #ddd;
}
</style>

