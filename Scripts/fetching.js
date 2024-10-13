export const fetching = async (url) => {
  try {
    const response = await fetch(url, { method: "GET" });
    let data = await response.json();
    if (!response.ok) throw new Error("error fo fetch");
    return data;
  } catch (error) {
    console.error(error);
    return "error";
  }
};
