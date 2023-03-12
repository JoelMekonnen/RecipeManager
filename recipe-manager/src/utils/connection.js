const base_url = "http://localhost:4000/"
const request_urls = {
      hello: base_url + 'user/hello',
      register: base_url + "user/register",
      login: base_url + "user/login",
      createCompany: base_url + "company/register",
      getIngredients: base_url + "ingredient/list"
}
export default request_urls