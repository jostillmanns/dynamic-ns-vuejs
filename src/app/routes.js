import TicketDetails from '../app/ticket-details/TicketDetails.vue';
import CheckoutDetails from '../app/checkout-details/CheckoutDetails.vue';

export const routes = [
    {
        path: '/ticket-details',
        component: TicketDetails,
        name: 'ticketDetails', // the corresponding store name should be named accordingly
    },
    {
        path: '/checkout-details',
        component: CheckoutDetails,
        name: 'checkoutDetails',
    },
];
