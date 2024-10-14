const methods = ["GET", "POST", "PATCH", "DELETE"];
let thisMethod = null;
let endpoint = null;
let thisHeaders = null;

export function setFetch(route, end, type, auth) {
  switch (route) {
    case "user":
      endpoint = `user/${end}`;
      break;
    case "product":
      endpoint = `products/${end}`;
      break;
    case "address":
      endpoint = `add/${end}`;
      break;
    case "cart":
      endpoint = `cart/${end}`;
      break;
    default:
      endpoint = `test/${end}`;
  }
  console.log(endpoint);
  console.log("endpoint");
  switch (type) {
    case "g":
      thisMethod = "GET";
      break;
    case "p":
      thisMethod = `POST`;
      break;
    case "pc":
      thisMethod = "PATCH";
      break;
    case "d":
      thisMethod = "DELETE";
      break;
    default:
      thisMethod = "GET";
  }

  if (!auth) {
    thisHeaders = {
      "Content-Type": "application/json",
    };
  } else {
    const token = localStorage.getItem("token");
    thisHeaders = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
  }
}

export async function handleHTTP(obj) {
  let response = null;
  try {
    if (thisMethod === "GET") {
      response = await fetch(`${endpoint}`);
    } else {
      console.log({ ...thisHeaders });
      console.log("url");
      response = await fetch(`${endpoint}`, {
        method: thisMethod,
        body: JSON.stringify(obj),
        headers: {
          ...thisHeaders,
        },
      });
    }
    if (response?.ok) {
      const data = await response.json();
      const print = document.querySelector(".log");

      console.log(data);

      const entries = Object.entries(data);
      let style = `${"text-primary"}`;
      if (data?.message) style = `${"text-danger"}`;

      print.innerHTML = ` <table class="table table-sm table-dark">
   <thead>
        <h2 class="fs-6 mb-4">API response </h2>
      <tr>
      <th class="text-body-secondary" scope="col">#</th>
      <th class="text-body-secondary" scope="col">Object key</th>
      <th class="text-body-secondary" scope="col">Object value</th>
    </tr>
  </thead>
   <tbody>
        ${entries
          .map((e, i) => {
            return `

    <tr>
      <th class=${style} scope="row">${i + 1}</th>
      <td> <span class=${style} > ${e[0]}:</span></td>
      <td class= "ml-20 text-break ${style}"> ${e[1]}</td>
    </tr>
`;
          })
          .join("")}
            </tbody></table>`;
    }
  } catch (error) {
    console.log(error);
  }
}
