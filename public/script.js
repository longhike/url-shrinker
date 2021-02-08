const target_url = document.getElementById("target-url");
const target_alias = document.getElementById("target-alias");
const make_url = document.getElementById("make-url");
const mini_url_div = document.getElementById("new-url");

make_url.addEventListener("click", function (e) {
  e.preventDefault();
  if (isValidURL(target_url.value)) {
    let reqObj = {
      url: target_url.value,
      alias: target_alias.value,
    };
    fetchAndReturnURL(reqObj)
      .then((data) => {
        console.log(data);
        // TO RUN ONLY ON THIS ONE SERVER
        // change the URL to: localhost:3000/r/ 
        // (keep the template $(data.alias_hash) the same)
        mini_url_div.textContent = `Your minified URL is: localhost:3001/v/${data.alias_hash}`;
      })
      .catch((err) => console.log(err.message));
  }
  else {
    mini_url_div.textContent = `Invalid URL, try again.`;
  }
  
});

async function fetchAndReturnURL(obj) {
  const response = await fetch("/api/minify", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(obj),
  });
  const url = await response.json();
  return url;
}

function isValidURL(a) {
  let url;
  try {
    url = new URL(a);
  } catch (error) {
    return false;
  }
  return true;
}
