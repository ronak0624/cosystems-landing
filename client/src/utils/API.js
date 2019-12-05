import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  }
};
