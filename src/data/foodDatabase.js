// Dummy AI logic for food analysis
const junkFoods = [
  'burger', 'pizza', 'fries', 'french fries', 'hotdog', 'hot dog',
  'soda', 'coke', 'pepsi', 'cola', 'candy', 'chocolate', 'chips',
  'nachos', 'donut', 'doughnut', 'ice cream', 'milkshake',
  'fried chicken', 'nuggets', 'corn dog', 'onion rings',
  'mozzarella sticks', 'bacon', 'sausage', 'cake', 'pastry',
  'cookie', 'brownie', 'cupcake', 'waffle', 'pancake',
  'energy drink', 'red bull', 'monster', 'mountain dew',
  'taco bell', 'mcdonalds', 'kfc', 'wendys', 'popeyes',
  'pop tart', 'cheeto', 'doritos', 'lays', 'pringles',
  'instant noodles', 'ramen', 'spam', 'corn syrup',
  'white bread', 'margarine', 'cream cheese', 'frosting',
];

const healthyFoods = [
  'salad', 'grilled chicken', 'salmon', 'tuna', 'avocado',
  'quinoa', 'brown rice', 'oatmeal', 'oats', 'yogurt',
  'greek yogurt', 'fruit', 'apple', 'banana', 'orange',
  'berry', 'berries', 'blueberry', 'strawberry', 'kiwi',
  'mango', 'watermelon', 'grapes', 'pear', 'peach',
  'broccoli', 'spinach', 'kale', 'carrot', 'tomato',
  'cucumber', 'bell pepper', 'sweet potato', 'beans',
  'lentils', 'chickpeas', 'tofu', 'tempeh', 'edamame',
  'nuts', 'almonds', 'walnuts', 'chia seeds', 'flax',
  'hummus', 'olive oil', 'green tea', 'water', 'smoothie',
  'egg', 'eggs', 'fish', 'shrimp', 'turkey',
  'whole grain', 'whole wheat', 'multigrain',
  'vegetable', 'vegetables', 'greens', 'sprouts',
];

const moderateFoods = [
  'sandwich', 'wrap', 'pasta', 'rice', 'bread',
  'chicken', 'steak', 'beef', 'pork', 'cheese',
  'milk', 'cereal', 'granola', 'protein bar',
  'soup', 'noodles', 'sushi', 'meatball',
  'tortilla', 'pita', 'bagel', 'croissant',
  'juice', 'coffee', 'latte', 'cappuccino',
  'butter', 'cream', 'honey', 'jam',
  'popcorn', 'pretzel', 'trail mix',
];

const explanations = {
  low: [
    "I analyzed your meal, and it looks like it's a bit heavy on processed ingredients and refined carbs. While it's completely okay to treat yourself sometimes, making this a regular habit can lead to energy crashes and make it harder to hit your nutritional goals. Let's look at some small, tasty tweaks you can make for next time!",
    "Thanks for sharing! Based on my analysis, this meal is quite high in saturated fats and sodium. Your body works hard for you, and foods like this can sometimes slow it down. Don't worry though—I've got some great ideas on how you can satisfy those cravings while treating your body a little better.",
    "This one is definitely a treat! It's calorically dense but unfortunately lacks the essential vitamins and fiber your body uses for fuel. You might notice yourself feeling hungry or tired an hour or two after eating this. We can easily balance this out next time with a few smart swaps.",
    "I've crunched the numbers on your meal. It looks like it contains a high amount of refined sugars and trans fats. It's totally fine to enjoy these flavors, but for your daily fuel, you'll want something that gives you sustained energy. Let's explore some healthier alternatives that I think you'll love!"
  ],
  moderate: [
    "I see what you're going for here! This is a solid middle-ground choice. You're getting some good macros in there, but we could definitely optimize it to give you more sustained energy. Pairing this with a bit more fiber or lean protein would make it perfect.",
    "Not too bad at all! You've got a decent nutritional baseline here. To really make this meal work for your health, we could try sneaking in some micronutrients. Think colorful veggies or a small side of fruit. You're definitely on the right track!",
    "I've analyzed your meal, and it's a fair choice! You are covering your basic nutritional needs, but there is definitely room to level up. If you're open to it, just a couple of minor adjustments could significantly boost the fiber and vitamin content of this exact meal.",
    "Good choice! This meal provides a moderate balance of nutrients. It'll definitely keep you going, but if you want that optimal, feel-good energy throughout your day, I'd suggest pairing it with something fresh and nutrient-dense next time."
  ],
  high: [
    "Wow, I love this! Outstanding choice. You've packed in some fantastic lean proteins, complex carbs, and healthy fats. Your body is going to thank you for this fuel. You're doing an amazing job nourishing yourself—keep up this incredible momentum!",
    "Look at you go! I analyzed the nutritional profile here, and it is top-tier. You are getting an excellent array of vitamins, minerals, and fiber. This is exactly the kind of meal that supports heart health, mental clarity, and sustained energy. I'm taking notes!",
    "Fantastic! This meal is a nutritional powerhouse. I'm seeing a beautiful balance of macronutrients that will keep your blood sugar stable and your energy peaking. You've clearly got a great grasp on how to build a healthy, satisfying plate.",
    "This is a 10/10 choice in my book! Packed with antioxidants and essential nutrients, this meal actively supports your long-term wellness. Seeing choices like this tells me you're really prioritizing your health. Keep up the fantastic work!"
  ],
};

const suggestions = {
  low: [
    { icon: "🥗", text: "I'd suggest trying a Mediterranean grain bowl next time! Think grilled chicken, quinoa, and a light tahini dressing. It hits those savory notes perfectly." },
    { icon: "🌯", text: "If you love wraps, let's try a whole-wheat version! Pack it with turkey, avocado, and hummus for a super satisfying crunch and creaminess." },
    { icon: "🥤", text: "Craving a sweet drink? I love recommending sparkling water infused with fresh berries and mint. It's super refreshing without the sugar spike!" },
    { icon: "🍠", text: "If you're a fries fan, baked sweet potato wedges tossed in paprika and olive oil are an incredible, nutrient-dense swap you've got to try." },
    { icon: "🐟", text: "How about swapping in some grilled salmon? Pair it with steamed broccoli and brown rice—it's phenomenal for your brain and heart health." },
    { icon: "🥜", text: "For a sweet-and-salty fix, try a handful of mixed nuts with a square of dark chocolate (70%+). It completely satisfies that craving!" },
  ],
  moderate: [
    { icon: "🥬", text: "To level this up, I'd add a quick side salad! Just throw together some baby spinach, cherry tomatoes, and a drizzle of balsamic." },
    { icon: "🫐", text: "This is a great base. Why not toss in a handful of fresh blueberries or strawberries? It's an easy win for extra antioxidants." },
    { icon: "🥑", text: "My pro-tip for this meal: add a quarter of a sliced avocado! It adds a wonderful creamy texture and those essential healthy fats." },
    { icon: "💧", text: "This is a solid meal! Just make sure to pair it with a tall glass of icy water—maybe with a slice of lemon to aid digestion." },
    { icon: "🌾", text: "You're so close to a perfect score. Next time, just ask them to substitute the refined carbs for a whole-grain alternative!" },
  ],
  high: [
    { icon: "✨", text: "You totally nailed this! My only suggestion: consider adding a fermented side like kimchi or a spoonful of kraut for ultimate gut health." },
    { icon: "🧊", text: "Since your food is so dialed in, just don't forget to hydrate! Aim to keep a water bottle handy throughout the rest of your day." },
    { icon: "🌿", text: "To make this even more flavorful, try sprinkling on some fresh cilantro or basil. Fresh herbs are sneaky little micronutrient boosters!" },
    { icon: "⏰", text: "Honestly, just keep doing exactly what you're doing. Consistency is your superpower right now!" },
  ],
};

export function analyzeFood(input) {
  const lowerInput = input.toLowerCase().trim();
  
  if (!lowerInput) return null;

  let junkCount = 0;
  let healthyCount = 0;
  let moderateCount = 0;

  junkFoods.forEach(food => {
    if (lowerInput.includes(food)) junkCount++;
  });

  healthyFoods.forEach(food => {
    if (lowerInput.includes(food)) healthyCount++;
  });

  moderateFoods.forEach(food => {
    if (lowerInput.includes(food)) moderateCount++;
  });

  const total = junkCount + healthyCount + moderateCount;

  let score;
  let category;

  if (total === 0) {
    // Unknown food
    score = 5;
    category = 'moderate';
  } else {
    const healthRatio = (healthyCount * 10 + moderateCount * 5 - junkCount * 8) / total;
    score = Math.max(0, Math.min(10, Math.round(healthRatio)));
    
    if (score <= 3) category = 'low';
    else if (score <= 6) category = 'moderate';
    else category = 'high';
  }

  // Friendly conversational prefix based on what they tracked
  const prefixPool = [
    `I see you logged "${input}". `,
    `Thanks for sharing! Looking at "${input}"... `,
    `Got it! Let's break down "${input}". `,
    `Interesting choice. Here's my take on "${input}": `
  ];
  const randomPrefix = prefixPool[Math.floor(Math.random() * prefixPool.length)];

  const baseExplanation = explanations[category][Math.floor(Math.random() * explanations[category].length)];
  const explanation = randomPrefix + baseExplanation;
  
  const availableSuggestions = [...suggestions[category]];
  const numSuggestions = Math.min(3, availableSuggestions.length);
  const pickedSuggestions = [];
  
  for (let i = 0; i < numSuggestions; i++) {
    const idx = Math.floor(Math.random() * availableSuggestions.length);
    pickedSuggestions.push(availableSuggestions.splice(idx, 1)[0]);
  }

  return {
    score,
    category,
    explanation,
    suggestions: pickedSuggestions,
    foodInput: input,
  };
}
