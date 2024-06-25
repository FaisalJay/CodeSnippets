export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService,
        private driveStatusService: DriveStatusService,
        private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.token) {
            if(this.tokenExpired(currentUser.token)) {
                this.authService.logout();
                location.reload();
            }
            request = this.interceptRequest(request, currentUser.token);
        }
        return next.handle(request);
    }

    private interceptRequest(request, jwt) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${jwt}`
            }
        });
    }

    private tokenExpired(token: string) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
      }
}