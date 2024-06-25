@Injectable({
  providedIn: 'root'
})
export class exmpleGaurd implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const currentUser = this.authService.currentUserValue;
      if (currentUser) {
          // logged in so return true
          return true;
      }

      this.router.navigate(['/sessions/signin'], { queryParams: { redirect: window.location.href } });      
      //return false;
      return true;
  }
}
