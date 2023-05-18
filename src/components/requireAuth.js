import authService from "../services/authService"

export default function requireAuth(nextState, replace) {
    if (!authService.hasRole("DEPOT_WORKER")) {
      replace({
        pathname: "/unauth",
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }