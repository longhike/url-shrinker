const target_url = document.getElementById("target-url");
const target_alias = document.getElementById("target-alias");
const make_url = document.getElementById("make-url");

make_url.addEventListener("click", function (e) {
  e.preventDefault();
  let reqObj = {
    url: target_url.value,
    alias: target_alias.value,
  };
  fetch("/api/test", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(reqObj),
  })
  .then(response => console.log(response))
});