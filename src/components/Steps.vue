<template>
  <div class="steps">
    <div class="container px-4">
      <div class="d-flex text-center justify-space-between">
        <div v-for="step in steps" :key="step.stepNumber">
          <v-chip
            :color="step.currentStep ? 'limeGreen' : 'juicyRed'"
            :outlined="!step.currentStep"
          >
            <span :class="step.currentStep ? 'current-step' : 'prev-step'">
              {{ step.stepNumber }}
            </span>
          </v-chip>
          <span class="pl-1" :class="step.stepNumber !== 5 ? 'hidden-sm-and-down' : ''">
            {{ step.label }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Steps',

    data: () => ({
      steps: [
        { stepNumber: 1, label: 'Persoanl Details', currentStep: false},
        { stepNumber: 2, label: 'Property Details', currentStep: false},
        { stepNumber: 3, label: 'Cover Details', currentStep: false},
        { stepNumber: 4, label: 'Previous Claims', currentStep: false},
        { stepNumber: 5, label: 'Results', currentStep: true},
      ]
    }),
  }
</script>

<style scoped>
  .steps {
    background-color: #2C3536;
    color: white;
    width: 100%;
  }

  .current-step {
    color: black;
  }

  .prev-step {
    color: white;
  }
</style>