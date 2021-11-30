let authPaths = {
    Register: `auth/register`,
    Login: `auth/authenticate`,
    RefreshToken: `auth/refresh`,
    RevokeToken: `auth/revoke`,
    CheckEmailExists: `users/exists`,
};
let authRoutePaths = {
    Register: 'register',
    Login: 'login',
};
let authNavRoutes = {
    Register: () => [`/auth/${authRoutePaths.Register}`],
    Login: () => [`/auth/${authRoutePaths.Login}`],
    // RefreshToken: () => [`/auth/refresh`],
    // RevokeToken: () => [`/auth/revoke`],
};
let authConsts = {
    UserKey: "psr-userkey-tlxstgmzna"
};
export const AuthEndpoints = authPaths; // contained in authlib
export const AuthRoutePaths = authRoutePaths;
// export const AuthNavRoutes: IAuthNavRoutes = authNavRoutes;
export const AuthConstants = authConsts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25zdGFudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hdXRobGliL3NyYy9saWIvYXV0aC5jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBLElBQUksU0FBUyxHQUFtQjtJQUM1QixRQUFRLEVBQUUsZUFBZTtJQUN6QixLQUFLLEVBQUUsbUJBQW1CO0lBQzFCLFlBQVksRUFBRSxjQUFjO0lBQzVCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLGdCQUFnQixFQUFFLGNBQWM7Q0FDbkMsQ0FBQztBQUVGLElBQUksY0FBYyxHQUFvQjtJQUNsQyxRQUFRLEVBQUUsVUFBVTtJQUNwQixLQUFLLEVBQUUsT0FBTztDQUNqQixDQUFDO0FBRUYsSUFBSSxhQUFhLEdBQW1CO0lBQ2hDLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BELEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlDLHlDQUF5QztJQUN6Qyx1Q0FBdUM7Q0FDMUMsQ0FBQztBQUVGLElBQUksVUFBVSxHQUFtQjtJQUM3QixPQUFPLEVBQUUsd0JBQXdCO0NBQ3BDLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQW1CLFNBQVMsQ0FBQyxDQUFDLHVCQUF1QjtBQUMvRSxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQW9CLGNBQWMsQ0FBQztBQUM5RCw4REFBOEQ7QUFDOUQsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFtQixVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElBdXRoRW5kcG9pbnRzIHtcclxuICAgIHJlYWRvbmx5IFJlZ2lzdGVyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBMb2dpbjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUmVmcmVzaFRva2VuOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBSZXZva2VUb2tlbjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ2hlY2tFbWFpbEV4aXN0czogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBdXRoUm91dGVQYXRocyB7XHJcbiAgICByZWFkb25seSBSZWdpc3Rlcjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTG9naW46IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXV0aE5hdlJvdXRlcyB7XHJcbiAgICByZWFkb25seSBSZWdpc3RlcjogKCkgPT4gYW55W10gfCBzdHJpbmc7XHJcbiAgICByZWFkb25seSBMb2dpbjogKCkgPT4gYW55W10gfCBzdHJpbmc7XHJcbiAgICAvLyByZWFkb25seSBSZWZyZXNoVG9rZW46ICgpID0+IGFueVtdIHwgc3RyaW5nO1xyXG4gICAgLy8gcmVhZG9ubHkgUmV2b2tlVG9rZW46ICgpID0+IGFueVtdIHwgc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBdXRoQ29uc3RhbnRzIHtcclxuICAgIHJlYWRvbmx5IFVzZXJLZXk6IHN0cmluZztcclxufVxyXG5cclxubGV0IGF1dGhQYXRoczogSUF1dGhFbmRwb2ludHMgPSB7XHJcbiAgICBSZWdpc3RlcjogYGF1dGgvcmVnaXN0ZXJgLFxyXG4gICAgTG9naW46IGBhdXRoL2F1dGhlbnRpY2F0ZWAsXHJcbiAgICBSZWZyZXNoVG9rZW46IGBhdXRoL3JlZnJlc2hgLFxyXG4gICAgUmV2b2tlVG9rZW46IGBhdXRoL3Jldm9rZWAsXHJcbiAgICBDaGVja0VtYWlsRXhpc3RzOiBgdXNlcnMvZXhpc3RzYCxcclxufTtcclxuXHJcbmxldCBhdXRoUm91dGVQYXRoczogSUF1dGhSb3V0ZVBhdGhzID0ge1xyXG4gICAgUmVnaXN0ZXI6ICdyZWdpc3RlcicsXHJcbiAgICBMb2dpbjogJ2xvZ2luJyxcclxufTtcclxuXHJcbmxldCBhdXRoTmF2Um91dGVzOiBJQXV0aE5hdlJvdXRlcyA9IHtcclxuICAgIFJlZ2lzdGVyOiAoKSA9PiBbYC9hdXRoLyR7YXV0aFJvdXRlUGF0aHMuUmVnaXN0ZXJ9YF0sXHJcbiAgICBMb2dpbjogKCkgPT4gW2AvYXV0aC8ke2F1dGhSb3V0ZVBhdGhzLkxvZ2lufWBdLFxyXG4gICAgLy8gUmVmcmVzaFRva2VuOiAoKSA9PiBbYC9hdXRoL3JlZnJlc2hgXSxcclxuICAgIC8vIFJldm9rZVRva2VuOiAoKSA9PiBbYC9hdXRoL3Jldm9rZWBdLFxyXG59O1xyXG5cclxubGV0IGF1dGhDb25zdHM6IElBdXRoQ29uc3RhbnRzID0ge1xyXG4gICAgVXNlcktleTogXCJwc3ItdXNlcmtleS10bHhzdGdtem5hXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhFbmRwb2ludHM6IElBdXRoRW5kcG9pbnRzID0gYXV0aFBhdGhzOyAvLyBjb250YWluZWQgaW4gYXV0aGxpYlxyXG5leHBvcnQgY29uc3QgQXV0aFJvdXRlUGF0aHM6IElBdXRoUm91dGVQYXRocyA9IGF1dGhSb3V0ZVBhdGhzO1xyXG4vLyBleHBvcnQgY29uc3QgQXV0aE5hdlJvdXRlczogSUF1dGhOYXZSb3V0ZXMgPSBhdXRoTmF2Um91dGVzO1xyXG5leHBvcnQgY29uc3QgQXV0aENvbnN0YW50czogSUF1dGhDb25zdGFudHMgPSBhdXRoQ29uc3RzOyJdfQ==