<template>
    <div
        class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
        <p class="text-13">
            <span class="cf-footer-item sm:block sm:mb-1">NearField Ray ID: <strong
                    class="font-semibold">15815aaoem983389</strong></span>
            <span class="cf-footer-separator sm:hidden">•</span>
            <span id="cf-footer-item-ip" class="cf-footer-item sm:block sm:mb-1">
                Your IP:
                <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
                <span class="hidden" id="cf-footer-ip">127.0.0.1</span>
                <span class="cf-footer-separator sm:hidden">•</span>
            </span>
            <span class="cf-footer-item sm:block sm:mb-1"><span>"Performance" &amp; "security" by</span> <a
                    rel="noopener noreferrer" class="KnowledgeBaseLink" target="_self">NearField
                    Communications</a></span>

        </p>
    </div>
</template>


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
