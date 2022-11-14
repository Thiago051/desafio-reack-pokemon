export const selectImage = (response) => {
    return response.data.sprites.other['official-artwork']['front_default']
    ?? response.data.sprites['front_default']
    ?? response.data.sprites.other.home['front_default']
    ?? response.data.sprites.versions['generation-viii']['icons']['front_default']
}