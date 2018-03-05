import TicketDetails from '../app/ticket-details/TicketDetails.vue';
import CheckoutDetails from '../app/checkout-details/CheckoutDetails.vue';

export const routes = [
    {
        path: '/ticket-details',
        component: TicketDetails,
        meta: {
            storeNs: 'ticketDetailsStore',
        },
    },
    {
        path: '/checkout-details',
        component: CheckoutDetails,
        meta: {
            storeNs: 'checkoutDetailsStore',
        },
    },
];
