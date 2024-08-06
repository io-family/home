<template>
  <div class="w-240 lg:w-full mx-auto mb-8 lg:px-8">
    <div class="clearfix">
      <div class="w-1/2 md:w-full float-left pr-6 md:pb-10 md:pr-0 leading-relaxed">
        <h2 class="text-3xl font-normal leading-1.3 mb-4">{{ $t("what_happened_text") }}</h2>
        <p class="mb-6">{{ $t("what_happened_description") }}</p>

        <h3 class="text-15 font-semibold mb-2">{{ $t("welcome_text") }}</h3>
        <p class="mb-6">{{ $t("welcome_description") }}</p>

        <h3 class="text-15 font-semibold mb-2">{{ $t("future_plans_text") }}</h3>
        <p class="mb-6">{{ $t("future_plans_description") }}</p>
      </div>

      <div class="w-1/2 md:w-full float-left leading-relaxed">
        <h2 class="text-3xl font-normal leading-1.3 mb-4">{{ $t("instructions_text") }}</h2>
        <h3 class="text-15 font-semibold mb-2">{{ $t("condition_rainborn") }}</h3>
        <p class="mb-6">{{ $t("rainborn_description") }}</p>

        <h3 class="text-15 font-semibold mb-2">{{ $t("condition_visitor") }}</h3>
        <p class="mb-6">{{ $t("visitor_description") }}</p>

        <h3 class="text-15 font-semibold mb-2">{{ $t("condition_ab_tester") }}</h3>
        <p class="mb-6">{{ $t("ab_tester_description") }}</p>

        <h3 class="text-15 font-semibold mb-2">{{ $t("condition_owner") }}</h3>
        <p><span>{{ $t("owner_description") }}</span> <a rel="noopener noreferrer" class="KnowledgeBaseLink">{{
          $t("troubleshoot_link_text") }}</a></p>
      </div>
    </div>
  </div>
</template>
