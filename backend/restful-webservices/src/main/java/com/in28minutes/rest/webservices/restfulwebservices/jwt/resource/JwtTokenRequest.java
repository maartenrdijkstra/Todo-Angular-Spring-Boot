package com.in28minutes.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTYwOTA2ODk4MSwiaWF0IjoxNjA4NDY0MTgxfQ.qOSk14lbSxQxBRaCqhYOpqCTKgEr8iDC_YB6tuf7Yke0qoYZ7d2cgQAQZ31b7HAFic24ImiK_z0cheRHkezE0w"
//    }
}

//after typing secret signature mySecret
//  eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTYwOTA2ODk4MSwiaWF0IjoxNjA4NDY0MTgxfQ.qOSk14lbSxQxBRaCqhYOpqCTKgEr8iDC_YB6tuf7Yke0qoYZ7d2cgQAQZ31b7HAFic24ImiK_z0cheRHkezE0w
