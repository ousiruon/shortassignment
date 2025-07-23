// Function to fetch a single user by ID
export const fetchSingleUser = async (id: number) => {
  try {
    const source = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(source);
    if (!response.ok) {
      throw new Error("A netwok error occurred while fetching this user");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
