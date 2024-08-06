<template>
  <div id="cf-wrapper">
    <div id="cf-error-details" class="p-0">
      <TitleBar />
      <SystemStatus />
      <DescriptionContent />
      <v-footer>
        <RayFooter />
      </v-footer>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted } from 'vue';

const abTest = inject('abTest');

onMounted(() => {
  abTest("KnowledgeBaseLink");
});
</script>
