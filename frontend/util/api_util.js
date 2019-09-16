export const fetchAllCats = () =>
  $.ajax({
    method: "GET",
    url: "api/cats"
  });

export const fetchSingleCat = id =>
  $.ajax({
    method: "GET",
    url: `api/cats/${id}`
  });

export const makeCat = cat => {
  return $.ajax({
    method: "POST",
    url: "api/cats",
    data: cat,
    contentType: false,
    processData: false
  });
};

export const updateCat = (catId, cat) => {
  return $.ajax({
    method: "PATCH",
    url: `api/cats/${catId}`,
    data: { catId, cat },
    contentType: false,
    processData: false
  });
};

export const destroyCat = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/cats/${id}`
  });
};
