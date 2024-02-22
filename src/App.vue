<template>
  <div class="font-outfit">
    <img src="./assets/images/image-omelette.jpeg" alt="Omelette" />
    <div class="flex flex-col gap-6 p-[1.375rem]">
      <h1 class="font-youngSerif text-4xl">Simple Omelette Recipe</h1>
      <p class="text-neutral-darkCharcoal">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetanles, or meats.
      </p>
      <div class="bg-neutral-roseWhite rounded-xl p-6">
        <h3 class="text-primary-darkRaspberry font-outfit text-xl font-bold">
          Preparation time
        </h3>
        <ul
          class="marker:text-primary-darkRaspberry list-disc space-y-2 px-6 pt-4 *:pl-4 marker:text-xs"
        >
          <li>
            <span class="text-neutral-wengeBrown font-bold">Total</span>:
            Approximately 10 minutes
          </li>
          <li>
            <span class="text-neutral-wengeBrown font-bold">Preparation</span>:
            5 minutes
          </li>
          <li>
            <span class="text-neutral-wengeBrown font-bold">Cooking</span>: 5
            minutes
          </li>
        </ul>
      </div>
      <h2 class="text-primary-nutmeg font-youngSerif text-3xl">Ingredients</h2>
      <ul
        class="text-neutral-darkCharcoal marker:text-primary-nutmeg list-disc space-y-2 px-6 *:pl-4 marker:text-xs"
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
    <div class="flex flex-col gap-6 p-[1.375rem]">
      <h2 class="text-primary-nutmeg font-youngSerif text-3xl">Instructions</h2>
      <ol
        class="marker:text-primary-nutmeg text-neutral-darkCharcoal list-decimal px-6 *:pl-4 marker:font-bold"
      >
        <li>
          <span class="text-neutral-wengeBrown font-bold">Beat the eggs</span>:
          In a bowl, beat the eggs with a pinch of salt and pepper until they
          are well mixed. You can add a tablespoon of water or milk for a
          fluffier texture.
        </li>
        <li>
          <span class="text-neutral-wengeBrown font-bold">Heat the pan</span>:
          Place a non-stick frying pan over medium heat and add butter or oil.
        </li>
        <li>
          <span class="text-neutral-wengeBrown font-bold"
            >Cook the omelette</span
          >: Once the butter is melted and bubbling, pour in the eggs. Tilt the
          pan to ensure the eggs evenly coat the surface.
        </li>
        <li>
          <span class="text-neutral-wengeBrown font-bold"
            >Add fillings (optional)</span
          >: When the eggs begin to set at the edges but are still slightly
          runny in the middle, sprinkle your chosen fillings over one half of
          the omelette.
        </li>
        <li>
          <span class="text-neutral-wengeBrown font-bold">Fold and serve</span>:
          As the omelette continues to cook, carefully lift one edge and fold it
          over the fillings. Let it cook for another minute, then slide it onto
          a plate.
        </li>
        <li>
          <span class="text-neutral-wengeBrown font-bold">Enjoy</span>: Serve
          hot, with additional salt and pepper if needed.
        </li>
      </ol>
      <hr class="mx-auto w-full" />
    </div>
    <div class="flex flex-col gap-6 p-[1.375rem]">
      <h2 class="text-primary-nutmeg font-youngSerif text-3xl">Nutrition</h2>
      <p class="text-neutral-darkCharcoal">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table class="mx-auto w-[90%]">
        <tbody class="text-neutral-darkCharcoal divide-y">
          <tr class="*:p-4">
            <td>Calories</td>
            <td class="text-primary-nutmeg font-bold">277kcal</td>
          </tr>
          <tr class="*:p-4">
            <td>Carbs</td>
            <td class="text-primary-nutmeg font-bold">0g</td>
          </tr>
          <tr class="*:p-4">
            <td>Protein</td>
            <td class="text-primary-nutmeg font-bold">20g</td>
          </tr>
          <tr class="*:p-4">
            <td>Fat</td>
            <td class="text-primary-nutmeg font-bold">22g</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
