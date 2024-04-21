import { BANK_DATA } from "@/constants/menuData";

export const getСurrencies = async (date: string) => {
  try {
    const response = await fetch(`${BANK_DATA}?date=${date}&json`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error data: ${error}`);
  }
};
