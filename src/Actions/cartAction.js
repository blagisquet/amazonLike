export const addArticle = article => ({
  type: "ADD_ARTICLE",
  payload: article
});

export const removeArticle = articleId => ({
  type: "REMOVE_ARTICLE",
  payload: articleId
});