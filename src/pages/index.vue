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
//
</script>

<script>
  function ab() {
    if (Math.round(Math.random())) {
      return "https://voiddominator.github.io/help.kevinhu.world/";
    } else {
      return "https://iokb.wuff.dog";
    }
  }
  document.querySelectorAll(".KnowledgeBaseLink").forEach(function (link) {
    link.href = ab();
  });
</script>