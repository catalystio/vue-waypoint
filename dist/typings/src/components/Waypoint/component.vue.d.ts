declare const _default: import("vue").DefineComponent<
  {
    active: {
      type: BooleanConstructor;
      default: () => boolean;
    };
    options: {
      type: ObjectConstructor;
      validator: (value: IntersectionObserverInit | undefined) => boolean;
      default: () => {};
    };
    tag: {
      type: StringConstructor;
      default: () => string;
    };
    disableCssHelpers: {
      type: BooleanConstructor;
      default: () => boolean;
    };
  },
  () => import("vue").VNode<
    import("vue").RendererNode,
    import("vue").RendererElement,
    {
      [key: string]: any;
    }
  >,
  unknown,
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  import("vue").EmitsOptions,
  string,
  import("vue").VNodeProps &
    import("vue").AllowedComponentProps &
    import("vue").ComponentCustomProps,
  Readonly<
    {
      active: boolean;
      options: Record<string, any>;
      tag: string;
      disableCssHelpers: boolean;
    } & {}
  >,
  {
    active: boolean;
    options: Record<string, any>;
    tag: string;
    disableCssHelpers: boolean;
  }
>;
export default _default;
