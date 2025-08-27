<template>
  <div class="flex flex-col gap-4 justify-center items-center">
    <BaseFloating />
    <h1
      class="text-custom-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl max-w-6xl text-center font-bold mb-3"
    >
      Create your perfect
      <span class="bg-gradient-hero bg-clip-text text-transparent">README</span>
      in minutes
    </h1>
    <p
      class="text-gray-500 text-center text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl"
    >
      Upload your GitHub repository or ZIP archive and we will automatically
      generate a professional README file with a full analysis of the project
      structure.
    </p>
    <GithubContainer />
    <PossibilityContainer />
  </div>
</template>