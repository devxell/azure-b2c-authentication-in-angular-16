export const environment = {
    production: false,
    apiBaseUri: "https://localhost:44387/",
    azureActiveDirectory: {
      signupSingInPolicy: 'B2C_1_susi',
      tenantName: 'replace your Tenant Name here',
      tenantId: 'replace your Tenant ID here',
      clientId: 'replace your Client ID here',
      instance: 'https://login.microsoftonline.com/',
      postLogoutRedirectUri: 'https://localhost:4200/',
      redirectUri: 'https://localhost:4200/',
      resources: {
        investorPortalApi: {
          endPoint: 'https://localhost:44387/',
          scope: 'replace your scope here',
        }
      },
    }
  };
  