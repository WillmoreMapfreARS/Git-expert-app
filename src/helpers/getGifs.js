export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=96SWMfVbr3l1UfP6dbgIt1fXMTiJbPGL&q=${category}&limit=3`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}