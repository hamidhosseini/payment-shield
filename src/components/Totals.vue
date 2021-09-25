<template>
  <v-container>
    <v-row justify="space-between" class="d-none d-md-flex row-container">
      <v-col class="text-center d-flex flex-column justify-center pa-2" v-for="block in blocks" :key="block.id">
        <div class="step-wrapper pa-2 pr-3">
          <span>
            {{ block.label }}
          </span>
          <span v-if="block.symbolPosition === 'start'" class="d-block font-weight-bold text-h6">
            {{ block.symbol + block.value }}
          </span>
          <span class="d-block font-weight-bold text-h6" v-else>
            {{ block.value + block.symbol }}
          </span>
        </div>
      </v-col>
      <v-col class="d-flex align-center">
        <v-btn
          color="juicyRed"
          elevation="2"
          large
        ><span class="btn-white">Change</span></v-btn>
      </v-col>
    </v-row>
    <v-simple-table class="hidden-md-and-up">
      <template v-slot:default>
        <tbody>
          <tr
            v-for="block in blocks"
            :key="block.id"
          >
            <td class="font-weight-bold">{{ block.label }}</td>
            <td class="text-right">
              <template v-if="block.symbolPosition === 'start'">
                {{ block.symbol + block.value }}
              </template>
              <template v-else>
                  {{ block.value + block.symbol }}
              </template>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn
      color="juicyRed"
      elevation="2"
      block
      x-large
      class="hidden-md-and-up"
    ><span class="btn-white">Change</span></v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'Totals',

    data: () => ({
      blocks: [
        { id: 1, value: '500,000', label: 'Buildings Cover', type: 'int', symbol: '£', symbolPosition: 'start'},
        { id: 2, value: '250', label: 'Buildings Excess', type: 'int', symbol: '£', symbolPosition: 'start'},
        { id: 3, value: '50,000', label: 'Contents Cover', type: 'int', symbol: '£', symbolPosition: 'start'},
        { id: 4, value: '250', label: 'Contents Excess', type: 'int', symbol: '£', symbolPosition: 'start'},
        { id: 5, value: 'No', label: 'Home Emergency',  type: 'bool', symbol: '', symbolPosition: ''},
        { id: 6, value: 'No', label: 'Legal Expenses',  type: 'bool', symbol: '', symbolPosition: ''},
        { id: 7, value: '0', label: 'Premium Flex', type: 'int', symbol: '%', symbolPosition: 'end'},
      ]
    }),
  }
</script>

<style scoped>
  .steps {
    background-color: #2C3536;
    color: white;
  }

  .current-step {
    color: black;
  }

  .prev-step {
    color: white;
  }

  .total-block {
    border-right: 1px solid grey;
  }

  .step-wrapper {
    border-right: 1px solid rgba(128, 128, 128, 0.37);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>