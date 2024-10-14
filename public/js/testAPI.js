const userBtn = document.querySelectorAll(".user-btn");
const arr = ["first_name", "last_name", "email", "password"];
const arr2 = ["email", "password"];

import { createForm } from "/js/testAPImodules/createForm.js";
import { setFetch } from "/js/testAPImodules/HTTP.js";
import { mode } from "/js/testAPImodules/mode.js";

mode();

// var t = 2
// if (t === 2) {
//   //;
// }

userBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const endPoint = btn.getAttribute("id");
    switch (endPoint) {
      case "get":
        createForm("user", arr2, "Sing up");
        setFetch("user", "get", "p", false);

        break;
      case "new":
        createForm("user", arr, "Sing in");
        setFetch("user", "get", "p", false);

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
  });
});

// async function handleLogin(user) {
//   // console.log(`http//localhost:8080/${endpoint}`);
//   try {
//     const response = await fetch(`${endpoint}`, {
//       method: "POST",
//       body: JSON.stringify(user),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

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
