# Entry Task (Example Solution)

## Directory Structure

The `app` directory contains the following directories:

- `actions`
- `components`
- `directives`
- `effects`
- `guards`
- `interceptors`
- `models`
- `pipes`
- `reducers`
- `selectors`
- `views`

## Routing

`@ngrx/router-store` is not used for maximum flexibility. Instead the following routing-related entities occupy the app:

- `RouteModel`
- `NavigateAction`
- `StoreRouteAction`
- `routeReducer`
- `RouteEffects`
- `whenNavigated()`
- `NavigateDirective`

### Example Use-case

1. A link with the `[appNavigate]="{view: RoutePath.Recipes, id: recipe.id}"` directive is clicked. The directive dispatches a `NavigateAction` with the inputted `RouteModel` as its payload.
2. Each instance of the `whenNavigated()` operator (hooked onto the `actions$: Actions` observable) catches the `NavigateAction` and passes the `RouteModel` in its payload to the passed-in mapper function.
    1. Based on the specified predicate, the mapper function defined in the `RecipeDetailEffects.requireRecipeById$` effect returns a new `GetRecipeRequestAction`, which is therefore dispatched.
    2. The `RecipeDetailEffects.getRecipeById$` catches the `GetRecipeRequestAction` and triggers the resource's retrieval.
3. The `RouteEffects.navigate$` effect also catches the `NavigateAction`, serializes the `RouteModel` in the action's payload to a URL and passes it to the `Router.navigateByUrl()` method.
4. The router's navigation cycle begins. The `RecipeDetailGuard.canActivate()` method is invoked (due to routes config in the `AppRoutingModule`) and allows the routing to continue only when the necessary resource (recipe detail) has been loaded.
5. The router's navigation cycle ends with the `NavigationEnd` event, which gets caught by the `RouteEffects.storeRoute$` effect. The URL carried by the event is parsed into a `RouteModel`, which becomes the payload of a newly dispatched `StoreRouteAction`.
6. The `routeReducer` catches the  `StoreRouteAction` and stores the `RouteModel` in its payload in the `route` slice of the app state.