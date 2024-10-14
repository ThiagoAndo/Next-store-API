import { handleHTTP } from "/js/testAPImodules/HTTP.js";
export function createForm(id, inp, btnText) {
  const form = document.querySelector("#" + id);

  const content = `
       ${inp
         .map((i) => {
           return ` <div class="form-floating mb-3">
                     <input type=${i} class="form-control" id=${i} name=${i} 
                      placeholder=${tidyHolder(i)}>
                      <label for=${i}>${tidyHolder(i)}</label>
                  </div>`;
         })
         .join("")}
          <div class="checkbox mb-3">

          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">${btnText}</button>
          <hr class="my-4">
          <div class="log">`;

  form.innerHTML = content;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    handleHTTP(data);
  });
}

function tidyHolder(i) {
  return i.includes("_")
    ? i.split("_")[0].slice(0, 1).toUpperCase() +
        i.split("_")[0].slice(1, i.split("_")[0].length) +
        " " +
        i.split("_")[1]
    : i.slice(0, 1).toUpperCase() + i.slice(1, i.length);
}
