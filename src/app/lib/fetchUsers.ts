// Function to fetch all users
export const fetchUsers = async () => {
  try {
    const source = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(source);
    if (!response.ok) {
      throw new Error("A netwok error occurred while fetching users");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
