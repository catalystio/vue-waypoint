/**
 * Utility function that mocks the `IntersectionObserver` API. Necessary for components that rely
 * on it, otherwise the tests will crash. Recommended to execute inside `beforeEach`.
 * @param intersectionObserverMock - Parameter that is sent to the `Object.defineProperty`
 * overwrite method. `jest.fn()` mock functions can be passed here if the goal is to not only
 * mock the intersection observer, but its methods.
 */
export default function setupIntersectionObserverMock({
  root,
  rootMargin,
  thresholds,
  disconnect,
  observe,
  takeRecords,
  unobserve
}?: {
  root?: null | undefined;
  rootMargin?: string | undefined;
  thresholds?: never[] | undefined;
  disconnect?: (() => null) | undefined;
  observe?: (() => null) | undefined;
  takeRecords?: (() => never[]) | undefined;
  unobserve?: (() => null) | undefined;
}): void;
