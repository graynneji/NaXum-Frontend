<script setup>
const features = [
    {
        title: "COLLAGEN PEPTIDE EXFOLIATING GEL",
        subtitle: "",
        content: "Instant results with visible remove of dead cells. Clinically proven to activate the skin repair process. Smooths wrinkles, improves tone & elasticity.",
        image: "/Group 26.png"
    },
    {
        title: "BELLA COLLAGEN ELIXIR",
        subtitle: "Beauty from the Inside Out",
        content: "Helps the body product more collagen. Backed by double blind clinical studies. Healthier skin, hair, nails, joints & more.",
        image: "/Group 17.png"
    },
    {
        title: "HYDRATING LIP PLUMPING OIL",
        subtitle: "",
        content: "Ultimate softness, hydration, & comfort \n A smooth and naturally-plump look. Shine of a gloss with the benefits of a balm.",
        image: "/Group 19.png"
    },
   
]
</script>

<template>
 <div class="min-h-screen bg-[#E1DFDD3B] px-[25px] lg:px-[170px] py-[195px]">
    <template v-for="(feature, index) in features" :key="index">
      <!-- Flex container for each feature -->
      <div
        :class="[
          'flex flex-col md:flex-row items-center gap-10 py-16',
          index % 2 !== 0 ? 'md:flex-row-reverse' : ''
        ]"
      >
        <!-- Text -->
        <div class="flex-1">
          <h2 class="text-[#416887] text-[40px] tracking-[0.02em] font-normal leading-[100%] mb-[19px]">
            {{ feature.title }}
          </h2>

          <p
            v-if="feature.subtitle"
            class="font-normal text-[#788995] text-[23px] mb-[30px]"
          >
            {{ feature.subtitle }}
          </p>

          <p
            class="text-[#99A1A5] text-[23px] font-normal leading-[36px] tracking-[0.02em] border-l-[5px] border-[#788995BF] pl-[25px]"
          >
            {{ feature.content }}
          </p>
        </div>

        <!-- Image -->
        <div class="flex-1 flex"
        :class="index % 2 === 0 ? 'justify-end' : 'justify-start'"
        >
          <img
            :src="feature.image"
            :alt="feature.title"
            class="w-auto h-auto object-cover rounded"
          />
        </div>
      </div>
    </template>
  </div>

</template>