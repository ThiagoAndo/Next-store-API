window.addEventListener("load", () => {
  const page = document.querySelector("section");
 const link = document.querySelector("." + page.id);
 link.classList.add("active")
});


let singUp = document.querySelector("#signUp");

singUp.addEventListener("submit", (e) => {
  e.preventDefault();

  const uer = {
    password: "123456789",
    email: "ando.thiago@gmail.com",
  };
  const formData = new FormData(singUp);
  const user = Object.fromEntries(formData);

  handleLogin(user);
});
async function handleLogin(user) {
  try {
    const response = await fetch(`http://localhost:8080/user/get`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      const print = document.querySelector(".login");
      created_at: "06-08-2024h08:56:42";
      email_address: "ando.thiago@gmail.com";
      first_name: "Thiago";
      id: "4jgm2z1p2qlzi4mtum";
      last_name: "Freitas";
      password: "$2a$12$10PuEBSwNy6KxcgY9yOZRuC83gUn1bwVJsqCNNSJMQNHZsm0NalOq";
      console.log(data);

      print.innerHTML = `   
            <small class="text-body-secondary">id ${data?.id}</small>
             <small class="text-body-secondary">iName ${
               data?.first_name + " " + data?.last_name
             }</small>
             <small class="text-body-secondary">email ${
               data?.email_address
             }</small>
             <small class="text-body-secondary">created at ${
               data?.created_at
             }</small>
             <small class="text-body-secondary">password ${
               data?.password
             }</small>
         
            `;
    }
  } catch (error) {
    console.log(error);
  }
}

// async function submitFormHandler(user) {
//   notification(null, "Sending Request:", "REGISTERING NEW USER.", "pending");
//   let data = null;
//   try {
//     const response = await fetch(
//       // "http://localhost:8080/user/new",
//       "https://api-store-pj2y.onrender.com/user/new",
//       {
//         method: "POST",
//         body: JSON.stringify(user),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (response.ok) {
//       data = await response.json();
//       if (data.hasOwnProperty("message")) {
//         notification(null, "Invalid Action:", data.message.toUpperCase());
//       } else {
//         signIn("credentials", {
//           redirect: false,
//           email: user.email,
//         });
//         if (isOrdering) {
//           router.replace("/checkout");
//         } else {
//           router.replace("/");
//         }
//         setStorage(data);
//         notification(
//           null,
//           "Registered:",
//           "USER REGISTERED SUCCESSFULLY!",
//           "success"
//         );
//       }
//     } else {
//       throw "Connecting to the database failed!";
//     }
//   } catch (error) {
//     notification(null, "Sending Request:", error.message, "error");
//   }
// }

// function ChangeData() {
//   const { notification } = useNotification();
//   const route = useRouter();
//   async function handleCheck(data, whatChange) {
//     if (whatChange.length === 0) {
//       notification(
//         null,
//         "Invalid Action:",
//         "USER DETAILS HAVE NOT CHANGED",
//         "error"
//       );
//       return;
//     }
//     const id = localStorage.getItem("id") || null;
//     const hasAddress = localStorage.getItem("line_one");
//     const httpCAll = [];
//     const user = {
//       route: "user",
//       method: "PATCH",
//       id,
//       first_name: data.first_name,
//       last_name: data.last_name,
//       email_address: data.email_address,
//     };
//     const add = {
//       route: "add",
//       method: hasAddress ? "PATCH" : "POST",
//       line_one: data.line_one,
//       line_two: data.line_two,
//       town_city: data.town_city,
//       constry_state: data.constry_state,
//       id,
//     };
//     setStorage(user, "not_null");
//     adrStorage(add);
//     if (whatChange.length === 1 && whatChange[0] === "user") {
//       httpCAll.push(user);
//     } else if (whatChange.length === 1 && whatChange[0] === "add") {
//       httpCAll.push(add);
//     } else {
//       httpCAll.push(user);
//       httpCAll.push(add);
//     }

//     httpCAll.forEach(async (e, index) => {
//       let data = null;
//       let method = null;

//       try {
//         const token = getUserToken();
//         const response = await fetch(
//           // `http://localhost:8080/${e.route}`,
//           `https://api-store-pj2y.onrender.com/${e.route}`,
//           {
//             method: e.method,
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: "Bearer " + token,
//             },
//             body: JSON.stringify({ ...e }),
//           }
//         );
//         if (response.ok) {
//           data = await response.json();
//         }
//         if (data?.error) {
//           notification(
//             null,
//             "Invalid Action:",
//             data.error.toUpperCase(),
//             "error"
//           );
//           return;
//         }

//         if (index === httpCAll.length - 1) {
//           notification(
//             null,
//             "Sending Request:",
//             "USER DETAILS HAVE BEEN UPDATED.",
//             "success"
//           );
//           route.push("/");
//         } else {
//           notification(null, "Invalid Action:", data.message, "error");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     });
//   }
// }
