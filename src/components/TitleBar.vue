<template>
  <header class="mx-auto pt-10 lg:pt-6 lg:px-8 w-240 lg:w-full mb-8">
    <h1 class="inline-block sm:block sm:mb-2 font-light text-60 lg:text-4xl text-black-dark leading-tight mr-2">
      <span class="inline-block">{{ $t("title_welcome_back") }}</span>
      <span class="code-label">{{ $t("error_code_label") }}</span>
    </h1>
    <div>
      {{ $t("information_link_before") }}<a class="KnowledgeBaseLink" target="_self"
        rel="noopener noreferrer">{{ $t("information_link_text") }}</a>{{ $t("information_link_after") }}
    </div>
    <div class="mt-3">9999-99-99 99:99:99 UTC+99</div>
  </header>
</template>
