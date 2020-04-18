## Install packages


```shell
## Install augular CLI globally
npm install -g @angular/cli

## new a project
ng new my-dream-app

cd my-dream-app

[ref](https://www.linkedin.com/learning/building-applications-with-angular-asp-dot-net-core-and-entity-framework-core)

## install package globally
npm install -g flag

# Serve the app, with -o to open in browser
ng serve

```

Angular Material provides UI components  
Click binding allows you to execute some  code when a click event occurs  
Injectable is required to make a service  
A bare minimum a component need is: Import statement, component decorator and class  

How should you double bind an input field: using `[(ngModel)]`

What defines the name of the component when you reference it through an HTML element?
> selector

How should you listen to an observable?
> observable.subscribe()
> 


> I don't know how to resolve this problem in NET Core 3.1 API. Now use NET Core 2 exercise project instead for backend part.
```log
info: Microsoft.AspNetCore.Hosting.Diagnostics[1]
      Request starting HTTP/1.1 GET http://localhost:63101/api/quizzes
info: Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerHandler[1]
      Failed to validate the token.
Microsoft.IdentityModel.Tokens.SecurityTokenInvalidSignatureException: IDX10503: Signature validation failed. Keys tried: 'System.Text.StringBuilder'.
Exceptions caught:
 'System.Text.StringBuilder'.
token: 'System.IdentityModel.Tokens.Jwt.JwtSecurityToken'.
   at System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler.ValidateSignature(String token, TokenValidationParameters validationParameters)
   at System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler.ValidateToken(String token, TokenValidationParameters validationParameters, SecurityToken& validatedToken)
   at Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerHandler.HandleAuthenticateAsync()
info: Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerHandler[7]
      Bearer was not authenticated. Failure message: IDX10503: Signature validation failed. Keys tried: 'System.Text.StringBuilder'.
Exceptions caught:
 'System.Text.StringBuilder'.
token: 'System.IdentityModel.Tokens.Jwt.JwtSecurityToken'.
info: Microsoft.AspNetCore.Cors.Infrastructure.CorsService[4]
      CORS policy execution successful.
info: Microsoft.AspNetCore.Authorization.DefaultAuthorizationService[2]
      Authorization failed.
info: Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerHandler[12]
      AuthenticationScheme: Bearer was challenged.
info: Microsoft.AspNetCore.Hosting.Diagnostics[2]
      Request finished in 20.1683ms 401

```

Visibility myth:  

```ts
import { Component } from '@angular/core'
import  { AuthService} from './auth.service'

@Component({
  template:`
        <button mat-button (click)="auth.logout()">Logout</button> 
    ` // Property 'auth' is private and only accessible within class 'NavComponent'.
})

export class NavComponent {
  constructor(public /* private  or nothing will cause (see above) **/auth: AuthService) { 
  }
}

```