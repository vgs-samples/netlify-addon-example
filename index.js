// get YOUR_VAULT_TENANT in the VGS Dashboard -> Home -> under the page header -> Vault ID
const vgsForm = window.VGSCollect.create('YOUR_VAULT_TENANT', 'SANDBOX', () => {});

const css = {
  boxSizing: 'border-box',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"',
  color: '#40545F',
  fontSize: '1rem',
};

vgsForm.field('#secure-field', {
  type: 'text',
  name: 'secure-field',
  css: css,
});

document.getElementById("collect-form").addEventListener("submit", async(e) => {
  e.preventDefault();
  vgsForm.submit(
    "/", // change in VGS Dashboard -> Routes -> Manage (inbound route) -> Filters -> Conditions
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: {
        "form-name": "collect-form",
        "field": document.querySelector("input#field").value
      },
      serialization: "formData"
    },
    (status, state) => {
      console.log('state', state)
    },
    function(errors) {
      console.error(errors);
    }
  );
});
