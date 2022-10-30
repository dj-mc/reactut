# reactut

Determine state. It's **not** state if...

- it remains **unchanged** over time
- it is passed from a parent via props
- it is **computable** from other state/props

Which components should own state:

- identify components that render something from that state
- if there is no parent component among them, create one so that...
- state may live there and be passed down to components that need it

Lifting state:

- coordinate two+ components' state by moving it to their common parent
- then pass the state down as props from their common parent to its child components
- also pass event handlers down as props if the children need to mutate their parent’s state
- consider components as “controlled” (driven by props) or “uncontrolled” (driven by state)

Hooks that use dependency arrays:

- useEffect
- useLayoutEffect
- useCallback
- useMemo
- useImperativeHandle
