### Example of using VGS as a netlify addon

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/dmarynych/netlify-one-click"><img src="https://www.netlify.com/img/deploy/button.svg"></a>

First to all you need to create your site and deploy to netlify.

1. Install netlify-cli. Netlify docs [https://www.netlify.com/docs/cli/](https://www.netlify.com/docs/cli/)
2. Deploy your site with form. Here is example code for it
```html
<form name="contact" method="post" netlify-honeypot="b" autocomplete="off" netlify secure>
  <p>
    <label for="name">Basic Field</label>
    <input type="text" name="name" id="name" />
  </p>
    
  <p>
    <label for="ssn">Secure Field</label>
    <input type="text" name="secure" data-secure-field />
  </p>
  <p>
    <button type="submit" id="submit">Send</button>
  </p>
</form>
```
- `name` & `netlify` form attributes are required by (Netlify Forms)[https://www.netlify.com/docs/form-handling/]
- `secure` attribute enables (VGS Collect)[https://www.verygoodsecurity.com/docs/features/vgs-collect] to secure your form.
- `data-secure-field` input attribute tells which field should be secured


3. Install VGS authentication plugin for netlify cli by running `netlify plugins:install @vgs/netlify-cli-plugin`
4. Run `netlify vgs-auth` from your site's directory.
5. Then, follow interactive guide after authentication flow.
