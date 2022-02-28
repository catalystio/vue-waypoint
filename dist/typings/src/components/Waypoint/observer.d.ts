export declare type WaypointState = {
  el: Element | undefined;
  going: Going | undefined;
  direction: Direction | undefined;
};
export declare enum Going {
  In = "IN",
  Out = "OUT"
}
export declare enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
export declare const createObserver: (
  options: IntersectionObserverInit | undefined
) => (callback: Function) => IntersectionObserver;
