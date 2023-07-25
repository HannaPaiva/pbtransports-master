<template>
  <div>


    <div id="q-app" style="min-height: 100vh;">
      <div class="q-pa-md">
        <q-table title="PEDIDOS DE CORRIDA" :rows="rows" :columns="columns" row-key="name"></q-table>
      </div>
    </div>



  </div>
</template>


<script>

import axios from 'axios';

export default ({
  name: 'IndexPage',
  data() {
    return {
      items: [],
      columns: [
        { name: 'id', align: 'center', label: 'id', field: 'id', sortable: true },
        { name: 'where', align: 'center', label: 'De Onde', field: 'where', sortable: true },
        { name: 'to', align: 'center', label: 'Para onde', field: 'to', sortable: true },
        { name: 'time', align: 'center', label: 'Hora', field: 'time', sortable: true },
        { name: 'client_name', align: 'center', label: 'Nome do cliente', field: 'client_name', sortable: true },
        { name: 'is_confirmed', align: 'center', label: 'Confirmado', field: 'is_confirmed', sortable: true },
      ],

      rows: [
        {
          id: 0,
          where: '',
          to: '',
          time: '',
          client_name: '',
          is_confirmed: '',

        }



      ],



    };

  },



  mounted() {
    axios.get('http://localhost:5000/')
      .then(response => {
        this.items = response.data;
        this.rows = response.data;
        if (response.data.is_confirmed == true) {
          this.rows.is_confirmed = 'confirmado'
        } else (
          this.rows.is_confirmed = 'Não confirmado'
        )


        // Atualiza os dados da tabela com a resposta do servidor
      })
      .catch(error => {
        console.error('Erro ao obter os dados:', error);
      });
  }

})

</script>
