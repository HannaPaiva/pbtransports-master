<template>
  <q-page>

    <div class="q-pa-md ">


      PEDIR CORRIDA

      <div class="row">
        <div class="col-12 col-md-6">
          <q-form @submit.prevent="submitForm">
            <q-input v-model="form.where" label="De onde" type="text" placeholder="De onde" required />
          </q-form>
        </div>

        <div class="col-12 col-md-6">
          <q-input v-model="form.to" label="Para onde" type="text" placeholder="Para onde" required />
        </div>
      </div>


      <div class="row">
        <div class="col-12 col-md-6">
          <q-select v-model="form.people" :options="options" label="Quantas Pessoas"> </q-select>
        </div>
        <q-col class="col-12 col-md-6">
          <q-input v-model="form.name" label="Nome do cliente" type="text" placeholder="Nome do cliente (opcional)" />

        </q-col>
      </div>

      <div class="q-pa-md ">
        <div class="row">
          <div class="col-12 col-md-6">
            <div>
              HORA DO PICKUP
              <div class="q-pa-md">
                <div class="q-gutter-md ">
                  <q-input filled v-model="form.time" mask="time" :rules="['time']">
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-time v-model="form.time">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat></q-btn>
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  DATA DO PICKUP
                  <div class="q-pa-md">
                    <div class="q-gutter-md row items-start">
                      <q-input filled v-model="form.date" mask="##-##-####" :rules="['date']">
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" mask="DD-MM-YY-" transition-hide="scale">
                              <q-date v-model="form.date">
                                <div class="row items-center justify-end">
                                  <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <q-col class="col-12 col-md-6">
            <q-input v-model="form.price" label="Preço da corrida" type="text" placeholder="preço a pagar" />

          </q-col>
        </div>
      </div>
      <div class="q-pa-md column items-center">
        <q-btn type="submit" style="width: 60%;" label="Pedir táxi" color="primary" @click="submitForm()" />
      </div>







    </div>
  </q-page>
</template>

<script>

import { defineComponent } from 'vue'
const dataAtual = new Date();
export default defineComponent({
  name: 'IndexPage',
  data() {
    return {


      form: {
        id: '',
        where: "Hotel Victoria Sports & Beach",
        to: "Baixa de Albufeira",
        name: '',
        time: dataAtual.getHours() + ':' + dataAtual.getMinutes(),
        date:dataAtual.getDate() + " " + dataAtual.getMonth() + " " + dataAtual.getYear(),
        people: '',
        price: '',

      },

      run: [],
      options: [
        '1', '2', '3', '4', '5', '6',
      ],

      optionsFn(date) {
        return date >= dataAtual.getDate()
      },


    };
  },
  methods: {
    submitForm() {

      // Perform form validation


      if (!this.form.where || !this.form.to || !this.form.people || !this.form.time) {
        return;
      }
      this.AddRun();

    },

    AddRun() {

      this.run.push(this.form)
      const obj = {
        'id': 0,
        'where': this.form.name,
        'to': this.form.where,
        'name': this.form.to,
        'time': this.form.client_name,
        'price': this.form.price,
        'is_confirmed': this.form.is_confirmed,
        'people': this.form.people,
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
.page {
  width: 100%;

}
</style>

