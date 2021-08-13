import vgsForm from './collect-form.js'

function transformExpDate() {
  this.type = 'text';
  let input = this.value;
  if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
  const expireDate = input.split('/').map(function(v) {
    return v.replace(/\D/g, '');
  });
  const output = expireDate.map(function(v, i) {
    return v.length == 2 && i < 2 ? v + ' / ' : v;
  });
  this.value = output.join('').substr(0, 7);
};

const input = document.querySelector('#expiration-date');
input.addEventListener('input', transformExpDate.bind(input));

// input validation to avoid typing non-number symbols
input.addEventListener('keypress', e => {
  if(e.code.includes('Key')) {
    e.preventDefault();
  }
})

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const handleSubmit = (data) => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "netlify-form",
      ...data,
    })
  }).catch(error => alert(error))
}

document.getElementById("collect-form").addEventListener("submit", async(e) => {
  e.preventDefault();
  const fields = document.querySelectorAll("input.form-field");
  vgsForm.submit(
    "/post", // change in VGS Dashboard -> Routes -> Manage (inbound route) -> Filters -> Conditions
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    },
    (status, { json }) => {
      fields.forEach(field => {
        json[field.name || field.id] = field.value
      })
      handleSubmit(json)
    },
    function(errors) {
      console.error(errors);
    }
  );
});
