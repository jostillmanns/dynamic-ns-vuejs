# Dynamic namespaces in Vue.js

This repo presents a recurrent problem my team is having
when working on a large-size Vue.js project (around
260 components).

Communication among reusable components in Vue.js is 
supported via props (for parent-child communication) and events 
(for child-parent/siblings communication). Most of the time using 
props is enough. Let `C` be a reusable
component which renders a provided object `x`. 
Let `A` and `B` be components
(living in different modules of our application) that use `C`, 
providing `x` via props
At this point, it's easy to track the data flow through the 
components just by looking at the props.

## Problem
Things get complicated when your reusable components are deep nested
in a hierarchy of components. Let's imagine the next scenario:

```
A
  \
   --- C --- D --- E
  /
B
```

Components `C`, `D`, and `E` are reusable components (shared among all our 
modules). Components `A` and `B` belong to their respective different
modules. 
If component `E` requires some data, let's call it `x`, then
`x` must be passed as a prop all the way down starting from
components `A` and `B`... even if `x` is not needed at all by 
components `C` and `D`. Tracking the data flow is not as
easy as before. Clearly, `E` should rely on the store, but it 
has to do it in a way that keeps it reusable.

vuex allows us divide our store into namespaced *modules*, each of 
them containing its own state, mutations, getters, and so on.

Given our scenario, we divide our store into two modules (where
components `A` and `B` reside, respectively). Now, the component
`E` would look like this:

```
import { mapGetters } from 'vuex';

export default {
    name: 'E',
    computed: {
        ...mapGetters(namespace, ['getX']),
    },
};
```

`getX` is used in the template of `E`. The problem here lies in 
how to resolve `namespace` at runtime, since the component
`E` can exists as part of two different namespaced modules (and therefore,
two different state objects).

## Solution
The solution (provided in this repo) is based on the construction of
another module for our store: a shared store. The sole purpose of this
module is to delegate `getX` to the correct namespaced module at runtime.

`app/shared/store.js`
```
const getters = {
    getX: function(state, getters, rootState, stores) {
        const storeNs = `${rootState.route.name}Store`;
        const currentFuncName = Object.keys(getters)[0];
        return stores[`${storeNs}/${currentFuncName}`];
    }
}

export default {
  namespaced: true,
  state: {},
  getters,
  actions: {},
  mutations: {},
}
```
The "magic" relies on the use of `rootState.route.name` for
resolving the correct namespace at runtime. This way, `getX`
in our shared store behaves as a proxy: it does not contain
the logic to perform `getX`, but delegates to the correct 
`getX` implemented in the other modules (since we have two
modules, we implement `getX` two times).

## Example provided
In this repo the component hierarchy is as follows:

```
CheckoutDetails.vue
                   \
                    --- TicketSummary.vue --- TicketStatus.vue
                   /
TicketDetails.vue
```

`TicketStatus.vue` is a shared component that can exists in two
different contexts:
    - when navigating to `/#/ticket-details`
    - when navigating to `/#/checkout-details`

## Try it out
`npm install`

`npm run serve`
