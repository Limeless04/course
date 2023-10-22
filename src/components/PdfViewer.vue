<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf'


const { pdf } = usePDF('')


</script>

<template>
  <VuePDF :pdf="pdf" />
</template>