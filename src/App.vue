<script setup>
import { useHead } from "@unhead/vue";

useHead({
  title: "Recipe Page",
});
</script>

<template>
  <main class="grid place-content-center bg-neutral-eggshel md:py-24">
    <div class="bg-white font-outfit md:max-w-2xl md:rounded-3xl">
      <img
        class="md:rounded-[3rem] md:p-8"
        src="./assets/images/image-omelette.jpeg"
        alt="Omelette"
      />
      <div class="flex flex-col gap-6 p-[1.375rem] md:px-8">
        <h1 class="font-youngSerif text-4xl text-neutral-darkCharcoal">
          Simple Omelette Recipe
        </h1>
        <p class="text-neutral-darkCharcoal">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetanles, or meats.
        </p>
        <div class="rounded-xl bg-neutral-roseWhite p-6">
          <h3 class="font-outfit text-xl font-bold text-primary-darkRaspberry">
            Preparation time
          </h3>
          <ul
            class="list-disc space-y-2 px-6 pt-4 *:pl-4 marker:text-xs marker:text-primary-darkRaspberry"
          >
            <li>
              <span class="font-bold text-neutral-wengeBrown">Total</span>:
              Approximately 10 minutes
            </li>
            <li>
              <span class="font-bold text-neutral-wengeBrown">Preparation</span
              >: 5 minutes
            </li>
            <li>
              <span class="font-bold text-neutral-wengeBrown">Cooking</span>: 5
              minutes
            </li>
          </ul>
        </div>
        <h2 class="font-youngSerif text-3xl text-primary-nutmeg">
          Ingredients
        </h2>
        <ul
          class="list-disc space-y-2 px-6 text-neutral-darkCharcoal *:pl-4 marker:text-xs marker:text-primary-nutmeg"
        >
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoom of butter or optionally</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
        <hr class="mx-auto w-full" />
      </div>
      <div class="flex flex-col gap-6 p-[1.375rem] md:px-8">
        <h2 class="font-youngSerif text-3xl text-primary-nutmeg">
          Instructions
        </h2>
        <ol
          class="list-decimal px-6 text-neutral-darkCharcoal *:pl-4 marker:font-bold marker:text-primary-nutmeg"
        >
          <li>
            <span class="font-bold text-neutral-wengeBrown">Beat the eggs</span
            >: In a bowl, beat the eggs with a pinch of salt and pepper until
            they are well mixed. You can add a tablespoon of water or milk for a
            fluffier texture.
          </li>
          <li>
            <span class="font-bold text-neutral-wengeBrown">Heat the pan</span>:
            Place a non-stick frying pan over medium heat and add butter or oil.
          </li>
          <li>
            <span class="font-bold text-neutral-wengeBrown"
              >Cook the omelette</span
            >: Once the butter is melted and bubbling, pour in the eggs. Tilt
            the pan to ensure the eggs evenly coat the surface.
          </li>
          <li>
            <span class="font-bold text-neutral-wengeBrown"
              >Add fillings (optional)</span
            >: When the eggs begin to set at the edges but are still slightly
            runny in the middle, sprinkle your chosen fillings over one half of
            the omelette.
          </li>
          <li>
            <span class="font-bold text-neutral-wengeBrown">Fold and serve</span
            >: As the omelette continues to cook, carefully lift one edge and
            fold it over the fillings. Let it cook for another minute, then
            slide it onto a plate.
          </li>
          <li>
            <span class="font-bold text-neutral-wengeBrown">Enjoy</span>: Serve
            hot, with additional salt and pepper if needed.
          </li>
        </ol>
        <hr class="mx-auto w-full" />
      </div>
      <div class="flex flex-col gap-6 p-[1.375rem] md:px-8">
        <h2 class="font-youngSerif text-3xl text-primary-nutmeg">Nutrition</h2>
        <p class="text-neutral-darkCharcoal">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table class="mx-auto w-[90%]">
          <tbody class="divide-y text-neutral-darkCharcoal">
            <tr class="*:p-4">
              <td>Calories</td>
              <td class="font-bold text-primary-nutmeg">277kcal</td>
            </tr>
            <tr class="*:p-4">
              <td>Carbs</td>
              <td class="font-bold text-primary-nutmeg">0g</td>
            </tr>
            <tr class="*:p-4">
              <td>Protein</td>
              <td class="font-bold text-primary-nutmeg">20g</td>
            </tr>
            <tr class="*:p-4">
              <td>Fat</td>
              <td class="font-bold text-primary-nutmeg">22g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
