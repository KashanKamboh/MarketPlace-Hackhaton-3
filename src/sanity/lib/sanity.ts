import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "your_project_id", // Replace with your Sanity Project ID
  dataset: "your_dataset", // Replace with your dataset name
  apiVersion: "2023-01-01", // Replace with your API version
  useCdn: true,
});

// Define the product type
export interface Product {
  sizes: number;
  size: boolean;
  rating: undefined;
  image: string;
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  inventory: number;
}

// Fetch products based on the search query
export const searchProducts = async (query: string): Promise<Product[]> => {
  const searchQuery = `*[_type == "product" && name match "${query}*"]{
    _id,
    name,
    price,
    "imageUrl": image.asset->url
  }`;

  try {
    const results: Product[] = await sanityClient.fetch(searchQuery);
    return results;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
