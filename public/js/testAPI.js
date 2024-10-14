const form = document.querySelector("#multiForm");
const neUser = document.querySelector("#neUser");
const arr = ["first name", "last name", "email", "password"];
const arr2 = ["email", "password"];
const methods = ["GET", "POST", "PATCH", "DELETE"];
let thisMethod = null;
let endpoint = null;
let thisHeaders = null;
import { testExport } from "/js/testModules/test.js";
testExport();
var myModal = new bootstrap.Modal(document.getElementById("myModal"));

// var t = 2
// if (t === 2) {
//   // myModal.show();
// }

// <!-- Modal -->

document.querySelectorAll(".close").forEach((btn) => {
  btn.addEventListener("click", () => {
    myModal.hide();
  });
});

neUser.addEventListener("click", () => {
  makeForm(arr2, "Sing up");
  setFetch("user", "get", "p", false);
});

function makeForm(inp, btnText) {
  const content = ` 
       ${inp
         .map((i) => {
           return ` <div class="form-floating mb-3">
                     <input type=${i} class="form-control" id=${i} name=${i} placeholder=${
             i.slice(0, 1).toUpperCase() + i.slice(1, i.length)
           }>
                      <label for=${i}>${
             i.slice(0, 1).toUpperCase() + i.slice(1, i.length)
           }</label>
                  </div>`;
         })
         .join("")} 
          <div class="checkbox mb-3">

          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">${btnText}</button>
          <hr class="my-4">
          <div class="log">`;
  form.innerHTML = content;
}

function setFetch(route, end, type, auth) {
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

function setFormMethod() {}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const user = Object.fromEntries(formData);
  handleLogin(user);
});

// async function handleHTTP(user) {
//   let response = null;
//   try {
//     if (thisMethod === "GET") {

//       const response = await fetch(url);
//     } else {
//         console.log({...thisHeaders});
//         console.log("url");
//       const response = await fetch("http//localhost:8080/user/get", {
//         method: thisMethod,
//         body: JSON.stringify(user),
//         headers: {
//           ...thisHeaders,
//         },
//       });
//     }
//     if (response.ok) {
//       const data = await response.json();
//       const print = document.querySelector(".log");

//       console.log(data);

//       const entries = Object.entries(data);
//       let style = `${"text - primary"}`;
//       if (data?.message) style = `${"text-danger"}`;

//       print.innerHTML = ` <table class="table table-sm table-dark">
//    <thead>
//         <h2 class="fs-6 mb-4">API response </h2>
//       <tr>
//       <th class="text-body-secondary" scope="col">#</th>
//       <th class="text-body-secondary" scope="col">Object key</th>
//       <th class="text-body-secondary" scope="col">Object value</th>
//     </tr>
//   </thead>
//    <tbody>
//         ${entries
//           .map((e, i) => {
//             return `

//     <tr>
//       <th class=${style} scope="row">${i + 1}</th>
//       <td> <span class=${style} > ${e[0]}:</span></td>
//       <td class= "ml-20 text-break ${style}"> ${e[1]}</td>
//     </tr>
// `;
//           })
//           .join("")}
//             </tbody></table>`;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

async function handleLogin(user) {
  // console.log(`http//localhost:8080/${endpoint}`);
  try {
    const response = await fetch(`${endpoint}`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      const print = document.querySelector(".log");

      console.log(data);

      const entries = Object.entries(data);
      let style = `${"text - primary"}`;
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
