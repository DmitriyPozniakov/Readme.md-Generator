<template>
  <div class="flex flex-col items-center justify-center h-screen gap-8">
    <h1
      class="text-3xl text-custom-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl max-w-6xl text-center font-bold"
    >
      Page not found
      <span class="bg-gradient-hero bg-clip-text text-transparent">:/</span>
    </h1>
    <NuxtLink class="active-blue p-4 text-white text-center hover:bg-[#356bff] transition-colors rounded-2xl max-w-2xl text-lg font-semibold" to="/">Go to homepage</NuxtLink>
  </div>
</template>