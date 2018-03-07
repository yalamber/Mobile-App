//@flow

import type { Device } from "./Device";
import type { Resource } from "./Resource";
import type { Chart } from "./Chart";
import type { Orientation } from "./Orientation";

export type State = {
  devices: DevicesState,
  resources: ResourcesState,
  selectedDevice: SelectedDeviceState,
  selectedResource: SelectedResourceState,
  selectedAttributes: SelectedAttributesState,
  lockedAttributes: LockedAttributesState,
  nav: NavState
};

export type DevicesState = {
  [device: string]: Device
};

export type ResourcesState = {
  [resource: string]: {
    data: Resource,
    isFetching: boolean
  }
};

export type SelectedDeviceState = string;

export type SelectedResourceState = string;

export type SelectedAttributesState = {
  [char: Chart]: {
    [attribute: string]: boolean
  }
};

export type LockedAttributesState = {
  [char: Chart]: {
    [attribute: string]: boolean
  }
};

export type StreamingState = {
  timestamp: Array<number>,
  data: {
    [attribute: string]: Array<number>
  }
};

export type OrientationState = Orientation;

export type NavState = any;
