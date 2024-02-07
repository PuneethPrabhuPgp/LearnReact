const getImageUrl = (person, size = 's') => {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.png'
  );
}

export default getImageUrl;
