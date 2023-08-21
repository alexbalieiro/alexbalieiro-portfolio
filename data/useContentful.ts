import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    accessToken: "K5QmEdREnqy9urSSdESVllG6l2wbOcnLT0UB0JthHnc",
    space: "vrg688bghvvi",
    host: "cdn.contentful.com",
  });
  const getPortfolio = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "portfolioAlexb",
      });
      const sanitizedEntries = entries.items.map((item: any) => {
        return { ...item.fields };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log("Error", error);
    }
  };
  return { getPortfolio };
};

export default useContentful;
