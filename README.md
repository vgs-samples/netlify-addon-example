Addon docs https://www.verygoodsecurity.com/integrations/netlify

### Example of using VGS as a netlify addon

First to all you need to create your site and deploy to netlify.

1. Clone repo
2. Install netlify-cli. Netlify docs [https://www.netlify.com/docs/cli/](https://www.netlify.com/docs/cli/)
3. Run `netlify init` from site's directory
4. Run `netlify addons:create vgs` from site's directory.
5. Run `netlify addons:auth vgs`, to authenticate and give addon access to your VGS account.
6. Then, follow interactive guide.

Example of form
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


