// get YOUR_VAULT_TENANT in the VGS Dashboard -> Home -> under the page header -> Vault ID
const vgsForm = window.VGSCollect.create('YOUR_VAULT_TENANT', 'SANDBOX', () => {});

const css = {
  boxSizing: 'border-box',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"',
  color: '#40545F',
};

vgsForm.field('#cc-holder', {
  type: 'text',
  name: 'name',
  placeholder: 'Card holder',
  validations: ['required'],
  css: css,
});

vgsForm.field('#cc-number', {
  type: 'card-number',
  name: 'number',
  successColor: '#4F8A10',
  errorColor: '#D8000C',
  placeholder: 'Card number',
  showCardIcon: true,
  validations: ['required', 'validCardNumber'],
  css: css,
});

export default vgsForm;
