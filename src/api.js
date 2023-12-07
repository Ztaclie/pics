import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID pRgTvseWFn6e7SXR65covsLHgfbmWJFL_H0NPWhdqKI",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
