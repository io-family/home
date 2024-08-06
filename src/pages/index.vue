<template>
  <div id="cf-wrapper">
    <div id="cf-error-details" class="p-0">
      <!-- <div class="locale-changer">
        <select v-model="$i18n.locale">
          <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}
          </option>
        </select>
      </div> -->
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
