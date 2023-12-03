$(document).ready(function () {
  getCategories();
});

function getCategories() {
  $.ajax({
    method: "GET",
    url: "/api/categories",
    success: function (data) {
      $("#categories").html(data);
    },
    error: function (error) {
      alert("Se ha producido un error: " + error);
    },
  });
}

getCategories();