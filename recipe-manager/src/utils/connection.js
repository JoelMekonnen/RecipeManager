const base_url = "http://localhost:4000/"
const request_urls = {
      base_url:base_url,
      hello: base_url + 'user/hello',
      register: base_url + "user/register",
      login: base_url + "user/login",
      createCompany: base_url + "company/register",
      getIngredients: base_url + "ingredient/list",
      searchIngredient: base_url + "ingredient/search",
      updateIngredient: base_url + "ingredient/update/",
      createIngredient: base_url + "ingredient/create/",
      getRecipe: base_url + "recipe/list",
      createRecipes: base_url + "recipe/create",
      getRecipeById: base_url + "recipe/getById/",
      updateRecipe:base_url + "recipe/update",
      getCategories:base_url + "recipe/category/get",
      createCategories:base_url + "recipe/category/create",
      createBaseUnits:base_url + "units/baseUnit/create",
      createUnits:base_url + "units/create",
      getBaseUnits:base_url + "units/baseUnit/get",
      getUnits:base_url + "units/get"
      
}
export default request_urls