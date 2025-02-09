//TODO: Create a script to seed categories

import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryList = [
  "Autos & Vehicles",
  "Comedy",
  "Education",
  "Entertainment",
  "Film & Animation",
  "Gaming",
  "How-to & Style",
  "Music",
  "News & Politics",
  "Nonprofits & Activism",
  "People & Blogs",
  "Pets & Animals",
  "Science & Technology",
  "Sports",
  "Travel & Events",
];

// Add descriptions for each category
export const seedCategories = categoryList.map((name) => ({
  name,
  description: `Videos related to ${name.toLowerCase()}`,
}));

async function main() {
  console.log("Seeding categories...");

  try {
    const values = categoryList.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));
    await db.insert(categories).values(values);

    console.log("Categories seeded successfully!");
  } catch (error) {
    console.error("error", error);
  }
}

main();
