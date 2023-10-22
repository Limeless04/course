<template>
    <div class="flex flex-col bg-white rounded-lg shadow-lg mx-auto items-center justify-center xs:w-3/4 m-5 lg:w-full">
      <!-- Book Image -->
      <img
        class="lg:w-40 lg:h-40 xs:h-10 xs:w-10 object-fit"
        src="../../assets/default-image48.png"
        alt="Book Image"
      />

      <div class="p-4">
        <!-- Subject -->
        <h2 class="text-2xl font-bold text-gray-800">{{ subject }}</h2>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: {
      subject: String,
    },
  };
  </script>
  