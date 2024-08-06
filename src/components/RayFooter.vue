<template>
  <div
    class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
    <p class="text-13">
      <span class="cf-footer-item sm:block sm:mb-1">{{ $t("ray_id_text") }}<strong
          class="font-semibold">15815aaoem983389</strong></span>
      <span class="cf-footer-separator sm:hidden"> • </span>
      <span id="cf-footer-item-ip" class="cf-footer-item sm:block sm:mb-1">
        {{ $t("visitor_ip_text") }}
        <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">{{ $t("reveal_ip_button_text")
          }}</button>
        <span class="hidden" id="cf-footer-ip">127.0.0.1</span>
        <span class="cf-footer-separator sm:hidden"> • </span>
      </span>
      <span class="cf-footer-item sm:block sm:mb-1"><span>{{ $t("cf_link_before") }}</span> <a rel="noopener noreferrer"
          class="KnowledgeBaseLink" target="_self">{{ $t("cf_link_text") }}</a>{{ $t("cf_link_after") }}</span>
      <span class="cf-footer-separator sm:hidden"> • </span>
      <v-btn icon="mdi-earth" density="compact">
        <v-menu activator="parent" location="end">
          <v-list>
            <v-list-item v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale"
              @click="swichLocale(locale)">
              <v-list-item-title>{{ $t(locale) }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const swichLocale = (newLocale) => {
  locale.value = newLocale;
}
</script>

<script>
export default {
  mounted() {
    let revealButton = this.$el.querySelector('#cf-footer-ip-reveal');
    if (revealButton) {
      revealButton.addEventListener('click', () => {
        this.$el.querySelector('#cf-footer-ip').classList.remove('hidden');
        revealButton.classList.add('hidden');
      });
    }
  }
}
</script>
