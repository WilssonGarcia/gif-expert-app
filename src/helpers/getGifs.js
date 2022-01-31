export const getGifs = async (category) => {
    const apiKey = 'nIpK6BoNQ1viSwstpQqBKtfHRMcba1eO';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;

    const response = await fetch(url);

    const { data } = await response.json();

    const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => ({
        id,
        title,
        url
    }));

    return gifs;
}