<!-- <template>
  <div>
    <form>
      <input v-model="textInput" type="text"/>
    </form>
    <button @click="generatePDF">Generate PDF</button>
  </div>
</template>

<script>
import jsPDF from 'jspdf';

export default {
  data() {
    return {
      textInput: ''
    };
  },
  methods: {
    generatePDF() {
      const pdf = new jsPDF();
      pdf.text(this.textInput, 10, 10);

      pdf.output('dataurlnewwindow');
    }
  }
};
</script> -->

<template>
  <div>
    <!-- <form>
      <input v-model="textInput" type="text" />
    </form> -->

    <div id="htmlContent" style="width: 60%;">

      <div>
        <table class="header">
          <tr>
            <td><img width="120" height="120" src="/images/logo.png"></td>
            <td style="width:100%">
              <div class="header-pdf">
                <p class="bold-pdf">P&B Transports</p>
                <p>Rua Escola do Futebol, nº. 13 - Terceiro Direito</p>
                <p>8700 - 258 - Olhão</p>
                <p class="bold-pdf">NIF/NIPC: 517 101 505</p>
              </div>
              <hr style="border: none; height: 1px; color: grey; background-color: grey; margin-top: 10; ">
            </td>
          </tr>

        </table>


        <table style="width: 100%; ">
          <thead>
            <th>Recibo de Remuneração</th>

          </thead>
          <tbody style="border: 1px solid #ddd; ">
            <tr>
              <td>
                <div class="header-pdf" style="text-align: right; padding: 35px; ">
                  <p class="bold-pdf">Outubro - 2022</p>
                  <p>Brena Thaís de Araújo Teodoro</p>
                  <p>Código de funcionário</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="first_table">
          <tr>
            <th> n. Recibo </th>
            <th> Categoria </th>
            <th>Contribuinte</th>
            <th> N.S.S</th>
            <th> Banco </th>
            <th> NIB </th>
            <th> Vencimento</th>
          </tr>
          <tr>
            <td> 12</td>
            <td>Motorista de Frota </td>
            <td>
              <p> 292405588</p>
            </td>
            <td>
              <p>
                12074056163
              </p>
            </td>
            <td>
              <p> NovoBanco</p>
            </td>
            <td>
              <p></p>
            </td>
            <td>
              <p><br /></p>
            </td>
          </tr>
        </table>
        <table style="border-collapse: collapse; margin-left: 27.794pt" cellspacing="0">
          <tr style="height: 25pt">
            <td style="
            width: 63pt;

          " bgcolor="#E7E6E6">
              <p class="s2" style="
              padding-left: 8pt;
              padding-right: 8pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            ">
                Código
              </p>
            </td>
            <td style="
            width: 95pt;

          " bgcolor="#E7E6E6">
              <p class="s2" style="
              padding-left: 6pt;
              padding-right: 5pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            ">
                Descrição do abono
              </p>
            </td>
            <td style="
            width: 58pt;

          " bgcolor="#E7E6E6">
              <p class="s2" style="
              padding-left: 4pt;
              padding-right: 4pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            ">
                Data de Ref
              </p>
            </td>
            <td style="
            width: 56pt;

          " bgcolor="#E7E6E6">
              <p class="s2" style="
              padding-left: 12pt;
              padding-right: 12pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            ">
                Qtd/ %
              </p>
            </td>
            <td style="
            width: 52pt;

          " bgcolor="#E7E6E6">
              <p class="s2" style="
              padding-left: 15pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: left;
            ">
                Valor
              </p>
              <p class="s2" style="
              padding-left: 16pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: left;
            ">
                Unit.
              </p>
            </td>
            <td style="
            width: 76pt;

          " bgcolor="#E7E6E6">
              <p class="s2" style="
              padding-left: 7pt;
              padding-right: 7pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            ">
                Remunerações
              </p>
            </td>
            <td style="
            width: 68pt;

          " bgcolor="#E7E6E6">
              <p class="s2" style="
              padding-left: 13pt;
              padding-right: 13pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            ">
                Deduções
              </p>
            </td>
          </tr>
          <tr style="height: 14pt">
            <td style="
            width: 63pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p class="s2" style="
              padding-left: 8pt;
              padding-right: 8pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            ">
                2542
              </p>
            </td>
            <td style="
            width: 95pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p class="s2" style="
              padding-left: 6pt;
              padding-right: 6pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            ">
                REMUNERAÇÃO
              </p>
            </td>
            <td style="
            width: 58pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p class="s2" style="
              padding-left: 4pt;
              padding-right: 4pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            ">
                10/2022
              </p>
            </td>
            <td style="
            width: 56pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p class="s2" style="
              padding-left: 12pt;
              padding-right: 12pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            ">
                48,00
              </p>
            </td>
            <td style="
            width: 52pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 68pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
          </tr>
          <tr style="height: 13pt">
            <td style="
            width: 63pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 95pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p class="s2" style="
              padding-left: 6pt;
              padding-right: 5pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: center;
            ">
                BASE
              </p>
            </td>
            <td style="
            width: 58pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 56pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 52pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 76pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 68pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
          </tr>
          <tr style="height: 13pt">
            <td style="
            width: 63pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 95pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p class="s2" style="
              padding-left: 6pt;
              padding-right: 6pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: center;
            ">
                TAXA SOCIAL ÚNICA
              </p>
            </td>
            <td style="
            width: 58pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p class="s2" style="
              padding-left: 4pt;
              padding-right: 4pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: center;
            ">
                10/2022
              </p>
            </td>
            <td style="
            width: 56pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p class="s2" style="
              padding-left: 12pt;
              padding-right: 12pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: center;
            ">
                11,00
              </p>
            </td>
            <td style="
            width: 52pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p class="s2" style="
              padding-left: 14pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: left;
            ">
                6,687
              </p>
            </td>
            <td style="
            width: 76pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p class="s2" style="
              padding-left: 7pt;
              padding-right: 7pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: center;
            ">
                735,00
              </p>
            </td>
            <td style="
            width: 68pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p class="s2" style="
              padding-left: 13pt;
              padding-right: 12pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: center;
            ">
                31,08
              </p>
            </td>
          </tr>
          <tr style="height: 13pt">
            <td style="
            width: 63pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 95pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p class="s2" style="
              padding-left: 6pt;
              padding-right: 6pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: center;
            ">
                GORJETAS
              </p>
            </td>
            <td style="
            width: 58pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 56pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 52pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 76pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 68pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
          </tr>
          <tr style="height: 12pt">
            <td style="
            width: 63pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 95pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 58pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p class="s2" style="
              padding-right: 4pt;
              text-indent: 0pt;
              line-height: 10pt;
              text-align: center;
            ">
                10/2022
              </p>
            </td>
            <td style="
            width: 56pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p class="s2" style="
              padding-left: 12pt;
              padding-right: 12pt;
              text-indent: 0pt;
              line-height: 10pt;
              text-align: center;
            ">
                9,00
              </p>
            </td>
            <td style="
            width: 52pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 76pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
            <td style="
            width: 68pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
            </td>
          </tr>
          <tr style="height: 37pt">
            <td style="
            width: 63pt;

          " bgcolor="#E7E6E6">
              <p class="s2" style="
              padding-left: 8pt;
              padding-right: 8pt;
              text-indent: 0pt;
              text-align: center;
            ">
                Transferido Para Conta
              </p>
              <p class="s2" style="
              padding-left: 8pt;
              padding-right: 8pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: center;
            ">
                (NIB)
              </p>
            </td>
            <td style="
            width: 261pt;

          " colspan="4">
              <p class="s2" style="padding-right: 4pt; text-indent: 0pt; text-align: right">
                761,00
              </p>
            </td>
            <td style="
            width: 76pt;

          ">
              <p class="s2" style="
              padding-left: 7pt;
              padding-right: 7pt;
              text-indent: 0pt;
              text-align: center;
            ">
                752,00
              </p>
            </td>
            <td style="
            width: 68pt;

          ">
              <p class="s2" style="
              padding-left: 13pt;
              padding-right: 12pt;
              text-indent: 0pt;
              text-align: center;
            ">
                31,08
              </p>
            </td>
          </tr>
          <tr style="height: 49pt">
            <td style="
            width: 63pt;

          " bgcolor="#E7E6E6">
              <p class="s2" style="
              padding-left: 5pt;
              padding-right: 9pt;
              text-indent: 0pt;
              text-align: left;
            ">
                Seguro: FIDELIDADE
              </p>
            </td>
            <td style="
            width: 95pt;

          ">
              <p class="s2" style="padding-left: 27pt; text-indent: -6pt; text-align: left">
                Apólice N. AT 90542364
              </p>
            </td>
            <td style="
            width: 58pt;

          ">
              <p class="s2" style="
              padding-left: 4pt;
              padding-right: 4pt;
              text-indent: 0pt;
              text-align: center;
            ">
                Data
              </p>
              <p class="s2" style="
              padding-left: 4pt;
              padding-right: 4pt;
              text-indent: 0pt;
              text-align: center;
            ">
                31-10-2022
              </p>
            </td>
            <td style="
            width: 252pt;

          " colspan="4">
              <p style="text-indent: 0pt; text-align: left"><br /></p>
              <p class="s2" style="
              padding-left: 95pt;
              padding-right: 94pt;
              text-indent: 0pt;
              text-align: center;
            ">
                FODASE
              </p>
            </td>
          </tr>
        </table>



      </div>


      <button @click="generatePDF">Generate PDF</button>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default {
  data() {
    return {
      textInput: ''
    };
  },
  methods: {
    async generatePDF() {
      // const canvas = await html2canvas(document.querySelector('#htmlContent'));

      // html2canvas(document.querySelector('#htmlContent'))
      // .then((canvas) => {
      //   const imgData = canvas.toDataURL('image/png');
      //   const pdf = new jsPDF({
      //     orientation: 'portrait',
      //   });
      //   const imgProps= pdf.getImageProperties(imgData);
      //   const pdfWidth = pdf.internal.pageSize.getWidth();
      //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      //   pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      //   pdf.save('download.pdf');
      // });

      // First, create a jsPDF object
      var doc = new jsPDF();

      // Then, you can use the fromHTML method to convert the HTML content to PDF
      doc.HTML(document.querySelector('#htmlContent'), 15, 15, {
        'width': 170,
      });

      // Finally, you can use the save method to download the PDF
      // or the output method to open it in a new window
      doc.output('dataurlnewwindow');

    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap');

.header-pdf {
  line-height: 0.3px;
}

.bold-pdf {
  font-weight: bold;
}

body {
  font-family: Jost, sans-serif;
}

.title {
  border: 1px solid black;
}

table {
  border-collapse: collapse;
}

table.first_table td,
table.first_table tr,
table.first_table th {
  border: 1px solid red;
}

.first_table th {
  text-align: center;
  background-color: #D9D9D9
}

/* .second_table {} */
</style>

