//@flow

import update from "update-immutable";
import type { ResourceAction } from "../actions/resource";
import type { StreamingState } from "../types/State";

const initialState: StreamingState = {
  data: {},
  timestamp: []
};

export default function streaming(
  state: StreamingState = initialState,
  action: ResourceAction
) {
  switch (action.type) {
    case "RESOURCE_RECEIVE":
      if (action.value.hasOwnProperty("out")) {
        const timestamp = Date.now();
        const output = action.value.out;
        let newState;
        if (typeof output === "object") {
          const keys = Object.keys(output);
          for (const key of keys) {
            newState = update(newState ? newState : state, {
              data: { [key]: { $push: [output[key]] } }
            });
          }
        } else {
          newState = update(newState ? newState : state, {
            data: { [action.resource]: { $push: [output] } }
          });
        }
        return update(newState, {
          timestamp: { $push: [timestamp] }
        });
      } else return state;
    case "RESOURCE_RESTART_STREAMING":
      return {};
    default:
      return state;
  }
}
