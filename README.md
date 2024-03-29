Addon docs https://www.verygoodsecurity.com/docs/integrations/netlify

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
<form name="contact" method="post" netlify-honeypot="b" autocomplete="off" data-netlify data-secure>
  <p>
    <label for="name">Basic Field</label>
    <input type="text" name="name" id="name" />
  </p>
    
  <p>
    <label for="secure">Secure Field</label>
    <input type="text" name="secure" id="secure" data-secure-field />
  </p>
  <p>
    <button type="submit" id="submit">Send</button>
  </p>
</form>
```
- `name` & `netlify` form attributes are required by [Netlify Forms](https://www.netlify.com/docs/form-handling/)
- `data-secure` attribute enables [VGS Collect](https://www.verygoodsecurity.com/docs/features/vgs-collect) to secure your form.
- `data-secure-field` input attribute tells which field should be secured


### Example of similar setup using Collect.js

1. Go to [VGS Dashboard](https://dashboard.verygoodsecurity.com)
2. Change YOUR_SITE_URL with url of your netlify site (with https://) in collect-route.yaml file
3. Click Routes in the left Sidebar
4. Import collect-route.yaml on the VGS Dashboard
5. Copy your VGS Vault id (it looks like `tnt9vwcpbe8`)
6. Replace YOUR_VAULT_ID in collect.js file with real id
7. Deploy your site and open `/collect` page
8. Submit the form & observe that `secure-field` is aliased now

#### How it works
1. When you deploy your site, make sure to include `name` attribute to your form. Then, add the same name to your collect payload https://github.com/verygoodsecurity/netlify-addon-example/blob/master/collect.js#L27
2. Then create VGS Collect fields, isntead of hidden inputs https://github.com/verygoodsecurity/netlify-addon-example/blob/master/collect.js#L11
3. Also, you need to include hidden input for each field that you want to secure https://github.com/verygoodsecurity/netlify-addon-example/blob/master/collect.html#L50. It will help netlify parser to know which field names will be submitted later.
