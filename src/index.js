import createConnectedRouter from "./ConnectedRouter";
import createConnectRouter from "./reducer";
import createSelectors from "./selectors";
import plainStructure from "./structure/plain";

export {
  CALL_HISTORY_METHOD,
  go,
  goBack,
  goForward,
  LOCATION_CHANGE,
  onLocationChanged,
  push,
  replace,
  routerActions,
} from "./actions";
export { default as routerMiddleware } from "./middleware";

export const ConnectedRouter =
  /*#__PURE__*/ createConnectedRouter(plainStructure);
export const connectRouter = /*#__PURE__*/ createConnectRouter(plainStructure);
export const {
  getLocation,
  getAction,
  getHash,
  getRouter,
  getSearch,
  createMatchSelector,
} = /*#__PURE__*/ createSelectors(plainStructure);
